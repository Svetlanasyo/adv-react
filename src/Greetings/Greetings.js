import React, { Component } from 'react';
import Title from './Title';

class Greetings extends Component {

  constructor(props)
  {
    super(props);

    this.title = "Component title";
  }


  render() {
    return (
      <div>
        <h3>Greetings</h3>
        <p>From {this.props.name}!</p>
        <Title title="Title from properties in arrow component"/>
      </div>
    )
  }

}

export default Greetings;
