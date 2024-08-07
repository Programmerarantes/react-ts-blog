// pages/PostDetailPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePost } from '../hook/use-post';

const PostDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { post, error, loading } = usePost(postId || '');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
        <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-md rounded-lg ">
            <h1 className="text-3xl font-bold mb-4 text-center md:text-left">{post.title}</h1>
            <img 
                src={`http://localhost:1337${post.imageUrl}`} 
                alt={post.title} 
                className="w-full h-auto mb-6 object-cover rounded"
            />
            <p className="text-gray-700 mb-6">{post.description}</p>
            <small className="text-gray-500 block mb-6">{new Date(post.publishedAt).toLocaleDateString()}</small>
            <div className="text-center md:text-left">
                <Link 
                    to="/" 
                    className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Voltar
                </Link>
            </div>
        </div>
    );
};

export default PostDetailPage;
