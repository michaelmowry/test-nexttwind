import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Dashboard: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <>
      <main>
        <div className="py-6 mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="min-w-full min-h-full border-4 border-gray-200 border-dashed rounded-lg h-96">
              Insert content here...
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
