import { useRouter } from 'next/router';
import SiteLayout from '../components/Layouts/SiteLayout/SiteLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <div className="py-12 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Solvether
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Solving Problems Together
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Problems can be difficult.
            <br />
            Together we will solve them.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-indigo-500 rounded-md">
                  1
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Present a Problem
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Video recordings of the problem are posted to Solvether and
                categorized. The community then votes on the problems they want
                to solve. Problems with the most community interest are selected
                for resolution.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-indigo-500 rounded-md">
                  2
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Solve a Problem
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Select a problem that interests you and join a video meeting
                with other community members dedicated to solving it. Hear other
                solutions and add yours as well. The best solutions will be
                eligible for rewards.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-indigo-500 rounded-md">
                  3
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Select the Best Solutions
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Together, the problem sponsors and the community review
                solutions and rank them via vote.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-indigo-500 rounded-md">
                  4
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  Network & Earn Rewards
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Solvether will provide many opportunities to network and earn
                rewards. Find common interests with community members that share
                a similar problem and earn rewards through your participation in
                the community.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <SiteLayout>{page}</SiteLayout>;
};

Home.auth = false;
