import { usePosts } from '../hook/use-posts';
import PostCard from './post-card';



const PostList: React.FC = () => {
    const { posts, error, loading } = usePosts();
    
    if (loading) return <div>Loading...</div>;
    

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {posts.map(post => (
                <div>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
       
    );
};

export default PostList;
