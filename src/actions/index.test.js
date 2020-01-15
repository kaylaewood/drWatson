import { createUser, removeUser, hasErrored, addMessage, clearMessages } from '../actions';

describe('actions', () => {
  it('should have a type of CREATE_USER', () => {
    const user = {
      id: 2,
      firstName:"Kayla",
      lastName:"Wood",
      feeling:"happy",
      errorMsg:""
    }

    const expectedAction = {
      type: 'CREATE_USER',
      user
    }

    expect(createUser(user)).toEqual(expectedAction)
  });

  it('should have a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER'
    }

    expect(removeUser()).toEqual(expectedAction)
  });

  it('should have a type of HAS_ERRORED', () => {
    const errorMsg = 'This is an error.'

    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg
    }

    expect(hasErrored(errorMsg)).toEqual(expectedAction)
  });

  it('should have a type of ADD_MESSAGE', () => {
    const message = 'This is a message.'

    const expectedAction = {
      type: 'ADD_MESSAGE',
      message,
      isUser: true
    }

    expect(addMessage(message, true)).toEqual(expectedAction)
  });

  it('should have a type of CLEAR_MESSAGES', () => {
    const expectedAction = {
      type: 'CLEAR_MESSAGES'
    }

    expect(clearMessages()).toEqual(expectedAction)
  });
});
