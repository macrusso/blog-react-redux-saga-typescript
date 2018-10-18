import reducer, { initialState, IAppState } from '../appReducer';
import * as actionTypes from '../appActionTypes';

describe('appReducer', () => {
  let testState: IAppState;
  const testError = {
    message: 'sample error message',
  };
  beforeEach(() => {
    testState = { ...initialState };
  });

  it(`Should return correct state for ${actionTypes.LOCATION_CHANGE}`, () => {
    const testAction = { type: actionTypes.LOCATION_CHANGE };
    expect(reducer(testState, testAction)).toEqual(testState);
  });
});
