import { useEffect, useState } from 'react';
import { Author } from '../types/Article';
import AuthorCard from './AuthorCard';

interface AuthorResponse {
  data: Author[]
}

const AuthorsURL = `https://my-blog-strapi-06zj.onrender.com/api/authors?populate=*`

const AuthorsSection = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch(AuthorsURL);
        const data: AuthorResponse = await response.json();
        const authorsData = data.data;
        setAuthors(authorsData);
        console.log(authorsData);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchAuthors()
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl grid gap-20 px-6 lg:px-8 xl:grid-cols-3">

        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Conheça nossa equipe
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Somos um grupo dinâmico de indivíduos apaixonados pelo que fazemos, dedicados a fornecer os melhores resultados para nossos clientes.
          </p>
        </div>
        

        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {loading ? (
            Array(3).fill(0).map((_, idx) => (
              <li key={idx} className="animate-pulse">
                <div className="flex items-center gap-x-6">
                  <div className="h-16 w-16 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="flex space-x-4">
                      <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                      <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            authors.map((author) => (
              <AuthorCard key={author.id} props={author} />
            ))
          )}
        </ul>
      </div>
    </section>
  );
};


export default AuthorsSection