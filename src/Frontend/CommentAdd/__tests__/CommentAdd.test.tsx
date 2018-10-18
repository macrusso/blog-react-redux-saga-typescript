import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CommentAdd from '../CommentAdd';

describe('CommentAdd', () => {
  test('Snapshot matches', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CommentAdd addComment={jest.fn()} match={{}} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
