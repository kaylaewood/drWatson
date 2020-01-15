import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addMessage, clearMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.props.clearMessages();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user } = this.props;
    const { messages } = this.state;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal />}
        {user && <ChatBox />}
      </div>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch => ({
  clearMessages: () => dispatch(clearMessages()),
  removeUser: () => dispatch(removeUser()),
  hasErrored: errorMsg => dispatch(hasErrored(errorMsg))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
