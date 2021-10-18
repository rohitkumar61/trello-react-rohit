import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { API_KEY, API_TOKEN } from "../services/projectServices";
import CreateCheckList from "./CreateCheckList";
import CheckList from "./CheckList";

class CheckListModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLists: [],
      show: false,
    };
  }
  handleDeleteCheckList = async(checkListId) => {
   
	let url =  `https://api.trello.com/1/checklists/${checkListId}?key=${API_KEY}&token=${API_TOKEN}`
   const response =await fetch(url
     ,
      {
        method: "DELETE",
      }
    )
	const deletedCheckList =await response.json()
	this.setState({
		checkLists: this.state.checkLists.filter((list)=> list.id !== checkListId),
	  })
  };


 



  handleCreateCheckList = async (checkListName) => {
    let url = `https://api.trello.com/1/checklists?name=${checkListName}&idCard=${this.props.cardData.id}&key=${API_KEY}&token=${API_TOKEN}`;
    let response = await fetch(url, {
      method: "POST",
    });
    let newCheckList = await response.json();
    this.setState({
      checkLists: [...this.state.checkLists, newCheckList],
    });
    console.log("checklist", this.state.checkLists);
  };

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
          <Modal.Title id="example-modal-sizes-title-lg">
            {this.props.cardData.name}
          </Modal.Title>

          <Modal.Header closeButton>
            <CreateCheckList onCreate={this.handleCreateCheckList} />
          </Modal.Header>

          <Modal.Body>
            {this.state.checkLists.map((checkList) => (
              <CheckList
                key={checkList.id}
                checkListDetails={checkList}
                onCreate={this.handleCreateCheckList}
				onDelete = {()=>this.handleDeleteCheckList(checkList.id)}
                cardId={checkList.id}
              />
            ))}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default CheckListModalContainer;
