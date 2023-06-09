import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function TechNewsPage(props) {
  const { techArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>World News | Tech News</title>
        <meta 
          name='description'
          description='Browse all the tech news!'
        />
      </Head>
      <HeroSection 
        title='Tech News' 
        description='Browse all the tech news!'
      />
      {techArticles.length > 0 && <ArticlesList articles={techArticles} />}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=ign&pageSize=4&apiKey=${process.env.NEWS_API_KEY}`);

  const data = await response.json();
  const articles = data.articles;

  return {
    props: {
      techArticles: articles
    },
    revalidate: 60
  };
};

export default TechNewsPage;