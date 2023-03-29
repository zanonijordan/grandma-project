import Head from 'next/head';
import { theme } from '../../styles/theme';

function Home() {
  return (
    <>
      <Head>
        <title>GrandMa restaurant</title>
        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta name="description" content="Brasilian food for you lunch time" />
      </Head>
      <h1>FirstPage</h1>
    </>
  );
}

export default Home;
