import React from "react";
import { Formik } from "formik";
import { IComment } from "../../Entities";
import { TextField, Button, DialogActions, DialogContent } from "@material-ui/core";

interface ICommentEditFormProps {
  comment: IComment;
  handleCloseDialog: () => void;
  updateComment: (comment: IComment) => void;
}

const CommentEditForm: React.SFC<ICommentEditFormProps> = props => {
  const { comment, handleCloseDialog, updateComment } = props;
  return (
    <Formik
      initialValues={comment}
      onSubmit={values => {
        updateComment(values);
        handleCloseDialog();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <DialogContent>
            <TextField
              id="body"
              label="Comment"
              name="body"
              fullWidth={true}
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={values.body}
              onBlur={handleBlur}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" variant="outlined">
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </form>
      )}
    </Formik>
  );
};

export default CommentEditForm;
