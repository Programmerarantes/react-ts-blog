import { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import { ArticleCard } from './ArticleCard';


const fetchArticles = async (page: number, pageSize: number): Promise<{articles: Article[], total: number}> => {
  const response = await fetch(`https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`)
  const data = await response.json()
  return {articles: data.data, total: data.meta.pagination.total }

}

const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const [totalPages, setTotalPages] = useState(1)
  

  useEffect(() => {
    const loadArticles = async () => {
      const {articles , total }= await fetchArticles(currentPage, itemsPerPage)
      setArticles(articles)
      console.log(articles)
      setTotalPages(Math.ceil(total / itemsPerPage))
    }
    loadArticles()
  }, [currentPage])

  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-8 border-b pb-4'>BLOG</h1>
      {articles.map(article => (
        <div>
          <ArticleCard key={article.id} article={article} />
        </div>
      ))}
      <div className='flex justify-center mt-8'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300 disable:opacity-50'
        >
          Anterior
        </button>
        <span className='px-4 py-2 mx-2' >{currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className='px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50'
        >
          Próximo
        </button>
      </div>
    </div>

  );
};

export default ArticlesList
