import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../../components/navbar';

function Contact() {
  return (
    <div>
      <h1>
        <Navbar/>
      </h1>
    </div>
  );
}

export default Contact;
