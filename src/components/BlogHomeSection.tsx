import React, { useEffect, useState } from 'react';
import { Article } from '../types/Article';

const BlogSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          'https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*'
        );
        const data = await response.json();
        setArticles(data.data.slice(0, 3));
      } catch (error) {
        console.error('Erro ao buscar os artigos:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        {/* Título e Link */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Nosso Blog</h2>
          <a href="/blog" className="text-blue-500 hover:underline">
            Acesse aqui
          </a>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => {
            const { title, publishedAt, authorsBio } = article.attributes;

            return (
              <div
                key={article.id}
                className="bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <p className="text-sm text-gray-600 mb-2">
                  {authorsBio.data.attributes.name} |{' '}
                  {new Date(publishedAt).toLocaleDateString('pt-BR')}
                </p>
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
