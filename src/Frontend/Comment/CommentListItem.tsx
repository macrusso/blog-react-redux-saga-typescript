import React from 'react';
import { IComment, IUser } from '../../Entities/';

export interface ICommentListItemProps {
  users: IUser[];
  loading: boolean;
  comments: IComment[];
  usersLoading: boolean;
  selectedPostId?: number;
}

const CommentListItem = ({
  users,
  comments,
  loading,
  usersLoading,
  selectedPostId,
}: ICommentListItemProps) => (
  <div>
    {!loading &&
      !usersLoading &&
      selectedPostId &&
      comments.length > 0 &&
      comments.map(comment => (
        <div key={comment.id}>
          <h6>{comment.body}</h6>
          <p>by {comment.userId ? users[comment.userId].name : 'Guest'}</p>
        </div>
      ))}
  </div>
);

export default CommentListItem;
