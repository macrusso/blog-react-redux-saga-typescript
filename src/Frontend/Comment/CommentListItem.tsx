import React from 'react';
import { IComment } from '../../Entities/Comment';
import { IUser } from '../../Entities/User';

export interface ICommentListItemProps {
  comments: IComment[];
  users: IUser[];
  loading: boolean;
  usersLoading: boolean;
}

const CommentListItem = ({
  users,
  comments,
  loading,
  usersLoading,
}: ICommentListItemProps) => (
  <div>
    {!loading &&
      !usersLoading &&
      comments.length > 0 &&
      comments.map(comment => (
        <div key={comment.id}>
          <h6>{comment.body}</h6>
          <p>by {comment.userId && users[comment.userId].name}</p>
        </div>
      ))}
  </div>
);

export default CommentListItem;
