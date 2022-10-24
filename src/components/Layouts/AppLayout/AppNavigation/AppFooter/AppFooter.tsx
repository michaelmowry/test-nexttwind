export interface IAppFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const AppFooter: React.FC<IAppFooter> = ({ className, ...footerProps }) => {
  return (
    <footer className="min-w-full p-4 bg-white sm:p-6 dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="mx-auto text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <a href="#" className="hover:underline">
            Solvether™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
