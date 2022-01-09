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
    // let ava_img = this.githubData.avatar_url
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
      console.log("Data", this.state.githubData, this.props)
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
          <div><img src={this.state.githubData.avatar_url} alt="avatar_url" /> </div>

          <h5>Bio: &nbsp;{this.state.githubData.bio}</h5>
          <b>Created at: &nbsp;{this.state.githubData.created_at}</b>
          <br/>
          <b>Followers: &nbsp;{this.state.githubData.followers}</b>
          <br/>
          <address>
            Location: &nbsp;{this.state.githubData.location}
          </address>
          <br/>
          <q>Url: &nbsp;{this.state.githubData.url}</q>

        <p className="App-intro"></p>
      </div>
    );
  }
}
