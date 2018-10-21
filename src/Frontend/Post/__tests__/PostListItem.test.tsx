import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PostListItem from '../PostListItem';

describe('PostListItem', () => {
  test('Snapshot matches', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <PostListItem
          posts={[]}
          users={[]}
          comments={[]}
          loading={false}
          usersLoading={false}
          onAddCommentClick={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
