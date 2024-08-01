// pages/PostDetailPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePost } from '../hook/use-post';

const PostDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { post, error, loading } = usePost(postId || '');

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className="post-detail">
      <img src={post.imageUrl} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default PostDetailPage;
