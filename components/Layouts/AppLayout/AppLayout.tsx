import Head from 'next/head';
import AppFooter from './AppNavigation/AppFooter/AppFooter';
import AppHeader from './AppNavigation/AppHeader/AppHeader';

export interface IAppLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const dnavigation = [
  { name: 'Dashboard', href: '/dashboard', current: false },
  { name: 'Solve', href: '/solve', current: false },
  { name: 'Solutions', href: '#', current: false },
  { name: 'Problems', href: '#', current: false },
];

const duserNavigation = [
  { name: 'Progress Report', href: '#' },
  { name: 'Connections', href: '#' },
  { name: 'History', href: '#' },
  { name: 'Profile', href: '/login' },
  { name: 'Settings', href: '#' },
];

const AppLayout: React.FC<IAppLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Solvether</title>
      </Head>
      <div {...divProps} className={`flex flex-col ${justify}`}>
        <AppHeader navigation={dnavigation} userNavigation={duserNavigation} />
        <main className="min-w-full px-5">{children}</main>
        <AppFooter />
      </div>
    </>
  );
};

export default AppLayout;
