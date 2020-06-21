import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import React, { useState } from "react";
import AddToDo from "./AddToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState([
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
  ]);

  const addToDo = (todo) => {
    setTodos((todos) => todos.concat(todo));
  };

  const deleteToDo = (todo) => {
    const filteredItems = todos.filter((x) => x.Id !== todo.Id);
    setTodos(filteredItems);
  };

  const editToDo = (x) => {
    const newToDo = todos.map((todo) => {
      if (todo.Id === x.Id) {
        return {
          ...todo,
          Status: todo.Status === "Done" ? "Pending" : "Done",
        };
      } else {
        return todo;
      }
    });
    setTodos(newToDo);
  };

  const renderToDo = todos.map((todo) => {
    return (
      <tr key={todo.Id}>
        <td>{todo.Id}</td>
        <td>{todo.Title}</td>
        <td style={{ color: todo.Status === "Done" ? "green" : "red" }}>{todo.Status}</td>
        <td>
          <button className='btn btn-primary' onClick={() => deleteToDo(todo)}>
            <span>
              <FontAwesomeIcon icon='trash'></FontAwesomeIcon>
            </span>
          </button>
          <button className='btn btn-primary' onClick={() => editToDo(todo)}>
            <span>
              <FontAwesomeIcon icon='edit'></FontAwesomeIcon>
            </span>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <AddToDo onAdd={addToDo}></AddToDo>
      <h1 className='text-center'>To-Do List</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderToDo}</tbody>
      </table>
    </div>
  );
};

export default ToDoList;
