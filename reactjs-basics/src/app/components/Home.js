import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.age = props.age;
  }

  onMakeOlder() {
    this.age += 3;
    console.log(this.age);
  }

  render() {
    var text = "Something";
    //console.log(this.props);
    return (
      <div>
        <b>{text}</b>
        <p>I am new Home coponent and my age is {this.age}</p>
        <button
          onClick={() => this.onMakeOlder()}
          className="btn btn-primary btn-sm"
        >
          Make Me Older
        </button>

        {/* <p>
          Your Name is {this.props.name} &nbsp; Your age is {this.props.age},
          this Name and Age is coming from props
        </p>
        <i>User Object => Name: {this.props.user.name} </i>
        <div>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => (
              <li key={i}> {hobby}</li>
            ))}
          </ul>
          {this.props.children}
        </div> */}
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};
