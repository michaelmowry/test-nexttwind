import Head from 'next/head';
import Footer from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const duser = {
  name: 'Michael Mowry',
  email: 'michael.mowry@stellence.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

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
  { name: 'Profile', href: '#' },
  { name: 'Settings', href: '#' },
];

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Solvether</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Header
          user={duser}
          navigation={dnavigation}
          userNavigation={duserNavigation}
        />
        <main className="min-w-full min-h-full px-5">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
