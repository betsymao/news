import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

function AboutPage(props) {

  return (
    <Fragment>
      <Head>
        <title>World News | About</title>
        <meta 
          name='description'
          description='Browse news from around the world!'
        />
      </Head>
      <h2>About</h2>

      <Image
      src="/images/news-2.jpg"
      width={640}
      height={426}
      alt="Collection of newspaper articles"
      />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi repudiandae natus molestiae ullam voluptatum esse eaque animi voluptas. Quaerat sapiente ipsam necessitatibus officia ullam totam perferendis voluptatum laudantium ab debitis ipsa molestiae quisquam, ducimus repellendus dolorum in, et quibusdam possimus nemo consequuntur minus. Excepturi debitis magni animi asperiores nobis!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod, consequuntur mollitia temporibus sit ipsam. Sequi dignissimos adipisci est consectetur!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorem nulla earum voluptatem? Accusantium reprehenderit tempora eum, aspernatur quod nemo quia dolore amet veritatis provident laudantium asperiores, fugiat tenetur? Quam, ea. Praesentium totam possimus tenetur officiis exercitationem aliquam officia, aut nemo similique, delectus minima quibusdam repudiandae eius laboriosam voluptatibus et, saepe quidem quae quaerat eveniet id doloribus! Expedita beatae incidunt, temporibus explicabo iusto magni voluptatibus qui, facere amet quaerat dolor.</p>
      <p>Ipsum quis debitis nesciunt doloribus ratione ullam, voluptatibus aspernatur ex eaque architecto voluptates blanditiis optio fuga iste nulla placeat totam repellat nam impedit error eveniet laborum mollitia ipsa? Ipsa quas dicta aliquid unde nihil ut, quo quidem tempore necessitatibus voluptatibus deleniti laborum nostrum officiis enim ullam aspernatur veritatis sequi blanditiis neque commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis magnam laborum, sequi libero earum porro ab voluptatibus dolore animi temporibus, molestias facere quae aliquam enim aut voluptatem voluptates atque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem architecto amet ut id ducimus, nemo cupiditate quibusdam illum minus dicta, recusandae possimus, ratione saepe distinctio dolorem magni. Non, porro deleniti.</p>
    </Fragment>
  );
}

export default AboutPage;