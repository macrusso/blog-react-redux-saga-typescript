import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import { IPost } from 'src/Entities';

interface IPostEditDialog {
  post: IPost;
  open: boolean;
  handleCloseDialog: () => void;
  updatePost: (post: IPost) => void;
}

const PostEditDialog: React.SFC<IPostEditDialog> = props => {
  const { open, post, updatePost, handleCloseDialog } = props;

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>Edit your post</DialogTitle>
      <DialogContent>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={() => updatePost(post)}
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
