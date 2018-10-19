import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PostEditForm from '../PostEditForm';
import { IPost } from 'src/Entities';

describe('PostEditForm', () => {
  test('Snapshot matches', () => {
    const post: IPost = {
      id: 1,
      userId: 1,
      title: 'string',
      body: 'string',
    };

    const wrapper = shallow(
      <BrowserRouter>
        <PostEditForm
          post={post}
          updatePost={jest.fn()}
          handleCloseDialog={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
