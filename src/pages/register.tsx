import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IRegisterUser, registerUserSchema } from '../schema/user.schema';
import { trpc } from '../utils/trpc';
const PasswordChecklist = dynamic(() => import('react-password-checklist'), {
  ssr: false,
});

function RegisterPage() {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(registerUserSchema),
  });
  const router = useRouter();
  const { mutateAsync } = trpc.useMutation(['user.register']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = useCallback(
    async (data: IRegisterUser) => {
      console.log('Submitting registration: ', data);

      const result = await mutateAsync(data);

      if (result.status === 201) {
        router.push('/verifyEmail');
      }
    },
    [mutateAsync, router]
  );

  return (
    <>
      <div className="flex justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md m-auto ">
          <div>
            <img
              className="w-auto h-12 mx-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Register
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>

                <input
                  type="name"
                  autoComplete="name"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First name"
                  {...register('name')}
                />
                {errors.name?.message && <p>{errors.name?.message}</p>}
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <input
                  type="email"
                  autoComplete="email"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email@domain.com"
                  {...register('email')}
                />
                {errors.email?.message && <p>{errors.email?.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password Confirmation"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <PasswordChecklist
                  rules={[
                    'minLength',
                    'specialChar',
                    'number',
                    'capital',
                    'match',
                  ]}
                  minLength={8}
                  value={password}
                  valueAgain={confirmPassword}
                  messages={{
                    minLength: 'Must be at least 8 characters',
                    specialChar: 'Must contain 1 special character',
                    number: 'Must contain 1 number',
                    capital: 'Must contain 1 capital letter',
                    match: 'Passwords must match',
                  }}
                  onChange={(isValid) => {
                    isValid && setValue('password', password);
                  }}
                />
              </div>
            </div>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
