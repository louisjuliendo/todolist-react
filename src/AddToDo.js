import React, { useState } from "react";

const AddToDo = (props) => {
  const [todo, setTodo] = useState({
    Id: "",
    Title: "",
    Status: "Pending",
  });

  const handleIdChange = (e) => {
    setTodo({ ...todo, Id: e.target.value });
  };
  const handleTitleChange = (e) => {
    setTodo({ ...todo, Title: e.target.value });
  };
  const handleStatusChange = (e) => {
    setTodo({ ...todo, Status: e.target.value });
  };

  const handleToDoSubmit = (e) => {
    e.preventDefault();

    props.onAdd(todo);

    setTodo({
      Id: "",
      Title: "",
      Status: "Pending",
    });
  };
  return (
    <div className='addToDo'>
      <h3 className='text-center'>Add ToDo</h3>
      <form onSubmit={handleToDoSubmit}>
        <div className='form-group col-lg-4 center-item'>
          <input value={todo.Id} onChange={handleIdChange} className='form-control' placeholder='Enter Id' />
        </div>
        <div className='form-group col-lg-4 center-item'>
          <input value={todo.Title} onChange={handleTitleChange} className='form-control' placeholder='Enter Title' />
        </div>
        <div className='form-group col-lg-4 center-item'>
          <select value={todo.Status} onChange={handleStatusChange} className='form-control'>
            <option value='Done'>Done</option>
            <option value='Pending'>Pending</option>
          </select>
        </div>
        <div className='col-md-4 center-item'>
          <button type='submit' className='form-control btn btn-primary'>
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
