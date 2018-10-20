import React from 'react';
import { IComment, IUser } from '../../Entities/';
import { Edit, Delete } from '@material-ui/icons';
import {
  Typography,
  withStyles,
  Chip,
  Avatar,
  IconButton,
} from '@material-ui/core';

export interface ICommentListItemProps {
  users: IUser[];
  loading: boolean;
  comments: IComment[];
  usersLoading: boolean;
  selectedPostId?: number;
  handleOpenEditDialog: (comment: IComment) => void;
  handleOpenDeleteDialog: (comment: IComment) => void;
}

const CommentListItem = ({
  users,
  comments,
  loading,
  usersLoading,
  selectedPostId,
  handleOpenEditDialog,
  handleOpenDeleteDialog,
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
          <IconButton
            aria-label="Delete"
            onClick={() => handleOpenDeleteDialog(comment)}
          >
            <Delete />
          </IconButton>
          <IconButton
            aria-label="Edit"
            onClick={() => handleOpenEditDialog(comment)}
          >
            <Edit />
          </IconButton>
        </div>
      ))}
  </div>
);

export default CommentListItem;
