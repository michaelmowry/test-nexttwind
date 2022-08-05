import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login to Solvether</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
