import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function TopNewsPage(props) {
  const { topArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>World News | Top News</title>
        <meta 
          name='description'
          description='Browse all the Australian news of today via ABC News AU'
        />
      </Head>
      <HeroSection 
        title='Top News' 
        description='Browse top Australian news!'
      />
      {topArticles.length > 0 && <ArticlesList articles={topArticles} />}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);

  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      topArticles: articles
    },
    revalidate: 60
  };
};

export default TopNewsPage;