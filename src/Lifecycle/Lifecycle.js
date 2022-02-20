import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props)
  {
    console.log("Constructor!");
    super(props);

    this.state = {messages : [],
                  loading : true
                }
  }

  componentDidMount() {
    console.log("Did mount");

    setTimeout(() => this.setState({ messages : ["Hello world", "How are you"],
      loading : false}), 5000);
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Did update");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);

    setTimeout(() => this.setState({messages : [], loading: true}), 5000);
  }

  renderProfile() {
    if(this.state.loading) {
      return (<div>Loading...</div>);
    }

    if(this.state.messages && this.state.messages.length > 0)
    {
      return (
        <ul>
          {this.state.messages.map((msg,index) => <li key={`msg-${index}`}>{msg}</li>)}
        </ul>
      )
    }
  }

  render() {
    console.log("Render");
    return (
      <div>
        <p>Lifecycle !</p>
        {this.renderProfile()}
      </div>
    )
  }

}

export default Lifecycle;
