import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Comment from '../Comment';
import { IComment } from '../../../Entities';

describe('Comment', () => {
  test('Snapshot matches', () => {
    const comment: IComment = {
      id: 1,
      userId: 1,
      postId: 1,
      body: 'string',
    };
    const wrapper = shallow(
      <BrowserRouter>
        <Comment comment={comment} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
