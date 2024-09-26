import { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import { ArticleCard } from './ArticleCard';


const fetchArticles = async (page: number, pageSize: number): Promise<{articles: Article[], total: number}> => {
  const response = await fetch(`https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`)
  const data = await response.json()
  return {articles: data.data, total: data.meta.pagination.total }

}

const ArticleCardSkeleton = () => (
  <div className="max-w-4xl mx-auto my-4 p-4 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 animate-pulse">
    <div className="flex flex-col md:flex-row">

      <div className="md:w-1/3 bg-gray-300 h-64 "></div>
      <div className="md:w-2/3 p-4 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-8 bg-gray-300 rounded w-32 mt-4"></div>
      </div>
    </div>
  </div>
)

const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [isloading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const [totalPages, setTotalPages] = useState(1)
  

  useEffect(() => {
    const loadArticles = async () => {
      const {articles , total }= await fetchArticles(currentPage, itemsPerPage)
      setArticles(articles)
      setTotalPages(Math.ceil(total / itemsPerPage))
      setIsLoading(false)
    }
    loadArticles()
  }, [currentPage])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8 border-b pb-4">BLOG</h1>

      {isloading ? (
        <div>
          {Array.from({ length: itemsPerPage }).map((_, idx) => (
            <ArticleCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        articles.map((article) => (
          <div key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))
      )}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >,
          Anterior
        </button>
        <span className="px-4 py-2 mx-2">{currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default ArticlesList
