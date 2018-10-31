import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Post from '../Post';
import { IPost, IUser } from '../../../Entities';

describe('Post', () => {
  test('Snapshot matches', () => {
    const post: IPost = {
      _id: '5bcc554259e0dbfda6ed1a55',
      userId: '5bcc554259e0dbfda6ed1a55',
      title: 'string',
      body: 'string',
    };

    const users: { [key: string]: IUser } = {
      '5bcc554259e0dbfda6ed1a55': {
        name: 'string',
        email: 'string',
        _id: '5bcc554259e0dbfda6ed1a55',
      },
    };
    const wrapper = shallow(
      <BrowserRouter>
        <Post
          post={post}
          users={users}
          currentUser={users[0]}
          handleOpenEditDialog={jest.fn()}
          handleOpenDeleteDialog={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
