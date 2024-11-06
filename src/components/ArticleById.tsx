import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogSection from './BlogHomeSection';
import { Article } from '../types/Article';


const API_URL = 'https://my-blog-strapi-06zj.onrender.com/api/articles';

const perfilPicture = 'https://res.cloudinary.com/dasvwni1e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723831594/perfil_3_092f2ed0d0.jpg'

const ArticleById = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`${API_URL}/${articleId}?populate=*`);
                const data = await response.json();
                const articleData = data.data;

                setArticle(articleData)
            } catch (err) {
                setError('Erro ao buscar artigo')
                console.error(err)
            } finally {
                setLoading(false)
            }
        };
        if(articleId){
            fetchArticle()
        }

        
    }, [articleId]);

    if (loading) {
        //precisa fazer um skeleton shimmering aqui
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!article) {
        return <div>Post não encontrado</div>;
    }

    const { title, description, publishedAt, image, category, authorsBio } = article.attributes;

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="bg-gray-100 p-8 rounded-lg flex flex-col shadow-md">
                    <div className="flex items-center justify-center mb-4">
                        <img
                            src={perfilPicture} 
                            alt={title}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="text-xl font-bold">{authorsBio.data.attributes.name}</h3>
                            <p className="text-gray-500">{new Date(publishedAt).toLocaleDateString()} | {category.data.attributes.name}</p>
                        </div>
                        
                    </div>
                    
                    <h2 className="text-2xl text-center font-bold mb-4">
                        {title}
                    </h2>
                    <div className="flex justify-center mb-4 ">
                        <img
                            src={image.data.attributes.url} 
                            alt={title}
                            className="w-full md:w-3/4 rounded-lg shadow-md"
                        />
                    </div>
                    
                    <p className="text-base text-justify leading-relaxed mb-4 mx-auto md:w-3/4">
                    {description}
                    </p>
                </div>
            </div>
            <BlogSection />
        </>
    );
};

export default ArticleById;
