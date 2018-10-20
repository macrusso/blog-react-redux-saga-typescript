import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core';
import { IPost } from '../../Entities';

interface IPostEditDialog {
  post: IPost;
  open: boolean;
  handleCloseDialog: () => void;
  deletePost: (id: number) => void;
}

const PostEditDialog: React.SFC<IPostEditDialog> = props => {
  const { post, open, handleCloseDialog, deletePost } = props;

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>Delete post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you really want to delete this post?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={() => {
            deletePost(post.id);
            handleCloseDialog();
          }}
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostEditDialog;
