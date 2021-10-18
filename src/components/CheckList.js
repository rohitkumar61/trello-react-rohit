import React, { Component } from "react";
import { API_KEY, API_TOKEN } from "../services/projectServices";
import { Card } from "react-bootstrap";
import CreateListItem from "./CreateListItem";
import { Button } from "react-bootstrap";
import AddCheckList from "./AddCheckList";
import { ProgressBar } from "react-bootstrap";


class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }


  handleDeleteCheckListItem = async (itemId) => {
    console.log("item delete working", itemId);
    let url = `https://api.trello.com/1/checklists/${this.props.checkListDetails.id}/checkItems/${itemId}?key=${API_KEY}&token=${API_TOKEN}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    const deletedCheckList = await response.json();
    console.log("delete item ", deletedCheckList);
    this.setState({
      items: this.state.items.filter((list) => list.id !== itemId),
    });
  };



  handleAddCheckListItem = async (itemName) => {
    console.log("item name", itemName);
    let url = `https://api.trello.com/1/checklists/${this.props.checkListDetails.id}/checkItems?name=${itemName}&key=${API_KEY}&token=${API_TOKEN}`;
    let itemResponse = await fetch(url, { method: "POST" });
    let newItem = await itemResponse.json();
    console.log(newItem);
    this.setState({ items: [...this.state.items, newItem] });
  };

  render() {
    const now = 100;

    const progressInstance = <ProgressBar now={now} label={`${now}%`} />;

    return (
      <>
        <Card
          border="secondary"
          style={{ width: "43rem", margin: "20px", position: "relative" }}
        >
          {progressInstance}
          <Card.Header style={{ marginTop: "5px" }}>
            {" "}
            {this.props.checkListDetails.name}{" "}
            <Button
              variant="outline-secondary"
              onClick={this.props.onDelete}
              style={{ position: "absolute", right: "0", top: "20px" }}
            >
              Delete
            </Button>{" "}
          </Card.Header>

          <Card.Body>
            <div>
              {this.state.items.map((item) => {
                console.log(item);
                return (
                  <AddCheckList
                    item={item}
                    key={item.id}
                    onDelete={() => this.handleDeleteCheckListItem(item.id)}
                  />
                );
              })}
            </div>

            <CreateListItem onCreate={this.handleAddCheckListItem} />
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CheckList;
