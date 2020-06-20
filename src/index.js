import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./ToDoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faPlus);

ReactDOM.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
  document.getElementById("root")
);
