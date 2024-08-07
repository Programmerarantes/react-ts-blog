import React from 'react';

import { Post } from '../types/post-type'
import { Link } from 'react-router-dom';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div className="max-w-4xl mx-auto my-4 p-4 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <img 
                        src={`http://localhost:1337${post.imageUrl}`} 
                        alt={post.title} 
                        className="object-cover w-full h-48 md:h-full"
                    />
                </div>
                <div className="md:w-2/3 p-4">
                    <h1 className="text-xl font-bold">{post.title}</h1>
                    <p className="text-gray-700 my-2">{post.description.slice(0, 200) + "..."}</p>
                    <p className="text-gray-500 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
                    <Link 
                        to={`/post/${post.id}`} 
                        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                    >
                        Leia Mais
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
