import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../../components/navbar';
import Layout, { siteTitle } from '../../components/layout';

function Blog() {
  return (
    <div>
      <h1>
        <Navbar/>
      </h1>
    </div>
  );
}

export default Blog;
