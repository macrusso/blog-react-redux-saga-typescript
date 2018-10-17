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
          loading={false}
          usersLoading={false}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
