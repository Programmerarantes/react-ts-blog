import React from 'react';
import { Card, Button } from 'antd';
import { Post } from '../types/post-type'


interface PostCardProps {
    post: Post;
    onReadMore: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onReadMore }) => {
    return (
        <Card
            hoverable
            cover={<img alt={post.title} src={`https://my-blog-strapi-06zj.onrender.com${post.imageUrl}`} />}
        >
            <Card.Meta
                title={post.title}
                description={(post.description).slice(0, 100) + "..."} 
            />
            <Button 
                type="primary" 
                onClick={() => onReadMore(post.id)}
                style={{ marginTop: '16px' }}
            >
                Leia Mais
            </Button>
        </Card>
    );
};

export default PostCard;
