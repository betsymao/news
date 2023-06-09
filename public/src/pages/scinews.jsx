import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function SciNewsPage(props) {
  const { sciArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>World News | Science News</title>
        <meta 
          name='description'
          description='Browse all the science news!'
        />
      </Head>
      <HeroSection 
        title='Science News' 
        description='Browse all the science news!'
      />
      {sciArticles.length > 0 && <ArticlesList articles={sciArticles} />}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=national-geographic&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);

  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      sciArticles: articles
    },
    revalidate: 60
  };
};

export default SciNewsPage;