import React, { Component } from "react";
import PropTypes from "prop-types";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.initialAge,
      status: props.initialStatus,
      homeLink: props.initialLinkName
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3,
      status: this.state.status + 1
    });
    console.log("Age :", this.state.age);
    console.log("Status :", this.state.status);
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    var text = "React Something";
    //console.log(this.props);
    return (
      <div className="main-content">
        <b>Simple text from variable {text}</b>
        <p>
          I am new Home coponent, my name is {this.props.name} and my age
          is&nbsp;
          <b>{this.state.age}</b>
        </p>
        <p>status: {this.state.status}</p>
        <button
          onClick={() => this.onMakeOlder()}
          className="btn btn-primary btn-sm"
        >
          Make Me Older
        </button>&nbsp;
        <button onClick={this.props.greet} className="btn btn-primary btn-sm">
          Don't Touch
        </button>
        &nbsp;
        <input
          type="text"
          name="two-way"
          value={this.state.homeLink}
          onChange={event => this.onHandleChange(event)}
        />
        <button
          onClick={this.onChangeLink.bind(this)}
          className="btn btn-primary btn-sm"
        >
          Change Header Link
        </button>
        {/*  props work*/}
        <p>
          Your Name is <b>{this.props.name}</b> &nbsp; Your age is
          <b>{this.props.age}</b>, this Name and Age is coming from props
        </p>
        <i>User Object => Name:</i> <b>{this.props.user.name}</b>
        <div>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => (
              <li key={i}> {hobby}</li>
            ))}
          </ul>
          {this.props.children}
        </div>
        {/*  props work*/}
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number.isRequired,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
  // user: React.PropTypes.object,
  // children: React.PropTypes.element.isRequired
};
