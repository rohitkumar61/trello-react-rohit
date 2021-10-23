import React, { Component } from "react";
import { connect } from "react-redux";

import List from "./List";
import CreateList from "./CreateList";
import * as TrelloApi from "./../../services/api.js";
import { fetchListsAction, createListsAction,archieveListsAction } from "../../actions/listActions";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchListsAction(this.props.match.params.id);
  }

  //creating list

  handleCreateList = async (name) => {
    this.props.createListsAction(this.props.match.params.id, name)
  };

  //for deleting data

  handleDeleteList = async (listId) => {
   
    this.props.archieveListsAction(listId)
   
   
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

export default connect(mapStateToProps, { fetchListsAction,createListsAction,archieveListsAction })(ListContainer);
