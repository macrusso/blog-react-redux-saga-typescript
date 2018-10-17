import React from 'react';
import { IPostPartial, IPost } from 'src/Entities';

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
