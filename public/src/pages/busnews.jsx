import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function BusNewsPage(props) {
  const { busArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>World News | Business News</title>
        <meta 
          name='description'
          description='Browse all the business news!'
        />
      </Head>
      <HeroSection 
        title='Business News' 
        description='Browse all the business news!'
      />
      {busArticles.length > 0 && <ArticlesList articles={busArticles} />}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=fortune&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);

  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      busArticles: articles
    },
    revalidate: 60
  };
};

export default BusNewsPage;