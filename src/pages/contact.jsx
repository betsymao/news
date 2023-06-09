import { Fragment } from 'react';
import Head from 'next/head';
import Form from '@/components/common/Form/Form';

function ContactPage(props) {

  return (
    <Fragment>
      <Head>
        <title>World News | Contact</title>
        <meta 
          name='description'
          description='Browse all the global news of today via BBC News UK'
        />
      </Head>
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta ratione minima voluptatum magni esse unde quis necessitatibus at illo. Magni vel eligendi dolor illum assumenda illo provident sint dolorem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur veniam expedita deleniti perferendis beatae rem tempore, nam error ex voluptas aliquid assumenda esse et iusto possimus ipsa obcaecati, animi exercitationem? Eius pariatur quae tempore voluptates distinctio commodi vero iure at laborum dolorum autem obcaecati, nesciunt ex dolores quia illo, esse similique harum. Nostrum, ratione repudiandae sint id pariatur reprehenderit.</p>
      <Form></Form>
    </Fragment>
  );
}

export default ContactPage;