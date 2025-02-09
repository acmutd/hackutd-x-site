import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import AdminHeader from '../../components/adminComponents/AdminHeader';
import FilterComponent from '../../components/adminComponents/FilterComponent';
import UserList from '../../components/adminComponents/UserList';
import { RequestHelper } from '../../lib/request-helper';
// import { UserData } from '../api/users';
import { HackerStatus } from '../api/acceptreject';
import { useAuthContext } from '../../lib/user/AuthContext';
import UserAdminView from '../../components/adminComponents/UserAdminView';
import { isAuthorized } from '.';
import AllUsersAdminView from '../../components/adminComponents/AllUsersAdminView';
import { RegistrationState } from '../../lib/util';
import { Dialog, Transition } from '@headlessui/react';

type FilterCriteria = {
  hacker: boolean;
  sponsor: boolean;
  organizer: boolean;
  admin: boolean;
  super_admin: boolean;
  accepted: boolean;
  rejected: boolean;
  waiting: boolean;
};

/**
 *
 * The User Dashboard of Admin Console. Shows all users that are registered in the system.
 *
 * Route: /admin/users
 *
 */
export default function UserPage() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserIdentifier[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserIdentifier[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(RegistrationState.UNINITIALIZED);
  const [nextRegistrationStatus, setNextRegistrationStatus] = useState(
    RegistrationState.UNINITIALIZED,
  );
  const [applicationDecisionsState, setApplicationDecisionsState] = useState(false);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const { user } = useAuthContext();

  let timer: NodeJS.Timeout;

  const [filter, setFilter] = useState<FilterCriteria>({
    hacker: true,
    sponsor: true,
    organizer: true,
    admin: true,
    super_admin: true,
    accepted: true,
    rejected: true,
    waiting: true,
  });

  // Filters users based on a given filter criteria (typically the updated filter criteria)
  const filterUsersOnCriteria = (
    users: UserIdentifier[],
    filterCriteria: FilterCriteria,
    searchQuery: string,
  ): UserIdentifier[] => {
    return users.filter(
      ({ user, status }) =>
        filterCriteria[user.permissions[0].toLowerCase()] &&
        filterCriteria[status.toLowerCase()] &&
        (searchQuery !== ''
          ? `${user.firstName.trim()} ${user.lastName.trim()}`
              .toLowerCase()
              .indexOf(searchQuery.toLowerCase()) !== -1
          : true),
    );
  };

  async function fetchInitData() {
    setLoading(true);
    setNextRegistrationStatus(RegistrationState.UNINITIALIZED);
    if (!user) return;

    const allowRegistrationState = (
      await RequestHelper.get<{ allowRegistrations: boolean }>('/api/registrations/status', {
        headers: {
          Authorization: user.token,
        },
      })
    )['data'];

    const applicationDecisionsState = (
      await RequestHelper.get<{ applicationDecisions: boolean }>('/api/acceptreject/decisions', {
        headers: {
          Authorization: user.token,
        },
      })
    )['data'];

    const hackersStatus = (
      await RequestHelper.get<HackerStatus[]>(`/api/acceptreject?adminId=${user.id}`, {
        headers: {
          Authorization: user.token,
        },
      })
    )['data'];

    setRegistrationStatus(
      allowRegistrationState.allowRegistrations ? RegistrationState.OPEN : RegistrationState.CLOSED,
    );
    setApplicationDecisionsState(applicationDecisionsState.applicationDecisions);
    const hackerStatusMapping: Map<string, string> = new Map();
    hackersStatus.forEach((hackerStatus) =>
      hackerStatusMapping.set(hackerStatus.hackerId, hackerStatus.status),
    );

    const usersData = (
      await RequestHelper.get<UserIdentifier[]>('/api/users', {
        headers: {
          Authorization: user.token,
        },
      })
    )['data'].map((userData) => ({
      ...userData,
      status: hackerStatusMapping.has(userData.id)
        ? hackerStatusMapping.get(userData.id)
        : 'Waiting',
      selected: false,
    }));
    usersData.sort(() => Math.random() - Math.random());

    setUsers(usersData);
    setFilteredUsers([...usersData.filter((user) => user.user.permissions.includes('hacker'))]);
    setLoading(false);
  }

  useEffect(() => {
    fetchInitData();
  }, []);

  useEffect(() => {
    if (loading) return;
    timer = setTimeout(() => {
      // if user permission is admin, filter to hackers only
      if (user.permissions.includes('admin')) {
        setFilteredUsers([...users.filter((user) => user.user.permissions.includes('hacker'))]);
        setFilter({
          ...filter,
          hacker: true,
          admin: false,
          super_admin: false,
        });
      }
      setFilteredUsers(filterUsersOnCriteria(users, filter, searchQuery));
    }, 750);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, loading, users]);

  const updateFilter = (name: string) => {
    const filterCriteria = {
      ...filter,
      [name]: !filter[name],
    };

    setFilteredUsers(filterUsersOnCriteria(users, filterCriteria, searchQuery));
    setFilter(filterCriteria);
  };

  const sortByName = () => {
    setFilteredUsers((prev) =>
      [...prev].sort((a, b) => {
        const nameA = a.user.firstName + ' ' + a.user.lastName;
        const nameB = b.user.firstName + ' ' + b.user.lastName;
        return nameA.localeCompare(nameB);
      }),
    );
  };

  const handleUserSelect = (id: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, selected: !user.selected } : user)),
    );
    setFilteredUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, selected: !user.selected } : user)),
    );
    if (selectedUsers.includes(id)) {
      setSelectedUsers([...selectedUsers.filter((v) => v != id)]);
      return;
    }
    setSelectedUsers([...selectedUsers, id]);
  };

  const postHackersStatus = (status: string) => {
    const hackerIds = selectedUsers.filter(
      (id) => users.find((user) => user.id == id).status !== status,
    );

    if (hackerIds.length === 0) return;

    fetch('/api/acceptreject', {
      method: 'post',
      body: JSON.stringify({
        adminId: user.id,
        hackerIds,
        status,
      }),
      headers: {
        Authorization: user.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          alert('Hackers update failed...');
        } else {
          setUsers((prev) =>
            prev.map((user) => ({
              ...user,
              status: hackerIds.includes(user.id) ? status : user.status,
              selected: false,
            })),
          );
          setFilteredUsers(filterUsersOnCriteria(users, filter, searchQuery));
          alert('Hackers update success');
        }
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setSelectedUsers([]);
      });
  };

  const updateApplicationDecisions = async () => {
    try {
      await RequestHelper.post<{ applicationDecisions: boolean }, { msg: string }>(
        '/api/acceptreject/decisions',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: user.token,
          },
        },
        {
          applicationDecisions: !applicationDecisionsState,
        },
      );
      alert('Application decisions updated successfully');
      setApplicationDecisionsState(!applicationDecisionsState);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  if (!user || !((user.permissions as string[]).includes('super_admin') || (user.permissions as string[]).includes("admin")))
    return (
      <div className="bg-[url('/assets/hero-bg.png')] flex flex-col flex-grow text-2xl text-primary text-center pt-4">
        Unauthorized
      </div>
    );

  if (loading) {
    return (
      <div className="bg-[url('/assets/hero-bg.png')] flex flex-col flex-grow text-2xl text-primary text-center pt-4">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow items-center bg-[url('/assets/hero-bg.png')] h-screen">
      <Transition
        appear
        show={
          nextRegistrationStatus === RegistrationState.OPEN ||
          nextRegistrationStatus === RegistrationState.CLOSED
        }
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setNextRegistrationStatus(RegistrationState.UNINITIALIZED)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl  bg-secondaryDark p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-primary">
                    Update Registration Status
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-secondary">
                      {nextRegistrationStatus === RegistrationState.OPEN
                        ? 'Are you sure you want to allow registration?'
                        : 'Are you sure you want to disable registration?'}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primaryDark px-4 py-2 text-sm font-medium text-secondary hover:bg-primaryDark/70 hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      onClick={async () => {
                        try {
                          await RequestHelper.post<
                            { allowRegistrations: boolean },
                            { msg: string }
                          >(
                            '/api/registrations/toggle',
                            {
                              headers: {
                                'Content-Type': 'application/json',
                                Authorization: user.token,
                              },
                            },
                            {
                              allowRegistrations: nextRegistrationStatus === RegistrationState.OPEN,
                            },
                          );
                          alert('Registration state updated successfully');
                          setRegistrationStatus(nextRegistrationStatus);
                        } catch (error) {
                          alert(error);
                        } finally {
                          setNextRegistrationStatus(RegistrationState.UNINITIALIZED);
                        }
                      }}
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-tertiary px-4 py-2 text-sm font-medium text-secondary hover:bg-tertiary/70 hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      onClick={() => setNextRegistrationStatus(RegistrationState.UNINITIALIZED)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Head>
        <title>HackUTD X - Admin</title> {/* !change */}
        <meta name="description" content="HackUTD X's Admin Page" />
      </Head>
      <section id="subheader" className="p-2 md:p-4">
        <AdminHeader />
      </section>
      <div className="w-full max-w-screen-2xl" style={{ height: 'calc(100vh - 180px)' }}>
        {currentUser === '' ? (
          <AllUsersAdminView
            users={filteredUsers}
            selectedUsers={selectedUsers}
            onUserClick={(id) => {
              setSelectedUsers([id]);
              setCurrentUser(id);
            }}
            onUpdateRegistrationState={(newState) => {
              setNextRegistrationStatus(newState);
            }}
            onUserSelect={(id) => handleUserSelect(id)}
            onAcceptReject={(status) => postHackersStatus(status)}
            searchQuery={searchQuery}
            onSearchQueryUpdate={(searchQuery) => {
              setSearchQuery(searchQuery);
            }}
            registrationState={registrationStatus}
            filterChecked={filter}
            onFilterChecked={(filter) => updateFilter(filter)}
            applicationDecisions={applicationDecisionsState}
            updateApplicationDecisions={() => updateApplicationDecisions()}
          />
        ) : (
          <UserAdminView
            allUsers={users}
            users={filteredUsers}
            currentUserId={currentUser}
            goBack={() => setCurrentUser('')}
            onUserClick={(id) => {
              setSelectedUsers([id]);
              setCurrentUser(id);
            }}
            onAcceptReject={(status) => postHackersStatus(status)}
            onUpdateRole={(newRole) => {
              setUsers((users) =>
                users.map((user) =>
                  user.id !== currentUser
                    ? { ...user }
                    : { ...user, user: { ...user.user, permissions: [newRole] } },
                ),
              );
              setFilteredUsers((users) =>
                users.map((user) =>
                  user.id !== currentUser
                    ? { ...user }
                    : { ...user, user: { ...user.user, permissions: [newRole] } },
                ),
              );
            }}
          />
        )}
      </div>
    </div>
  );
}
