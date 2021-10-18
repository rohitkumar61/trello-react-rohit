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
    let url = `https://api.trello.com/1/cards/${this.props.card.id}/checklists?key=${API_KEY}&token=${API_TOKEN}`;

    fetch(url, {
      method: "GET",
    })
	.then((response)=> response.json())
	.then(res=>console.log(res))
  }
  render() {
    return (
      <>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default CheckListModalContainer;
