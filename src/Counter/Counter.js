import React, { Component } from 'react';

class Counter extends Component {
  
  constructor(props)
  {
    super(props);
    this.title = "Counter";
    this.state = { clickCounter : 0};
  }

  setCounter(counter)
  {
    console.log("setCounter");
    this.setState({clickCounter : counter})
  }

  setTitle()
  {
    console.log(this.title);
    this.title = "Updated counter";
    console.log(this.title);

  }
  renderClickCount()
  {
    return <p>Counter: {this.state.clickCounter}</p>
  }
  render() {
    return (
      <div>
        {this.title}
        {this.renderClickCount()}
        <button onClick={() => this.setCounter(this.state.clickCounter + 1)}>+1</button>
        <button onClick={() => this.setTitle()}>Update title</button>

      </div>
    )
  }

}

export default Counter;
