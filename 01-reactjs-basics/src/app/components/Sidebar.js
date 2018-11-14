import React, { Component } from "react";
import PropTypes from "prop-types";

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.name,
      age: props.initialAge,
      time: props.initialTime
    };

    setTimeout(() => {
      this.setState({
        username: (this.state.name = "John Doe Boy"),
        time: this.state.time + 5,
        age: this.state.age + 2
      });
    }, 5000);
  }
  render() {
    return (
      <div className="sidebar-content">
        <p>I am in sidebar</p>
        <p>
          My Name is <b>{this.state.username},</b> &nbsp;
          <b>your age is {this.state.age}</b> Your time is in setTimeout,
          <b>{this.state.time}</b>, this Name and Time is coming from props, and
          changing time after 3sec using setTimeout...
        </p>
        {/* <i>User Object => Name:</i> <b>{this.props.user.name}</b> */}
      </div>
    );
  }
}

Sidebar.propTypes = {
  name: React.PropTypes.string,
  initialTime: React.PropTypes.number.isRequired
};
