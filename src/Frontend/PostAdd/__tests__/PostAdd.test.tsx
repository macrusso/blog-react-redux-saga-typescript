import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PostAdd from '../PostAdd';

describe('PostAdd', () => {
  test('Snapshot matches', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <PostAdd addPost={jest.fn()} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
