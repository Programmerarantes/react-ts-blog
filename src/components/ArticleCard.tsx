import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types/Article';

interface ArticleCardProps {
    article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {

    if (!article || !article.attributes) return null

    const { title, publishedAt, description, image, category, authorsBio } = article.attributes
    const imageUrl = image.data?.attributes?.url

    const [loadedImageUrl, setLoadedImageUrl] = useState<string | null>(null)
    const [isImageLoading, setIsImageLoading] = useState<boolean>(true)

    useEffect(() => {
        if (imageUrl) {
            const img = new Image()
            img.src = imageUrl
            img.onload = () => {
                setLoadedImageUrl(imageUrl)
                setIsImageLoading(false)
            }
            return () => {
                img.onload = null
            }
        }
    }, [imageUrl])


    return (
        <div className="max-w-4xl mx-auto my-4 p-4 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    {isImageLoading ? (
                        <div className="bg-gray-300 h-48 md:h-full animate-pulse"></div>
                    ) : (
                        <img
                            src={loadedImageUrl ?? ''}
                            alt={title}
                            className="object-cover w-full h-48 md:h-full"
                        />
                    )}
                </div>
                <div className="md:w-2/3 p-4">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <span className="font-bold">{category.data.attributes.name}</span>
                    <p className="text-gray-700 my-2">
                        {description.slice(0, 200) + '...'}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {new Date(publishedAt).toLocaleDateString()} | por: {authorsBio.data.attributes.name}
                    </p>
                    <Link
                        to={`/post/${article.id}`}
                        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                    >
                        Leia Mais
                    </Link>
                </div>
            </div>
        </div>
    );
};
