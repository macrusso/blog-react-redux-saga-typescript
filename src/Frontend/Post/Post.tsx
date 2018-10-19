import React from 'react';
import { IPost } from '../../Entities';
import { Link } from 'react-router-dom';
import { posts } from '../../routes';

interface IPostProps {
  post?: IPost;
}

const Post: React.SFC<IPostProps> = props => {
  const { post } = props;
  return (
    <div>
      <Link to={posts}>back</Link>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
    </div>
  );
};

export default Post;
