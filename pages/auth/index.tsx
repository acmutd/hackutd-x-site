import { useRouter } from 'next/router';
import { useAuthContext } from '../../lib/user/AuthContext';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Link from 'next/link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/**
 * A page that allows the user to sign in.
 *
 * Route: /auth
 */
export default function AuthPage() {
  const { isSignedIn, signInWithGoogle, updateUser } = useAuthContext();
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [passwordResetDialog, setPasswordResetDialog] = useState(false);
  const [sendVerification, setSendVerification] = useState(false);

  const router = useRouter();
  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(currentEmail, currentPassword)
      .then(({ user }) => {
        // Signed in
        if (!user.emailVerified) {
          setSendVerification(true);
          throw new Error('Email is not verified. Verify your email before logging in.');
        }
        updateUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const sendResetEmail = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(currentEmail)
      .then(() => {
        alert('Password reset email sent');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const sendVerificationEmail = () => {
    //send email verification
    try {
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          router.push('/auth');
          alert('Verification email sent, check your email to verify your account to log in');
        });
    } catch (error) {
      alert(
        'There has been a problem sending a verfication email.\nWait a few minutes before sending another request.',
      );
    }
  };

  if (isSignedIn) {
    router.push('/profile');
  }

  return (
    <>
      {/* md-lg screens */}
      <section className="min-h-screen h-screen md:flex hidden">
        {/* Login */}
        <div className="flex flex-col justify-center items-center h-full w-2/3 text-center bg-white p-4">
          {!passwordResetDialog ? (
            <div>
              <h1 className="text-3xl font-black">Login to your account</h1>
              <button
                className="px-4 py-2 rounded-md shadow-md bg-white my-4 text-lg font-bold hover:shadow-lg hover:bg-gray-100"
                onClick={() => signInWithGoogle()}
              >
                Sign in with Google
              </button>
              <div className="text-sm">or</div>
              <div className="w-[24rem]">
                <input
                  className="w-full rounded-lg p-2 border-[1px] border-gray-500"
                  value={currentEmail}
                  onChange={(e) => setCurrentEmail(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  placeholder="Email"
                ></input>
                <input
                  className="w-full rounded-lg p-2 my-2 border-[1px] border-gray-500"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  placeholder="Password"
                ></input>
              </div>
              <div
                className="hover:underline cursor-pointer w-[24rem] text-left"
                onClick={() => {
                  setPasswordResetDialog(true);
                  setErrorMsg('');
                }}
              >
                Forgot password?
              </div>
              <button
                className="px-4 py-2 w-[24rem] rounded-md shadow-md bg-green-200 hover:shadow-lg hover:bg-green-300"
                onClick={() => signIn()}
              >
                Sign in
              </button>
              <div className="mt-4 w-[24rem]">{errorMsg}</div>
              {sendVerification && (
                <button className="underline" onClick={() => sendVerificationEmail()}>
                  Resend verification
                </button>
              )}
            </div>
          ) : (
            // Password reset section
            <div>
              <div className="w-[24rem] text-left">
                <ArrowBackIcon
                  className="cursor-pointer"
                  onClick={() => {
                    setPasswordResetDialog(false);
                    setErrorMsg('');
                  }}
                />
              </div>
              <h1 className="text-3xl font-black">Reset Password</h1>
              <div className="w-[24rem]">
                <input
                  className="w-full rounded-lg p-2 border-[1px] border-gray-500 mt-8 mb-4"
                  value={currentEmail}
                  onChange={(e) => setCurrentEmail(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  placeholder="Email"
                ></input>
                <button
                  className="w-[24rem] px-4 py-2 rounded-md shadow-md bg-green-200 hover:shadow-lg hover:bg-green-300"
                  onClick={() => {
                    sendResetEmail();
                    setErrorMsg('');
                  }}
                >
                  Send Reset Email
                </button>
                <div className="text-left">{errorMsg}</div>
              </div>
            </div>
          )}
        </div>
        {/* Create new accont */}
        <div className="flex flex-col justify-center items-center h-full w-1/3 bg-green-200 text-center p-4">
          <h1 className="text-3xl font-black">Don&#39;t have an account?</h1>
          <p className="my-6">
            Create an account to apply to the hackathon and access user specific functionalities!
          </p>
          <Link href="/auth/signup">
            <a className="px-4 py-2 rounded-xl shadow-md bg-white hover:shadow-lg hover:bg-gray-100">
              Sign up
            </a>
          </Link>
        </div>
      </section>

      {/* Small Screen */}
      <section className="flex md:hidden min-h-screen h-screen justify-center bg-white">
        <div className="flex flex-col items-center justify-center w-5/6 h-4/5 bg-blue-200 my-8 p-6">
          {!passwordResetDialog ? (
            <>
              <h1 className="text-2xl font-black text-center">HackPortal 1.0</h1>
              <p className="text-sm text-center">
                Log in to continue or create an account to register
              </p>
              <button
                className="px-4 py-2 rounded-md shadow-md bg-white my-4 font-bold hover:shadow-lg hover:bg-gray-100"
                onClick={() => signInWithGoogle()}
              >
                Sign in with Google
              </button>
              <div className="text-sm">or</div>
              <div className="w-5/6">
                <input
                  className="w-full rounded-lg p-2 border-[1px] border-gray-500"
                  value={currentEmail}
                  onChange={(e) => setCurrentEmail(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  placeholder="Email"
                ></input>
                <input
                  className="w-full rounded-lg p-2 my-2 border-[1px] border-gray-500"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  placeholder="Password"
                ></input>
              </div>
              <button
                className="px-4 py-2 rounded-md shadow-md bg-white w-5/6 hover:shadow-lg hover:bg-gray-100"
                onClick={() => signIn()}
              >
                Sign in
              </button>
              <div className="text-sm">{errorMsg}</div>
              {sendVerification && (
                <button className="underline text-sm" onClick={() => sendVerificationEmail()}>
                  Resend verification
                </button>
              )}
              <div className="text-sm w-5/6 my-4">
                <div
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    setPasswordResetDialog(true);
                    setErrorMsg('');
                  }}
                >
                  Forgot Password?
                </div>
                <Link href="/auth/signup">
                  <a className="w-full hover:underline">Create an account</a>
                </Link>
              </div>
            </>
          ) : (
            //Password reset section
            <div>
              <div className="w-full text-left my-4">
                <ArrowBackIcon
                  className="cursor-pointer"
                  onClick={() => {
                    setPasswordResetDialog(false);
                    setErrorMsg('');
                  }}
                />
              </div>
              <h1 className="text-3xl font-black">Reset Password</h1>
              <div className="w-full">
                <input
                  className="w-full rounded-lg p-2 border-[1px] border-gray-500 my-4"
                  value={currentEmail}
                  onChange={(e) => setCurrentEmail(e.target.value)}
                  style={{ backgroundColor: '#FFF' }}
                  placeholder="Email"
                ></input>
                <button
                  className="px-4 py-2 rounded-md shadow-md bg-white hover:shadow-lg hover:bg-gray-100"
                  onClick={() => {
                    sendResetEmail();
                    setErrorMsg('');
                  }}
                >
                  Send Reset Email
                </button>
                <div className="text-left">{errorMsg}</div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
