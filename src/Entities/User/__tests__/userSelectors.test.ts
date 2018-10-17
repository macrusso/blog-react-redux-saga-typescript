import * as selectors from '../userSelectors';
import { IStoreState } from '../../../types';
import { IUser } from '..';

describe('User Selectors', () => {
  const testUser1: IUser = {
    id: 1,
    name: 'string',
    username: 'string',
    email: 'string',
  };

  const testUser2: IUser = {
    ...testUser1,
    id: 2,
  };

  const testState: IStoreState = {
    Users: {
      items: [testUser1, testUser2],
      error: undefined,
      loading: false,
    },
  } as any;

  it('Should Users.items', () => {
    expect(selectors.getAllUsers(testState)).toEqual(testState.Users.items);
  });

  it('Should return Users.items as object of objects', () => {
    expect(selectors.getAllUsersObject(testState)).toEqual({
      1: testUser1,
      2: testUser2,
    });
  });

  it('Should Users.loading', () => {
    expect(selectors.getLoadingStatus(testState)).toEqual(
      testState.Users.loading
    );
  });

  it('Should Users.error', () => {
    expect(selectors.getError(testState)).toEqual(testState.Users.error);
  });
});
