import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function HealthNewsPage(props) {
  const { healthArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>World News | Health News</title>
        <meta 
          name='description'
          description='Browse all the health news!'
        />
      </Head>
      <HeroSection 
        title='Health News' 
        description='Browse all the health news!'
      />
      {healthArticles.length > 0 && <ArticlesList articles={healthArticles} />}
    </Fragment>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=medical-news-today&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      healthArticles: articles
    }
  };
};

export default HealthNewsPage;