import { useEffect, useState } from 'react';
import { Article, ArticleApiResponse } from '../types/Article';

const BlogSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          'https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*'
        );
        const data: ArticleApiResponse = await response.json();
        setArticles(data.data.slice(0, 3));
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar os artigos:', error);
      }
    };

    fetchArticles();
  }, []);


  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Nosso Blog</h2>
      
        {loading ? (
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3 lg:max-w-none lg:grid-cols-3">
            {Array(3).fill(0).map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300 rounded-t-lg mb-4"></div>

                <div className="w-3/4 h-4 bg-gray-300 mb-2"></div>

                <div className="w-1/4 h-4 bg-gray-300 mb-4"></div>

                <div className="w-1/2 h-6 bg-gray-300"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3 lg:max-w-none lg:grid-cols-3">
            {articles.map((article) => {
              const { title, publishedAt, authorsBio, image } = article.attributes;

              return (
                <a
                  key={article.id}
                  href={`/post/${article.id}`}
                  className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-200 hover:scale-105"
                >
                  <img
                    src={image.data.attributes.url}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <p className="text-sm text-gray-600 mb-2">
                    {authorsBio.data.attributes.name} |{' '}
                    {new Date(publishedAt).toLocaleDateString('pt-BR')}
                  </p>
                  <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                </a>
              );
            })}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 transition-opacity duration-200"
          >
            Mais publicações
          </a>
        </div>
      </div>
    </section>
  )
}


export default BlogSection;
