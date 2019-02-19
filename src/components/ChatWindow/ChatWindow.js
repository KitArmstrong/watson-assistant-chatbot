import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ChatWindow.scss';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Assistant',
      disableInputs: false
    }
  }

  handleCloseClick = () => {
    this.props.toggleChat(false);
  }

  render() {
    return (
      <div className="chatwindow">
        <div className="header">
          <span className="title">{this.state.title}</span>
          <span className="close-icon" onClick={this.handleCloseClick}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className="body">test body</div>
        <div className="footer">
          <input
            type="text" 
            className="input" 
            placeholder="Type your question..." 
            disabled={this.state.disableInputs}/>        
        </div>
      </div>
    )
  }
}

export default ChatWindow;