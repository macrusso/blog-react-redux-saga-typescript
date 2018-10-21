import * as selectors from '../postSelectors';
import { IStoreState } from '../../../types';
import { IPost } from '..';

describe('Post Selectors', () => {
  const testPost1: IPost = {
    _id: '5bcc554259e0dbfda6ed1a55',
    userId: '5bcc454259e0dbfda6ed1a45',
    title: 'string',
    body: 'string',
  };

  const testPost2: IPost = {
    ...testPost1,
    _id: '5bcc554259e0dbfda6ed1a66',
  };

  const testState: IStoreState = {
    Posts: {
      items: [testPost1, testPost2],
      error: undefined,
      loading: false,
    },
  } as any;

  it('Should Posts.items', () => {
    expect(selectors.getAllPosts(testState)).toEqual(testState.Posts.items);
  });

  it('Should return Posts.items as object of objects', () => {
    expect(selectors.getAllPostsObject(testState)).toEqual({
      1: testPost1,
      2: testPost2,
    });
  });

  it('Should Posts.loading', () => {
    expect(selectors.getLoadingStatus(testState)).toEqual(
      testState.Posts.loading
    );
  });

  it('Should Posts.error', () => {
    expect(selectors.getError(testState)).toEqual(testState.Posts.error);
  });
});
