import React, { useEffect, useState } from 'react';

interface Author {
  id: number;
  attributes: {
    name: string;
    avatar: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    /*socialLinks: {
      instagram: string;
      whatsapp: string;
    };*/
  };
}

export const AuthorsHome: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await fetch('https://my-blog-strapi-06zj.onrender.com/api/authors');
      const data = await response.json();
      const authorsData = data.data;
      setAuthors(authorsData);
      console.log(authorsData);
    };

    fetchAuthors();
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Lista de Autoras</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {authors.map((author) => (
            <div key={author.id} className="text-center">
              {author.attributes.avatar?.data?.attributes?.url ? (
                <img
                  src={author.attributes.avatar.data.attributes.url}
                  alt={author.attributes.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              )}
              <h3 className="text-xl font-semibold">{author.attributes.name}</h3>
              <div className="mt-2 flex justify-center space-x-4">
                <a href='' target="_blank" rel="noopener noreferrer">
                  <img src="/path-to-instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <img src="/path-to-whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
