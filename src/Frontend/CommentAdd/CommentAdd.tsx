import React from "react";
import { Formik } from "formik";
import { ICommentPartial } from "../../Entities";
import { TextField, Button, Typography } from "@material-ui/core";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledForm = styled.form`
  margin-bottom: 20px;
  width: 500px;
`;

interface ICommentAddProps {
  userId: string;
  selectedPostId?: string;
  addComment: (comment: ICommentPartial) => void;
}

const CommentAdd: React.SFC<ICommentAddProps> = props => {
  const { userId, addComment, selectedPostId } = props;
  return (
    <>
      <Typography variant="h6" align="center">
        Add your comment
      </Typography>
      {selectedPostId && (
        <Formik
          initialValues={{ body: "" }}
          onSubmit={values => {
            addComment({ ...values, userId, postId: selectedPostId });
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
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
              <ButtonGroup>
                <Button variant="contained" type="submit" color="primary">
                  Submit
                </Button>
              </ButtonGroup>
            </StyledForm>
          )}
        </Formik>
      )}
    </>
  );
};

export default CommentAdd;
