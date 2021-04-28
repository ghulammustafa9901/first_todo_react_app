import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";

class TodoList extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Card className="mb-3" border="secondary">
          {this.props.todo.id === this.props.object.id ? (
            <Form
              onSubmit={() => this.props.onSave(this.props.object)}
              className="d-flex align-items-center justify-content-between p-3"
            >
              <Form.Group controlId="todoText" className="w-100 mb-0 mr-3">
                <Form.Control
                  type="text"
                  defaultValue={this.props.todo.text}
                  onChange={this.props.onUpdateChange}
                  autoFocus
                  // ref={(inputEl) => (this.updText = inputEl)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          ) : (
            <div className="d-flex align-items-center justify-content-between p-3">
              <span>{this.props.todo.text}</span>
              <div className="d-flex">
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() => this.props.onUpdate(this.props.todo)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => this.props.onDelete(this.props.todo.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
        </Card>
      </React.Fragment>
    );
  }
}

export default TodoList;
