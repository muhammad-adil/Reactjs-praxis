import React, { Component } from 'react';

//import './GithubComponent.css';
const urlForUsername = username => `https://api.github.com/users/${username}`


export default class GithubComponent extends Component {

constructor(props){
  super(props)
  this.state = {
    requestFailed: false
  }
}

  componentDidMount(){
    fetch(urlForUsername(this.props.username))
    .then(response => {
      if (!response.ok ) {
        throw Error("Network Request Failed")
      }
      return response;
    })
    .then(d => d.json())
    .then(d => {
      this.setState({
        githubData : d
      })
    }),
     () => {
      this.setState({
        requestFailed: true
      })
    }
  }


  render() {
    if(!this.state.githubData) return <code>Loading.....</code>
    if(this.state.requestFailed) return <p>Request Failed.....</p>
    
    return (
      <div className="App">
          <h2>{this.state.githubData.name}</h2>
        <p className="App-intro"></p>
      </div>
    );
  }
}
