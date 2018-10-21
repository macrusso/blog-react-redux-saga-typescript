import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PostEditForm from '../PostEditForm';
import { IPost } from 'src/Entities';

describe('PostEditForm', () => {
  test('Snapshot matches', () => {
    const post: IPost = {
      _id: '5bcc554259e0dbfda6ed1a55',
      userId: '5bcc554259e0dbfda6ed1a55',
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
