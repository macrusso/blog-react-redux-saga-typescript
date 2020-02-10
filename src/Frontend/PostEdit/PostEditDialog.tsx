import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import { postTypes } from "../../Entities";
import PostEditForm from "./PostEditForm";

interface IPostEditDialog {
  post: postTypes.IPost;
  open: boolean;
  handleCloseDialog: () => void;
  updatePost: (post: postTypes.IPost) => void;
}

const PostEditDialog: React.SFC<IPostEditDialog> = props => {
  const { open, handleCloseDialog } = props;

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>Edit post</DialogTitle>
      <PostEditForm {...props} />
    </Dialog>
  );
};

export default PostEditDialog;
