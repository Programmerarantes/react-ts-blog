// hooks/usePost.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../types/post-type';

const API_URL = 'https://my-blog-strapi-06zj.onrender.com/api/blogs';



export function usePost(postId: string) {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/${postId}?populate=*`);
        const data = response.data.data;
        setPost({
          id: data.id,
          title: data.attributes.title,
          description: data.attributes.description,
          imageUrl: data.attributes.image?.data?.attributes.url || '',
          publishedAt: data.attributes.publishedAt,
        });
      } catch (err) {
        setError('Erro ao buscar post');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, error, loading };
}
