import { useEffect, useState } from 'react';
import { Article } from '../types/Article';
import { ArticleCard } from './ArticleCard';


interface ApiResponse {
  data: Article[]
  meta: {
    pagination: {
      total: number
    }
  }
}

const fetchArticles = async (page: number, pageSize: number): Promise<{ articles: Article[], total: number }> => {
  const response = await fetch(`https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`)
  const data: ApiResponse = await response.json()
  return { articles: data.data, total: data.meta.pagination.total }

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
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5
  const [totalArticles, setTotalArticles] = useState<number>(0)

  const loadArticles = async () => {
    try {
      setIsLoading(true)
      const { articles: newArticles, total } = await fetchArticles(currentPage, itemsPerPage)
      setArticles((prevArticles) => [...prevArticles, ...newArticles])
      setTotalArticles(total)
    } catch (error) {
      console.error("Erro ao carregar artigos:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { loadArticles() }, [currentPage])

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isLoading &&
        window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight &&
        articles.length < totalArticles
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [articles, totalArticles])


  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8 border-b pb-4">BLOG</h1>

      {articles.map((article) => (
        <div key={article.id}>
          <ArticleCard article={article} />
        </div>
      ))}

      {isLoading && Array.from({ length: itemsPerPage }).map((_, idx) => <ArticleCardSkeleton key={idx} />)}

      {!isLoading && articles.length >= totalArticles && (
        <p className='text-center text-gray-500 my-4'></p>
      )}
    </div>
  );
};

export default ArticlesList
