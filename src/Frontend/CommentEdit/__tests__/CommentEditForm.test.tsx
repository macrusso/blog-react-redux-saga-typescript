import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CommentEditForm from '../CommentEditForm';
import { IComment } from 'src/Entities';

describe('CommentEditForm', () => {
  test('Snapshot matches', () => {
    const comment: IComment = {
      _id: '5bcc554259e0dbfda6ed1a55',
      userId: '5bcc554259e0dbfda6ed1a55',
      postId: '5bcc554259e0dbfda6ed1a55',
      body: 'string',
    };

    const wrapper = shallow(
      <BrowserRouter>
        <CommentEditForm
          comment={comment}
          updateComment={jest.fn()}
          handleCloseDialog={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
