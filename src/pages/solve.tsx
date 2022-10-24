import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import AppLayout from '../components/Layouts/AppLayout/AppLayout';
import { NextPageWithLayout } from './page';

const Solve: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <>
      <div className="py-6 mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-gray-200 border-dashed rounded-lg text-blue h-96">
            Insert content here...
          </div>
        </div>
      </div>
    </>
  );
};

export default Solve;

Solve.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
