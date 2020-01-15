import { messages } from './messages';

describe('messages', () => {
  it('should return the initial state', () => {
    const expected = [];

    expect(messages(undefined, {})).toEqual(expected);
  });

  it('should return state with new message', () => {
    const initialState = [{
      message: 'This is the first message',
      isUser: false
    }];

    const action = {
      type: 'ADD_MESSAGE',
      message: 'This is the second message',
      isUser: true
    };

    const expected = [{
      message: 'This is the first message',
      isUser: false
    }, {
      message: 'This is the second message',
      isUser: true
    }];

    expect(messages(initialState, action)).toEqual(expected);
  });

  it('should clear state', () => {
    const initialState = [{
      message: 'This is the first message',
      isUser: false
    }, {
      message: 'This is the second message',
      isUser: true
    }];

    const action = {
      type: 'CLEAR_MESSAGES'
    };

    const expected = [];

    expect(messages(initialState, action)).toEqual(expected);
  });

});
