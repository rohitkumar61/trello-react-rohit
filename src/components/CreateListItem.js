import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class CreateListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit working");
    console.log(this.state.name);

    this.props.onCreate(this.state.name);
    this.setState({
      name: "",
    });
  };
  render() {
    return (
      <div>
       

        <InputGroup className="mb-3">
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

            {/* <Button variant="outline-secondary" id="button-addon2">
              Add list
            </Button> */}
			<button type="submit" className="btn btn-primary">
            Add Item
          </button>
          </form>
        </InputGroup>
      </div>
    );
  }
}

export default CreateListItem;
