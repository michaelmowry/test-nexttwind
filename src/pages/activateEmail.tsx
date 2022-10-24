import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { trpc } from '../utils/trpc';

function ActivateEmailPage() {
  const [redirectSeconds, setRedirectSeconds] = useState<number>(5);
  const [timeToRedirect, setTimeToRedirect] = useState(false);
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    if (redirectSeconds == 0) {
      setTimeToRedirect(true);
    }

    const st = setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);

    return () => clearTimeout(st);
  }, [redirectSeconds]);

  const results = trpc.useQuery(['user.activate', { id: id }]);

  if (results.data?.status === 201 && timeToRedirect) {
    router.push('/login');
  }

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
              Activating your Account
            </h2>
            <h3 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
              Redirecting to login in {redirectSeconds} seconds...
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivateEmailPage;
