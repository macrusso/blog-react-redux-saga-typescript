import React from 'react';
import { IPost } from '../../Entities/Post';
import { IUser } from '../../Entities/User';
import { Link } from 'react-router-dom';
import { selectedPost } from '../../routes';

export interface IPostListItemProps {
  posts: IPost[];
  users: IUser[];
  loading: boolean;
  usersLoading: boolean;
}

const PostListItem = ({
  users,
  posts,
  loading,
  usersLoading,
}: IPostListItemProps) => (
  <div>
    {!loading &&
      !usersLoading &&
      posts.length > 0 &&
      posts.map(post => (
        <div key={post.id}>
          <Link to={selectedPost.replace(':postId', post.id.toString())}>
            {post.title}
          </Link>
          <p>by {post.userId && users[post.userId].name}</p>
          <p>{post.body}</p>
        </div>
      ))}
  </div>
);

export default PostListItem;
