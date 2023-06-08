import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>OZ Talk | Home</title>
        <meta 
          name='description'
          description='Browse all the top headlines and other news in Australia!'
        />
      </Head>
      <HeroSection 
        title='OZ Talk' 
        description='Browse all the top headlines and other news in Australia!'
        // bgImage="/backgrounds/hero-code.webp"
      />
      <h2>OZ Talk</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorem nulla earum voluptatem? Accusantium reprehenderit tempora eum, aspernatur quod nemo quia dolore amet veritatis provident laudantium asperiores, fugiat tenetur? Quam, ea. Praesentium totam possimus tenetur officiis exercitationem aliquam officia, aut nemo similique, delectus minima quibusdam repudiandae eius laboriosam voluptatibus et, saepe quidem quae quaerat eveniet id doloribus! Expedita beatae incidunt, temporibus explicabo iusto magni voluptatibus qui, facere amet quaerat dolor.</p>
      <p>Ipsum quis debitis nesciunt doloribus ratione ullam, voluptatibus aspernatur ex eaque architecto voluptates blanditiis optio fuga iste nulla placeat totam repellat nam impedit error eveniet laborum mollitia ipsa? Ipsa quas dicta aliquid unde nihil ut, quo quidem tempore necessitatibus voluptatibus deleniti laborum nostrum officiis enim ullam aspernatur veritatis sequi blanditiis neque commodi!</p>
    </Fragment>
  )
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // Fetch data from Internal API ("Code News")
  const response = await fetch(`${process.env.SERVER_NAME}/api/news`);
  const data = await response.json();

  // CHECKER FOR INTERNAL DATA:
  console.log(data);

  // Returned data as props & ISR functionality
  return {
    props: {
      articles: data
    },
    revalidate: 60 * 60
  };
};

export default HomePage;