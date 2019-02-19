import React, { Component } from 'react';
import { faTimes, faPaperPlane, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OUTGOING_MESSAGE } from '../../constants/constants'
import './ChatWindow.scss';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Assistant',
      disableInputs: false,
      localMessage: '',
      loadingResponse: false,
    }
  }

  handleCloseClick = () => {
    this.props.toggleChat(false);
  }

  handleSendClick = () => {
    this.sendMessage(this.state.localMessage);
  }

  handleInputChange = (evt) => {
    this.setState({localMessage: evt.target.value});
  }

  renderDialog = (conversation) => {
    conversation.map(message => {
      return "test";
    });
  }

  /**
   * Stores a message
   * 
   * @param {Object} output Watson output
   * @param {Object} context Watson context
   * @param {String} direction message direction
   * @param {Array} list list of options to accompany message
   */
  addMessage(output, context, direction, list) {
    this.props.addMessage(output, context, direction, list);
  }

   /**
   * Sends a message to Watson Assistant
   * @param {String} message message to send to assistant
   */
  sendMessage = (message) => {
    // Do not allow blank message to be sent if a conversation has already started
    // if(!message) {
    //   return;
    // }

    // Get the latest conversation context if it exists
    // const context = this.getLastContext();

    // Add outgoing message to storage if it is not blank. Blank might be sent
    // to initiate the conversation.
    // if(message) {
    //   this.addMessage(message, context, OUTGOING_MESSAGE);
    // }

    // const data = {
    //   message: message,
    //   language: language,
    //   context: context
    // };

    // this.setState({localMessage: '', loadingResponse: true});

    // fetch(ASSISTANT_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(json => {
    //   this.setState({loadingResponse: false});
    //   this.handleChatResponse(json);
    // });
  }

  render() {
    return (
      <div className="chatwindow">
        <div className="header">
          <span className="title">{this.state.title}</span>
          <span className="close-icon" onClick={this.handleCloseClick}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className="body">
          {/*this.renderDialog()*/}
        </div>
        <div className="footer">
          <input
            type="text" 
            className="input" 
            placeholder="Type your question..." 
            onChange={this.handleInputChange}
            disabled={this.state.disableInputs}/>  
          <div className="actions">
            <span className="icon" onClick={this.handleSencClick}><FontAwesomeIcon icon={faPaperPlane} /></span>
            <span className="icon"><FontAwesomeIcon icon={faMicrophone} /></span>
          </div>      
        </div>
      </div>
    )
  }
}

export default ChatWindow;