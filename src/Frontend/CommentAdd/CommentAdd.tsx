import React from 'react';
import { Formik } from 'formik';
import { ICommentPartial } from '../../Entities';

interface ICommentAddProps {
  userId: string;
  selectedPostId?: string;
  addComment: (comment: ICommentPartial) => void;
}

const CommentAdd: React.SFC<ICommentAddProps> = props => {
  const { userId, addComment, selectedPostId } = props;
  return (
    <div>
      <h1>Create a comment!</h1>
      {selectedPostId && (
        <Formik
          initialValues={{ body: '' }}
          onSubmit={values => {
            addComment({ ...values, userId, postId: selectedPostId });
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
      )}
    </div>
  );
};

export default CommentAdd;
