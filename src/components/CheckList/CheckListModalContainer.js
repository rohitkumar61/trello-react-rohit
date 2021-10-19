import React from "react";
import { Modal, Button } from "react-bootstrap";


import * as TrelloApi from "./../../services/api.js";
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

  handleDeleteCheckList = async (checkListId) => {
    const deletedCheckList = await TrelloApi.deleteChecklist(checkListId);
    this.setState({
      checkLists: this.state.checkLists.filter(
        (list) => list.id !== checkListId
      ),
    });
  };

  handleCreateCheckList = async (checkListName) => {
    let newCheckList = await TrelloApi.createChecklist(
      this.props.cardData.id,
      checkListName
    );

    this.setState({
      checkLists: [...this.state.checkLists, newCheckList],
    });
  };

  fetchCheckList = async () => {
    let cardCheckListData = await TrelloApi.getCheckLists(
      this.props.cardData.id
    );
    this.setState({ checkLists: cardCheckListData });
  };

  componentDidMount() {
    this.fetchCheckList();
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
                onDelete={() => this.handleDeleteCheckList(checkList.id)}
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
