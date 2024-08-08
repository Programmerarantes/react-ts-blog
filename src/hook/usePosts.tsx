import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post, ApiResponse, PostData } from '../types/post-type';

const API_URL = 'https://my-blog-strapi-06zj.onrender.com/api/articles?populate=*';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPosts = async (page: number) => {
    try {
      const response = await axios.get<ApiResponse>(`${API_URL}&pagination[page]=${page}&pagination[pageSize]=4`);
      const fetchedPosts = response.data.data.map((post: PostData) => ({
        id: post.id,
        title: post.attributes.title,
        description: post.attributes.description,
        imageUrl: post.attributes.image?.data?.attributes.url || '',
        publishedAt: post.attributes.publishedAt,
      }));
      setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
      setHasMore(response.data.data.length > 0);
    } catch (err) {
      setError('Erro ao buscar posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const loadMorePosts = () => {
    setPage(prevPage => prevPage + 1);
  };

  return { posts, error, loading, loadMorePosts, hasMore };
}
