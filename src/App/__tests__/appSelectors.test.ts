import * as selectors from '../appSelectors';
import { IStoreState } from '../../types';

describe('User Selectors', () => {
  const testState: IStoreState = {
    App: {
      userId: 1,
    },
  } as any;

  it('Should Users.items', () => {
    expect(selectors.getUserId(testState)).toEqual(testState.App.userId);
  });
});
