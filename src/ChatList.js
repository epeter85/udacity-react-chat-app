import React from 'react';
import ChatItem from './ChatItem';
import PropTypes from 'prop-types';

/*
This presentational component can just be a Stateless Functional Component.
*/
const ChatList = props => {
  return (
    <div>
    <ul className="message-list">{props.messages.map((message, index) => <ChatItem key={index}  message={message} username={props.username}/>)}</ul>
    </div>

  );
};

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

export default ChatList;
