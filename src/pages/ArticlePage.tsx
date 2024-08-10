// src/types/Post.ts
export interface ArticleAttributes {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
        data: {
            attributes: {
                url: string;
            };
        };
    };
    category: {
        data: {
            attributes: {
                name: string;
                slug: string;
            };
        };
    };
    authorsBio: {
        data: {
            attributes: {
                name: string;
            };
        };
    };

}

interface Article {
    id: number;
    attributes: ArticleAttributes;
}

// src/pages/PostDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const API_URL = 'https://my-blog-strapi-06zj.onrender.com/api/articles';

const PostDetailPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<Article | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_URL}/${postId}?populate=*`);
                const data = await response.json();
                const postData = data.data;

                setPost(postData);
                console.log(postData)
            } catch (err) {
                setError('Erro ao buscar post');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (postId) {
            fetchPost();
        }
    }, [postId]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    const { title, description, publishedAt, image, category, authorsBio } = post.attributes;

    return (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-md rounded-lg ">
            <div className="text-sm text-gray-500">
                <p>{authorsBio.data.attributes.name}</p>
                <p>{new Date(publishedAt).toLocaleDateString()}</p>
            </div>
            <div className="mt-4 text-lg text-gray-700">
                <p className="text-sm text-gray-800 mb-6">categoria: {category.data.attributes.name}</p>
            </div>
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
            </div>
            <img
                src={image ? `https://my-blog-strapi-06zj.onrender.com${image.data?.attributes.url}` : ''}
                alt={title}
                className="w-full h-auto mb-6 object-cover rounded"
            />
            <p className="text-gray-700 mb-6">{description}</p>
            <div className="text-center md:text-left">
                <Link
                    to="/blog"
                    className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Voltar
                </Link>
            </div>
        </div>
    );
};

export default PostDetailPage;
