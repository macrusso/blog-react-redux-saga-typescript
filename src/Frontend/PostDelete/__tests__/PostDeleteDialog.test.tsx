import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PostDeleteDialog from '../PostDeleteDialog';
import { IPost } from 'src/Entities';

describe('PostDeleteDialog', () => {
  test('Snapshot matches', () => {
    const post: IPost = {
      id: 1,
      userId: 1,
      title: 'string',
      body: 'string',
    };

    const wrapper = shallow(
      <BrowserRouter>
        <PostDeleteDialog
          post={post}
          open={true}
          deletePost={jest.fn()}
          handleCloseDialog={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
