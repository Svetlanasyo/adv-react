import React, { Component } from 'react';

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSecret : false
    };
  }

  secretMessage() {
    return (
      <div>
        I am the secret message!
      </div>
    )
  }

  toggleSecretMessage() {
    this.setState({
      showSecret : !this.state.showSecret
    });

  }
  render() {
    return (
      <div>
        <button onClick={this.toggleSecretMessage.bind(this)}>Ckick to show secret message!</button>
        {/* ?: */}

        {/* {this.state.showSecret ? this.secretMessage(): ""} */}
        {this.state.showSecret && this.secretMessage()}
      </div>
    )
  }

}

export default ConditionalRendering;
