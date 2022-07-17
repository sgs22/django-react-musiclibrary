import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta name='description' content='' />
        <link rel='icon' href='/' />
      </Head>

      <header>
        <Nav />
      </header>

      <main>
        <h1>Music Library</h1>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
