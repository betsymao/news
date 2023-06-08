import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function SportsNewsPage(props) {
  const { sportsArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>World News | Sports News</title>
        <meta 
          name='description'
          description='Browse all the sports news!'
        />
      </Head>
      <HeroSection 
        title='Sports News' 
        description='Browse all the sports news!'
      />
      {sportsArticles.length > 0 && <ArticlesList articles={sportsArticles} />}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=bleacher-report&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);

  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      sportsArticles: articles
    },
    revalidate: 60
  };
};

export default SportsNewsPage;