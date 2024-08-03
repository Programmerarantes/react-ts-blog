import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../types/post-type';

const API_URL = 'https://my-blog-strapi-06zj.onrender.com/api/blogs?populate=*';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_URL);
        const fetchedPosts = response.data.data.map((post: any) => ({
          id: post.id,
          title: post.attributes.title,
          description: post.attributes.description,
          imageUrl: post.attributes.image?.data?.attributes.url || '',
          publishedAt: post.attributes.publishedAt,
        }));
        setPosts(fetchedPosts);
        console.log(fetchedPosts)
      } catch (err) {
        setError('Erro ao buscar posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, error, loading };
}
