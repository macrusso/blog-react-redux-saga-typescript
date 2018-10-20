import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CommentEditForm from '../CommentEditForm';
import { IComment } from 'src/Entities';

describe('CommentEditForm', () => {
  test('Snapshot matches', () => {
    const comment: IComment = {
      id: 1,
      userId: 1,
      postId: 1,
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
