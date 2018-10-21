import * as selectors from '../commentSelectors';
import { IStoreState } from '../../../types';
import { IComment } from '..';

describe('Comment Selectors', () => {
  const testComment1: IComment = {
    _id: '5bcc554259e0dbfda6ed1a55',
    body: 'string',
    postId: '5bcc554259e0dbfda6ed1a45',
    userId: '5bcc454259e0dbfda6ed1a45',
  };

  const testComment2: IComment = {
    ...testComment1,
    _id: '5bcc554259e0dbfda6ed1a66',
  };

  const testState: IStoreState = {
    Comments: {
      items: [testComment1, testComment2],
      error: undefined,
      loading: false,
    },
  } as any;

  it('Should Comments.items', () => {
    expect(selectors.getAllComments(testState)).toEqual(
      testState.Comments.items
    );
  });

  it('Should return Comments.items as object of objects', () => {
    expect(selectors.getAllCommentsObject(testState)).toEqual({
      1: testComment1,
      2: testComment2,
    });
  });

  it('Should Comments.loading', () => {
    expect(selectors.getLoadingStatus(testState)).toEqual(
      testState.Comments.loading
    );
  });

  it('Should Comments.error', () => {
    expect(selectors.getError(testState)).toEqual(testState.Comments.error);
  });
});
