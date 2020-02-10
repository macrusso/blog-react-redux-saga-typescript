import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import { commentTypes } from "../../Entities";
import CommentEditForm from "./CommentEditForm";

interface ICommentEditDialog {
  open: boolean;
  comment: commentTypes.IComment;
  handleCloseDialog: () => void;
  updateComment: (post: commentTypes.IComment) => void;
}

const CommentEditDialog: React.SFC<ICommentEditDialog> = props => {
  const { open, handleCloseDialog } = props;

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>Edit comment</DialogTitle>
      <CommentEditForm {...props} />
    </Dialog>
  );
};

export default CommentEditDialog;
