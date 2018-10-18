import React from 'react';
import { IPost } from '../../Entities';

interface IPostProps {
  post?: IPost;
}

const Post: React.SFC<IPostProps> = props => {
  const { post } = props;
  return (
    <div>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
    </div>
  );
};

export default Post;
