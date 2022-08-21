import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import AppLayout from '../components/Layouts/AppLayout/AppLayout';
import { NextPageWithLayout } from './page';

const Dashboard: NextPageWithLayout = () => {
  const { locale } = useRouter();
  const { data: session, status } = useSession();
  console.log(status);
  const router = useRouter();

  return (
    <>
      <div className="py-6 sm:px-6 lg:px-8 h-4/5">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-center border-4 border-gray-200 border-dashed rounded-lg h-128 text-blue ">
            Dashboard...
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.auth = true;

Dashboard.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};
