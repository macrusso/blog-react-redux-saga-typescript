import React from 'react';
import { Formik } from 'formik';
import { IPostPartial } from 'src/Entities';

interface IPostAddProps {
  addPost: (post: IPostPartial) => void;
}

const PostAdd: React.SFC<IPostAddProps> = props => {
  const { addPost } = props;
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ title: '', body: '' }}
        onSubmit={values => {
          addPost({ ...values, userId: 1 });
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
