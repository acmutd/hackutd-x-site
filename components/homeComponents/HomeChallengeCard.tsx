import { useState, Fragment } from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
/**
 * Challenge Cards Component
 *
 * Cards for challenge section in home page
 * To add a linebreak for the description, simply add \n into the string value where needed in firebase
 */
interface challengeProps {
  sponsor: string;
  challengeName: string;
  prizes: Array<String>;
  sponsorSummary: string;
  challengeStatement: string;
}

function HomeChallengeCard(props: challengeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const description = props.challengeStatement.replaceAll('\\n', '\n');
  const summary = props.sponsorSummary.replaceAll('\\n', '\n');

  return (
    <>
      {/* Card */}
      <div className="border-2 border-secondaryDark p-[2px] hoefler-text md:w-[48%] w-full lg:mt-8 md:mt-6 mt-4">
        <div className="border-2 border-secondaryDark p-4 h-full relative">
          <div className="lg:text-xl text-lg">Presented by {props.sponsor}</div>
          <div className="lg:text-3xl text-2xl font-semibold md:mt-3 mt-1 md:mb-6 mb-3">
            {props.challengeName}
          </div>
          <ul className="leading-snug mb-12">
            <li>1st: {props.prizes[0]} &#40;1 per team member&#41;</li>
            {props.prizes.length >= 2 && (
              <li>2nd: {props.prizes[1]} &#40;1 per team member&#41;</li>
            )}
            {props.prizes.length >= 3 && (
              <li>3rd: {props.prizes[2]} &#40;1 per team member&#41;</li>
            )}
          </ul>
          <div className="absolute bottom-4 right-4">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-end ml-auto text-xl font-semibold"
            >
              <p>Read More</p>
              <ChevronRightIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      {/* Popup modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-secondaryDark/[.5] backdrop-blur-sm"></div>
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
                {/* Popup card(panel) */}
                <Dialog.Panel className="w-full 2xl:max-w-[55%] md:max-w-[70%] max-w-[90%] transform overflow-hidden bg-[url('/assets/hero-bg.png')] text-primary border-2 border-primary p-[2px] text-left align-middle shadow-xl transition-all hoefler-text">
                  <div className="border-2 border-primary px-8 pt-8 pb-6">
                    <Dialog.Title
                      as="h3"
                      className="md:text-3xl text-xl font-bold leading-6 text-center"
                    >
                      {props.sponsor}
                    </Dialog.Title>
                    <p className="sm:my-6 my-3 2xl:text-lg md:text-base text-sm whitespace-pre-line">
                      {summary}
                      {props.sponsor == 'StateFarm' && (
                        <a
                          className="underline"
                          href="https://youtu.be/k9tHe1W0rVE"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://youtu.be/k9tHe1W0rVE
                        </a>
                      )}
                      {props.sponsor == 'Frontier' && (
                        <a
                          className="underline"
                          href="https://frontier-careers.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://frontier-careers.com/
                        </a>
                      )}
                    </p>
                    <p className="md:text-xl text-lg font-semibold">{props.challengeName}</p>
                    <p className="2xl:text-lg md:text-base text-sm mt-2 whitespace-pre-line">
                      {description}
                    </p>
                    <div className="hidden sm:flex w-full justify-between mt-10 md:text-base text-sm">
                      <div className="flex flex-col items-center grow basis-1/3">
                        <div className="2xl:text-xl text-lg font-semibold">1st Place Prize</div>
                        <div>{props.prizes[0]}</div>
                        <div> &#40;1 per team member&#41;</div>
                      </div>
                      {props.prizes.length >= 2 && (
                        <div className="flex flex-col items-center grow basis-1/3">
                          <div className="2xl:text-xl text-lg font-semibold">2nd Place Prize</div>
                          <div>{props.prizes[1]}</div>
                          <div> &#40;1 per team member&#41;</div>
                        </div>
                      )}
                      {props.prizes.length >= 3 && (
                        <div className="flex flex-col items-center grow basis-1/3">
                          <div className="2xl:text-xl text-lg font-semibold">3rd Place Prize</div>
                          <div>{props.prizes[2]}</div>
                          <div> &#40;1 per team member&#41;</div>
                        </div>
                      )}
                    </div>
                    <div className="sm:hidden block mt-8 text-sm">
                      <ul className="leading-snug">
                        <li>1st: {props.prizes[0]} &#40;1 per team member&#41;</li>
                        {props.prizes.length >= 2 && (
                          <li>2nd: {props.prizes[1]} &#40;1 per team member&#41;</li>
                        )}
                        {props.prizes.length >= 3 && (
                          <li>3rd: {props.prizes[2]} &#40;1 per team member&#41;</li>
                        )}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex items-end ml-auto md:text-xl text-lg font-semibold outline-none"
                      >
                        <p>Close</p>
                        <ChevronRightIcon className="w-8 h-8" />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default HomeChallengeCard;
