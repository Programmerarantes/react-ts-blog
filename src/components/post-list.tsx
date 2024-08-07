import { useEffect } from 'react';
import { usePosts } from '../hook/use-posts';
import PostCard from './post-card';



const PostList: React.FC = () => {
  const { posts, error, loading, loadMorePosts, hasMore } = usePosts();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500 && hasMore && !loading) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, loadMorePosts]);

  if (loading && posts.length === 0) return <div>Loading...</div>;

  if (error) {
    return <div>{error}</div>;
  }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8 border-b pb-4'>BLOG</h1>
            {posts.map(post => (
                <div>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
       
    );
};

export default PostList;
