import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.initialAge,
      status: 0
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
    //this.age += 3;
    console.log(this.state.age);
  }

  render() {
    var text = "Something";
    //console.log(this.props);
    return (
      <div>
        <b>{text}</b>
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
  initialAge: React.PropTypes.number
  // user: React.PropTypes.object,
  // children: React.PropTypes.element.isRequired
};
