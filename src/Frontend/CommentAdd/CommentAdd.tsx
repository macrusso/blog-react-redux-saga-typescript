import React from 'react';
import { Formik } from 'formik';
import { ICommentPartial } from '../../Entities';

interface ICommentAddProps {
  userId: number;
  addComment: (comment: ICommentPartial) => void;
}

const CommentAdd: React.SFC<ICommentAddProps> = props => {
  const { userId, addComment } = props;
  return (
    <div>
      <h1>Create a comment!</h1>
      <Formik
        initialValues={{ body: '' }}
        onSubmit={values => {
          addComment({ ...values, userId, postId: 2 });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="body"
              name="body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CommentAdd;
