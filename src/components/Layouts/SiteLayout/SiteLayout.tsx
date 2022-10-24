import Head from 'next/head';
import SiteFooter from '../SiteLayout/SiteNavigation/SiteFooter/SiteFooter';
import SiteHeader from '../SiteLayout/SiteNavigation/SiteHeader/SiteHeader';

export interface ISiteLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

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
      <div {...divProps} className={`min-h-screen  flex flex-col ${justify}`}>
        <SiteHeader />
        <main className="min-w-full min-h-full px-5 grow">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
};

export default SiteLayout;
