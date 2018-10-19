import React from 'react';
import { Formik } from 'formik';
import { IPost } from '../../Entities';
import {
  TextField,
  Button,
  DialogActions,
  DialogContent,
} from '@material-ui/core';

interface IPostEditFormProps {
  post: IPost;
  handleCloseDialog: () => void;
  updatePost: (post: IPost) => void;
}

const PostEditForm: React.SFC<IPostEditFormProps> = props => {
  const { post, handleCloseDialog, updatePost } = props;
  return (
    <Formik
      initialValues={post}
      onSubmit={values => {
        updatePost(values);
        handleCloseDialog();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <DialogContent>
            <TextField
              id="title"
              label="Title"
              name="title"
              fullWidth={true}
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={values.title}
              onBlur={handleBlur}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="body"
              label="Post"
              name="body"
              fullWidth={true}
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              value={values.body}
              onBlur={handleBlur}
              multiline={true}
              rowsMax="4"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseDialog}
              color="primary"
              variant="outlined"
            >
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

export default PostEditForm;
