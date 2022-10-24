import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import AppLayout from '../components/Layouts/AppLayout/AppLayout';
import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './page';

const Problems: NextPageWithLayout = () => {
  const { data, isLoading } = trpc.useQuery(['problem.list']);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-3 p-2 gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-6">
      {data?.map((problem) => {
        return (
          <article key={problem.id}>
            <Link href={`/problems/${problem.id}`}>
              <div className="items-stretch h-full overflow-hidden border rounded-lg cursor-pointer group">
                <Image
                  src={problem.imageURL}
                  className="object-cover w-full transition duration-200 ease-in-out h-60 group-hover:scale-105"
                  width={400}
                  height={250}
                  alt="Banner"
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{problem.headline}</p>
                    <p className="text-md">{problem.description}</p>
                    <p className="text-xs">
                      Posted by {problem.createdBy.name}
                    </p>
                  </div>
                  <img
                    className="w-12 h-12 rounded-full "
                    src={problem.createdBy.image!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Problems;

Problems.auth = true;

Problems.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
