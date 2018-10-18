import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Post from '../Post';
import { IPost } from '../../../Entities';

describe('Post', () => {
  test('Snapshot matches', () => {
    const post: IPost = {
      id: 1,
      userId: 1,
      title: 'string',
      body: 'string',
    };
    const wrapper = shallow(
      <BrowserRouter>
        <Post post={post} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
