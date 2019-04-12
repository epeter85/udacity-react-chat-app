import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubmitMessage from './SubmitMessage.js'
import ChatList from './ChatList.js';
class Chat extends Component {
  
  state = {
    messages: [],
    
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddMessage(this.state.messages);
  };
  
  handleAddMessage = text => {
    let message = {
      "username": this.props.username,
      "text": text
    };
   this.setState(prevState => ({ messages: [...prevState.messages, message] }));
    console.log(this.state.messages);
    this.handleSubmit;
  };

render() {
    return (
  		<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>
			<ChatList username={this.props.username} messages={this.state.messages}/>
			<SubmitMessage onAddMessage={this.handleAddMessage} />
          </div>
    );
  }
  
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
};

export default Chat;