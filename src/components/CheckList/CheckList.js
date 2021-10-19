import React from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";

import CreateListItem from "./CreateListItem";
import AddCheckList from "./AddCheckList";
import * as TrelloApi from "./../../services/api.js";

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkItems: props.checkListItems,
    };
  }

  // updateProgressBar = () => {
  //   let checkItems = this.state.checkItems;
  //   let completed = checkItems.reduce((acc, cur) => {
  //     if (acc.state === "complete") {
  //       return acc + 1;
  //     }
  //     return acc;
  //   }, 0);

  //   return (completed / checkItems.length) * 100;
  // };

  handleCheckItem = async (name) => {
    let newCheckedItem = await TrelloApi.addCheckItem(this.props.id, name);

    this.setState({
      checkItems: [...this.state.checkItems, newCheckedItem],
    });
  };

  handleDeleteCheckListItem = async (itemId) => {
    let deletedCheckList = await TrelloApi.deleteCheckItem(
      this.props.id,
      itemId
    );

    this.setState({
      checkItems: this.state.checkItems.filter((list) => list.id !== itemId),
    });
  };


  render() {
    return (
      <>
        <Card
          border="secondary"
          style={{ width: "43rem", margin: "20px", position: "relative" }}
        >
          <Card.Header style={{ marginTop: "5px" }}>
            {" "}
            {this.props.name}{" "}
            <Button
              variant="outline-secondary"
              onClick={this.props.onDelete}
              style={{ position: "absolute", right: "0", top: "7px" }}
            >
              Delete
            </Button>{" "}
          </Card.Header>

          <Card.Body>
            <div>
              {this.state.checkItems.map((item) => {
                console.log(item);
                return (
                  <AddCheckList
                    item={item}
                    key={item.id}
                    id={item.id}
                    checked={item.state === "complete" ? true : false}
                    // onCheck={this.handleCheckItemChange}
                    onDelete={this.handleDeleteCheckListItem}
                  />
                );
              })}
            </div>

            <CreateListItem onCreate={this.handleCheckItem} />
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CheckList;
