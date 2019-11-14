import React, { Component } from 'react';

//import './GithubComponent.css';
const urlForUsername = username => `https://api.github.com/users/${username}`

// eslint-disable
export default class GithubComponent extends Component {

constructor(props){
  super(props)
  this.state = {
    requestFailed: false
  }
}

  componentDidMount(){
    // eslint-disable-next-line
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
      // eslint-disable-next-line
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
          <img src="this.state.githubData.avatar_url" alt="avatar"/>
          {/* <svg width="90" height="90">       
            <image xlink:href="this.state.githubData.avatar_url" src="" width="90" height="90"/>    
          </svg> */}

          <h5>Bio: &nbsp;{this.state.githubData.bio}</h5>
          <date>Created at: &nbsp;{this.state.githubData.created_at}</date>
          <br/>
          <number>Followers: &nbsp;{this.state.githubData.followers}</number>
          <br/>
          <address>Location: &nbsp;{this.state.githubData.location}</address>
          <br/>
          <url>Url: &nbsp;{this.state.githubData.url}</url>

        <p className="App-intro"></p>
      </div>
    );
  }
}
