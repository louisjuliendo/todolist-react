import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import AddToDo from "./AddToDo";

export default class ToDoList extends React.Component {
  state = {
    todos: [
      {
        Id: "1",
        Title: "Doing house chores",
        Status: "Done",
      },
      {
        Id: "2",
        Title: "Email to Clark Kent",
        Status: "Pending",
      },
    ],
  };

  deleteToDo = (todo) => {
    const filteredItems = this.state.todos.filter((x) => x.Id !== todo.Id);
    this.setState({
      todos: filteredItems,
    });
  };

  addToDo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  editToDo = (x) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.Id === x.Id) {
          return {
            ...todo,
            Status: todo.Status === "Done" ? "Pending" : "Done",
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  render() {
    return (
      <div>
        <AddToDo onAdd={this.addToDo}></AddToDo>
        <h1 class='text-center'>To-Do List</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((x) => {
              return (
                <tr key='x.Id'>
                  <td>{x.Id}</td>
                  <td>{x.Title}</td>
                  <td style={{ color: x.Status === "Done" ? "green" : "red" }}>{x.Status}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => this.deleteToDo(x)}>
                      <span>
                        <FontAwesomeIcon icon='trash'></FontAwesomeIcon>
                      </span>
                    </button>
                    <button className='btn btn-primary' onClick={() => this.editToDo(x)}>
                      <span>
                        <FontAwesomeIcon icon='edit'></FontAwesomeIcon>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
