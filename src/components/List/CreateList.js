import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CreateList extends Component {
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
    event.preventDefault();
    this.props.onCreate(this.state.name);
    this.setState({
      name: "",
    });
  };
  
  render() {
    return (
      <ListGroup.Item className="m-4" style={{ minWidth: "200px" }}>
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
            />
          </div>
          <button type="submit" className="btn btn-outline-primary" style={{border:0}}>
            Add List
          </button>
        </form>
      </ListGroup.Item>
    );
  }
}

export default CreateList;
