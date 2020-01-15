import { user } from './user';

describe('user', () => {
  it('should return the initial state', () => {
    const expected = null;

    expect(user(undefined, {})).toEqual(expected);
  });

  it('should return state with new user', () => {
    const initialState = null;

    const mockUser = {
      id: 3,
      firstName: 'Trisha',
      lastName: 'Langlois',
      messages: []
    }

    const action = {
      type: 'CREATE_USER',
      user: mockUser
    };

    const expected = mockUser;

    expect(user(initialState, action)).toEqual(expected);
  });

  it('should remove user from state', () => {
    const initialState = {
      id: 3,
      firstName: 'Trisha',
      lastName: 'Langlois',
      messages: []
    };

    const action = {
      type: 'REMOVE_USER'
    };

    const expected = null;

    expect(user(initialState, action)).toEqual(expected);
  });

});
