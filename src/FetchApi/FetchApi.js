import React, { Component } from 'react';
import Profile from './Profile';
class FetchApi extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data : null
    }
  }

  loadProfiles()
  {
    fetch('http://localhost:39635/Profile')
    .then(response => response.json())
    .then(data => this.setState({data : data}))
  }

  componentDidUpdate()
  {
    console.log(this.state.data);
  }
  
  componentDidMount()
  {
    this.loadProfiles();
  }

  render() {
    return (
      <div>
        <p>Fetch APi!</p>
        {this.state.data && <Profile user={this.state.data} />}
      </div>
    )
  }

}

export default FetchApi;
