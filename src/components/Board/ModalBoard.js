import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";


class ModalBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      show: false,
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

  handleShow = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <>
        <div className="h-100 w-100" onClick={this.handleShow}>
          <Button
            style={{
              backgroundColor: "white",
              color: "grey",
              height: "100%",
              width: "100%",
              border: "none",
              textDecoration: "none",
			  
            }}
            size="lg"
            onClick={this.handleShow}
          >
            Create New Board
          </Button>
        </div>
      

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="card-name" className="form-label">
                    {/* create new board */}
                  </label>
                  <input
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    id="card-name"
                    aria-describedby="cardName"
                    onChange={this.handleChange}
                    placeholder="Create New Board"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Board
                </button>
              </form>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalBoard;
