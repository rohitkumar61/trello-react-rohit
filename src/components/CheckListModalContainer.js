import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { API_KEY, API_TOKEN } from "../services/projectServices";



class CheckListModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLists: [],
      show: false,
    };
  }

  componentDidMount() {
    //   console.log(this.props.cardData.id)
    let url = `https://api.trello.com/1/cards/${this.props.cardData.id}/checklists?key=${API_KEY}&token=${API_TOKEN}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((cardCheckListData) => {
        this.setState({ checkLists: cardCheckListData });
      })

      .catch((err) => console.log(err));
  }

  handleShow = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <>
        <Button onClick={this.handleShow}>CheckList</Button>

        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleShow}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          {/* {this.state.checkLists.map((checklist) => { */}
          {/* return( 	//   checklist={checklist}
			//   key={checklist.id} */}

          <Modal.Title id="example-modal-sizes-title-lg">
            {this.props.cardData.name}
          </Modal.Title>
        
         
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
                    placeholder="Create New Check List"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add CheckList
                </button>
              </form>
            </Modal.Title>
          </Modal.Header>
		 

          <Modal.Body></Modal.Body>
        </Modal>
      </>
    );
  }
}

export default CheckListModalContainer;
