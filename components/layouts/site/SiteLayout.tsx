import Head from 'next/head';
import Footer from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

export interface ISiteLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const duser = {};

const dnavigation = [
  { name: 'Documentation', href: '/dashboard', current: false },
  { name: 'Tokenomics', href: '/solve', current: false },
];

const duserNavigation = [{}];

const SiteLayout: React.FC<ISiteLayout> = ({
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
        <Header user={null} navigation={dnavigation} userNavigation={null} />
        <main className="min-w-full min-h-full px-5">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SiteLayout;
