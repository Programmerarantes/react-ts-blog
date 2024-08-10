import { useEffect, useState } from "react"
import { Article } from "../types/Article"

const fetchArticle = async ():Promise<Article> => {
    const response = await fetch('https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*')
    const data = await response.json()
    return data.data[data.data.length - 1]

}

export const HomeHeroSection = () => {
  const [article, setArticle ] = useState<Article | null>(null)

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const latestArticle = await fetchArticle()
        setArticle(latestArticle)
        console.log(latestArticle)
      } catch (error) {
        console.log('Erro ao buscar o artigo', error)
      }
    }
    loadArticle()
  }, [])

    if (!article) return <p>Carregando...</p>;


  const { title, description, publishedAt, category, authorsBio, image } = article.attributes

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-section md:w-1/2 p-4">
          <p className="text-sm text-gray-600">
            {category.data.attributes.name}
            
          </p>
          <h1 className="text-3xl font-bold text-gray-800 my-2">{title}</h1>
          <p className="text-sm text-gray-600 mb-4">
            Escrito por {authorsBio.data.attributes.name} | Publicado em{' '}
            {new Date(publishedAt).toLocaleDateString('pt-BR')}
          </p>
          <p className="text-lg text-gray-700 mb-4">{description.slice(0, 200) + "..."}</p>
          <a
            href={`/post/${article.id}`}
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          >
            Leia mais
          </a>
        </div>
        <div className="image-section w-full md:w-1/2 p-4">
          <img
            src={image.data.attributes.url}
            alt={title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}