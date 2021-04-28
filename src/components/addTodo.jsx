import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import TodoList from "./todoList";

class AddTodo extends Component {
  state = {
    submitDisable: true,
    resetDisable: false,
    text: "",
    afterText: "",
    todoObj: [
      { id: 1, text: "hi" },
      { id: 2, text: "by" },
      { id: 3, text: "hiby" },
    ],
    updateableObject: { id: "", text: "" },
  };

  handleAddTodoList = (e) => {
    e.preventDefault();
    const newObj = {
      id: Math.floor(Math.random() * 1000),
      text: this.state.text,
    };
    this.state.todoObj.push(newObj);
    const todoObj = this.state.todoObj;
    this.textbox.value = "";
    this.setState({ todoObj, submitDisable: true, resetDisable: false });
  };

  handleChangeAddTodo = (e) => {
    e.target.value !== ""
      ? this.setState({ submitDisable: false })
      : this.setState({ submitDisable: true });
    this.setState({ text: e.target.value });
  };

  handleDelete = (id) => {
    const todoObj = this.state.todoObj.filter((d) => d.id !== id);
    this.setState({ todoObj });
  };

  handleReset = () => {
    const todoObj = [];
    this.setState({ todoObj, resetDisable: true });
  };

  handleUpdate = (obj) => {
    this.setState({ updateableObject: { ...obj } });
  };

  handleSave = (obj) => {
    const todoObj = [...this.state.todoObj];
    const index = todoObj.findIndex((o) => o.id == obj.id);
    todoObj[index].text = this.state.afterText;
    this.setState({ todoObj, updateableObject: { id: "", text: "" } });
  };

  handleChange = (e) => {
    this.setState({ afterText: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="6">
            <Form
              onSubmit={this.handleAddTodoList}
              className="d-flex mb-5 align-items-end justify-content-between"
            >
              <Form.Group controlId="todoText" className="w-100 mb-0 mr-3">
                <Form.Label>Add Todo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type some text for add todo list"
                  onChange={this.handleChangeAddTodo}
                  // ref={(el) => (this.textbox = el)}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="mr-2"
                disabled={this.state.submitDisable}
              >
                Submit
              </Button>
              <Button
                variant="primary"
                onClick={this.handleReset}
                disabled={this.state.resetDisable}
              >
                Reset
              </Button>
            </Form>
            {this.state.todoObj.map((item) => (
              <TodoList
                key={item.id}
                todo={item}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
                onSave={this.handleSave}
                onUpdateChange={this.handleChange}
                object={this.state.updateableObject}
              />
            ))}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AddTodo;
