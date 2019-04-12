import React from 'react';
import PropTypes from 'prop-types';

const ChatItem = props => {
  return <li className={
                    props.message.username === props.username ? 'message sender' : 'message recipient'
                  }
><p>{`${props.message.username}: ${props.message.text}`}</p></li>;
};

ChatItem.propTypes = {
  message: PropTypes.any.isRequired,
  username: PropTypes.string.isRequired
};

export default ChatItem;
