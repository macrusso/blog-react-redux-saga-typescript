import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CommentAdd from '../CommentAdd';

describe('CommentAdd', () => {
  test('Snapshot matches', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CommentAdd addComment={jest.fn()} userId={1} selectedPostId={1} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
