import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';
import { IPost } from '../../Entities';
import PostEditForm from './PostEditForm';

interface IPostEditDialog {
  post: IPost;
  open: boolean;
  handleCloseDialog: () => void;
  updatePost: (post: IPost) => void;
}

const PostEditDialog: React.SFC<IPostEditDialog> = props => {
  const { open, handleCloseDialog } = props;

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>Edit your post</DialogTitle>
      <PostEditForm {...props} />
    </Dialog>
  );
};

export default PostEditDialog;
