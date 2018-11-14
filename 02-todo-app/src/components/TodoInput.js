import React, { Component } from "react";
import "./todoinput.css";

export default class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "test" };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    e.preventDefault();
  }

  addTodo(todo, e) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: "" });
      //   e.preventDefault();
    }
    console.log("Todo Added", todo);
  }
  render() {
    return (
      <form action="#" className="w-100">
        <input
          type="text"
          value={this.state.value}
          className=""
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.addTodo(this.state.value)}
        >
          Submit
        </button>
      </form>
    );
  }
}
