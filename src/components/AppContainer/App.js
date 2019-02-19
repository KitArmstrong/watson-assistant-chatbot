import React, { Component } from 'react';
import { connect } from 'react-redux';

import { exampleAction } from '../../actions/exampleAction';
import ChatIcon from '../ChatIcon/ChatIcon';
import ChatWindow from '../ChatWindow/ChatWindow';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatOpen: false
    }
  }

  toggleChat = (chatOpen) => {
    this.setState({chatOpen});
  }

  render() {
    const display = this.state.chatOpen ? 
      <ChatWindow toggleChat={this.toggleChat} /> : 
      <ChatIcon toggleChat={this.toggleChat} />

    return (
      <div className="app-container">
        {display}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispathToProps = dispatch => ({
  exampleAction: () => dispatch(exampleAction())
});

export default connect(mapStateToProps, mapDispathToProps)(App);
