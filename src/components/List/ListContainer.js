import React, { Component } from "react";
import { connect } from "react-redux";

import List from "./List";
import CreateList from "./CreateList";
import * as TrelloApi from "./../../services/api.js";
import { fetchListsAction } from "../../actions/listActions";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchListsAction(this.props.match.params.id);
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
        {this.props.lists.map((list) => (
          <List
            list={list}
            key={list.id}
            onDelete={() => this.handleDeleteList(list.id)}
          />
        ))}

        <div>
          <CreateList
            key={this.props.lists.id}
            onCreate={this.handleCreateList}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists.lists,
});

export default connect(mapStateToProps, { fetchListsAction })(ListContainer);
