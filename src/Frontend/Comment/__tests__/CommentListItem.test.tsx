import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CommentListItem from '../CommentListItem';

describe('CommentListItem', () => {
  test('Snapshot matches', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CommentListItem
          comments={[]}
          users={[]}
          loading={false}
          usersLoading={false}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
