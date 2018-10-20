import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core';
import { selectedPost } from 'src/routes';

interface IDeleteDialog {
  object: any;
  open: boolean;
  handleCloseDialog: () => void;
  deleteFn: (id: number, postId?: number) => void;
}

const PostEditDialog: React.SFC<IDeleteDialog> = props => {
  const { object, open, handleCloseDialog, deleteFn } = props;

  const itemType = object.postId ? 'comment' : 'post';
  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>{`Delete ${itemType}`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Do you really want to delete this ${itemType}?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={() => {
            deleteFn(object.id, object.postId);
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
