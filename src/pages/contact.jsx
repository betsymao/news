import { Fragment } from 'react';
import Head from 'next/head';

function ContactPage(props) {

  return (
    <Fragment>
      <Head>
        <title>OZ Talk | Contact</title>
        <meta 
          name='description'
          description='Browse all the global news of today via BBC News UK'
        />
      </Head>
      <h2>Contact</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name"></input>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email"></input>
        <label>Message:</label>
        <textarea placeholder="Enter your message"></textarea>
      </form>
    </Fragment>
  );
}

export default ContactPage;