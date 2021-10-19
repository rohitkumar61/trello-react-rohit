import React, { Component } from "react";

import List from "./List";
import CreateList from "./CreateList";
import * as TrelloApi from "./../../services/api.js";

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
    };
  }

  fetchLists = async () => {
    let lists = await TrelloApi.getLists(this.props.match.params.id);
    this.setState({ listData: lists });
  };

  componentDidMount() {
    this.fetchLists();
  }

  //creating list

  handleCreateList = async (name) => {
    let newList = await TrelloApi.addList(this.props.match.params.id, name);

    this.setState({
      listData: [...this.state.listData, newList],
    });
  };

  //for deleting data

  handleDeleteList = async (listId) => {
    let archivedList = await TrelloApi.archiveList(listId);
    if (archivedList.closed) {
      this.setState({
        listData: this.state.listData.filter((list) => list.id !== listId),
      });
    } else {
      console.log("Problem during making PUT request");
    }
  };

  render() {
    return (
      <div className="d-flex m-2" style={{ overflowX: "auto", flex: "1" }}>
        {this.state.listData.map((list) => (
          <List
            list={list}
            key={list.id}
            onDelete={() => this.handleDeleteList(list.id)}
          />
        ))}

        <div>
          <CreateList
            key={this.state.listData.id}
            onCreate={this.handleCreateList}
          />
        </div>
      </div>
    );
  }
}

export default ListContainer;
