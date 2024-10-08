import React, { useEffect, useState } from 'react';
import InstagramIcon from '../icons/InstagramIcon';
import WhatsappIcon from '../icons/WhatsappIcon';

interface Author {
  id: number;
  attributes: {
    name: string;
    instagram?: string;
    whatsapp?: string;
    avatar: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string
            }
          }
          url?: string;
        };
      };
    };
  };
}

const AuthorsHome: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await fetch('https://my-blog-strapi-06zj.onrender.com/api/authors?populate=*');
      const data = await response.json();
      const authorsData = data.data;
      setAuthors(authorsData);
      setLoading(false)
      console.log(authorsData);
    };

    fetchAuthors();
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Equipe</h2>

        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array(3).fill(0).map((_, idx) => (
              <div
                key={idx}
                className="text-center bg-gray-100 py-6 mx-6 rounded-2xl animate-pulse"
              >
                
                <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>

                <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>

                <div className="mt-2 flex justify-center space-x-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {authors.map((author) => (
              <div key={author.id} className="text-center bg-gray-100 py-6 mx-6 rounded-2xl">
                {author.attributes.avatar?.data?.attributes?.url ? (
                  <img
                    src={`${author.attributes.avatar.data.attributes.url}`}
                    alt={author.attributes.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
                )}
                <h3 className="text-xl font-semibold">{author.attributes.name}</h3>
                <div className="mt-2 flex justify-center space-x-4">
                  <a href="#" target="_blank">
                    <InstagramIcon />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


export default AuthorsHome