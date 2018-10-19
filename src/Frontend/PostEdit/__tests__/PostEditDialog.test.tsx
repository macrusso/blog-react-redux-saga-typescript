import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PostEditDialog from '../PostEditDialog';
import { IPost } from 'src/Entities';

describe('PostEditDialog', () => {
  test('Snapshot matches', () => {
    const post: IPost = {
      id: 1,
      userId: 1,
      title: 'string',
      body: 'string',
    };

    const wrapper = shallow(
      <BrowserRouter>
        <PostEditDialog
          post={post}
          open={true}
          updatePost={jest.fn()}
          handleCloseDialog={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
