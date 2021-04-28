import React, { Component } from "react";
import AddTodo from "./addTodo";
import { Container } from "react-bootstrap";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main-div">
        <Container className="pt-4 h-100">
          <div className="display-4 text-center">Todo List</div>
          <AddTodo />
        </Container>
      </div>
    );
  }
}

export default Main;
