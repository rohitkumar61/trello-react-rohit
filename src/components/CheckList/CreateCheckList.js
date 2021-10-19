import React, { Component } from "react";

class CreateCheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
	  event.preventDefault()
    this.props.onCreate(this.state.name);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="card-name" className="form-label"></label>
            <input
              value={this.state.name}
              type="text"
              className="form-control"
              id="card-name"
              aria-describedby="cardName"
              onChange={this.handleChange}
              placeholder="Create New Check List"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add CheckList
          </button>
        </form>
      </>
    );
  }
}

export default CreateCheckList;
