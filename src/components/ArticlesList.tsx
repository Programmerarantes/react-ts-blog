import { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import { ArticleCard } from './ArticleCard';


const fetchArticles = async ():Promise<Article[]> => {
    const response = await fetch('https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*')
    const data = await response.json()
    return data.data

}

const ArticlesList = () => {
  const [ articles, setArticles ] = useState<Article[]>([])

  useEffect(() => {
    const loadArticles = async () => {
      const articlesData = await fetchArticles()
      setArticles(articlesData)
      console.log(articlesData)
    }
    loadArticles()
  } ,[])

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8 border-b pb-4'>BLOG</h1>
            {articles.map(article => (
                <div>
                    <ArticleCard key={article.id} article={article} />
                </div>
            ))}
        </div>
       
    );
};

export default ArticlesList
