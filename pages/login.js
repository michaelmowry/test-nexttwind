import { LockClosedIcon } from '@heroicons/react/solid';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export default function Login({ providers }) {
  const { status, loading } = useSession();
  const router = useRouter();
  const [error, setError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  if (status === 'authenticated') {
    router.push('/dashboard');
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log('Status check: ' && status);
    const { error } = await signIn('credentials', {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      callbackUrl: '/dashboard',
    });
    console.log('Error :' && error);
    if (error) setError(error);
  };

  return (
    <>
      {status === 'unauthenticated' && (
        <div className="flex justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md m-auto ">
            <div>
              <img
                className="w-auto h-12 mx-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              onSubmit={(e) => loginHandler(e)}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
            {Object.values(providers).map((provider) => (
              <div className="flex justify-center pt-4" key={provider.name}>
                <button
                  onClick={() =>
                    signIn(provider.id, { callbackUrl: '/dashboard' })
                  }
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

Login.auth = false;

Login.getLayout = (page) => {
  return { page };
};
