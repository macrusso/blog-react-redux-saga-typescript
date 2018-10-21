import React from 'react';
import { Formik } from 'formik';
import { IPostPartial } from '../../Entities';
import { TextField, Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledForm = styled.form`
  margin-bottom: 20px;
`;

interface IPostAddProps {
  userId: string;
  addPost: (post: IPostPartial) => void;
}

const PostAdd: React.SFC<IPostAddProps> = props => {
  const { userId, addPost } = props;
  return (
    <>
      <Typography variant="h6" align="center">
        Add your post
      </Typography>
      <Formik
        initialValues={{ title: '', body: '' }}
        onSubmit={values => {
          addPost({ ...values, userId });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit} autoComplete="off">
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
            <ButtonGroup>
              <Button variant="contained" type="submit" color="primary">
                Submit
              </Button>
            </ButtonGroup>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default PostAdd;
