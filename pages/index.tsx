import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../components/navbar';
import Emoji from '../components/emoji'

function Home() {
  return (
    <div>
      <h1>
        <Navbar/>
      </h1>
      <h2>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi there <Emoji symbol='👋' label="wave"/></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
    </h2>
    </div>
  );
}

export default Home;
