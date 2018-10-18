import React from 'react';
import { Formik } from 'formik';
import { IPostPartial } from '../../Entities';

interface IPostAddProps {
  userId: number;
  addPost: (post: IPostPartial) => void;
}

const PostAdd: React.SFC<IPostAddProps> = props => {
  const { userId, addPost } = props;
  return (
    <div>
      <h1>Create a post!</h1>
      <Formik
        initialValues={{ title: '', body: '' }}
        onSubmit={values => {
          addPost({ ...values, userId });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
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

export default PostAdd;
