import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CommentEditDialog from '../CommentEditDialog';
import { IComment } from 'src/Entities';

describe('CommentEditDialog', () => {
  test('Snapshot matches', () => {
    const comment: IComment = {
      id: 1,
      userId: 1,
      postId: 1,
      body: 'string',
    };

    const wrapper = shallow(
      <BrowserRouter>
        <CommentEditDialog
          comment={comment}
          open={true}
          updateComment={jest.fn()}
          handleCloseDialog={jest.fn()}
        />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
