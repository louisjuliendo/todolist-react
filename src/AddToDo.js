import React from "react";

export default class AddToDo extends React.Component {
  state = {
    Id: "",
    Title: "",
    Status: "Pending",
  };
  handleIdChange = (event) => {
    this.setState({
      Id: event.target.value,
    });
  };
  handleTitleChange = (event) => {
    this.setState({
      Title: event.target.value,
    });
  };
  handleStatusChange = (event) => {
    this.setState({
      Status: event.target.value,
    });
  };
  handleToDoSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd({
      Id: this.state.Id,
      Title: this.state.Title,
      Status: this.state.Status,
    });
    this.setState({
      Id: "",
      Title: "",
      Status: "Pending",
    });
  };
  render() {
    return (
      <div className='addToDo'>
        <h3 className='text-center'>Add ToDo</h3>
        <form onSubmit={this.handleToDoSubmit}>
          <div className='form-group col-lg-4 center-item'>
            <input
              value={this.state.Id}
              onChange={this.handleIdChange}
              className='form-control'
              placeholder='Enter Id'
            />
          </div>
          <div className='form-group col-lg-4 center-item'>
            <input
              value={this.state.Title}
              onChange={this.handleTitleChange}
              className='form-control'
              placeholder='Enter Title'
            />
          </div>
          <div className='form-group col-lg-4 center-item'>
            <select value={this.state.Status} onChange={this.handleStatusChange} className='form-control'>
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
  }
}
