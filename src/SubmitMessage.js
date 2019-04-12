import React from 'react';
import PropTypes from 'prop-types';

class SubmitMessage extends React.Component {
  state = {
    value: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddMessage(this.state.value);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  isDisabled = () => {
    return this.state.value === '';
  };

  render() {

    return (
      
      <div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" 
    				className="form-control" 
    				placeholder="Enter your message..." 
    				value={this.state.value} 
					onChange={this.handleChange} 
				/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
     </div>
    );
  }
}

SubmitMessage.propTypes = {
  onAddMessage: PropTypes.func.isRequired
};

export default SubmitMessage;
