import React,  { Component } from 'react';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ChatIcon.scss';

class ChatIcon extends Component {
  
  handleClick = () => {
    this.props.toggleChat(true);
  }

  render() {
    return(
      <div className="chaticon" onClick={this.handleClick}>
        <span className="icon">
          <FontAwesomeIcon icon={faCommentAlt} />
        </span>
      </div>
    )
  }
}

export default ChatIcon;