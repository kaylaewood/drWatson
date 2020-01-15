import { errorMsg } from './errorMsg';

describe('errorMsg', () => {
  it('should return the initial state', () => {
    const expected = '';

    expect(errorMsg(undefined, {})).toEqual(expected);
  });

  it('should return state with error message', () => {
    const initialState = '';

    const action = {
      type: 'HAS_ERRORED',
      errorMsg: 'Something bad happened.'
    };

    const expected = 'Something bad happened.';

    expect(errorMsg(initialState, action)).toEqual(expected);
  });
});
