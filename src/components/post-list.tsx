import { Row, Col } from 'antd';
import { usePosts } from '../hook/use-posts';
import PostCard from './post-card';
import { useNavigate } from "react-router-dom"


const PostList: React.FC = () => {
    const { posts, error, loading } = usePosts();
    const navigate = useNavigate()

    const handleReadMore = (id: number) => {
        navigate(`/post/${id}`)
        console.log('Leia mais sobre o post com ID:', id);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Row gutter={[16, 16]}>
            {posts.map(post => (
                <Col key={post.id} xs={24} sm={12} md={8} lg={6}>
                    <PostCard post={post} onReadMore={handleReadMore} />
                </Col>
            ))}
        </Row>
    );
};

export default PostList;
