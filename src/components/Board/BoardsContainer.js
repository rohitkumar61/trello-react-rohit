import React, { Component } from "react";
import { Card } from "react-bootstrap";


import * as TrelloApi from "./../../services/api.js";
import BoardCard from "./BoardCard";
import ModalBoard from "./ModalBoard";


class BoardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: [],
    };
  }


  fetchBoards = async()=> {
    let boards = await TrelloApi.getBoards();
    this.setState({ boardData: boards });
  }

 

  componentDidMount() {
        this.fetchBoards()
  }

  handleCreateBoard = async (newBoardName) => {
    let newBoard = await TrelloApi.addBoard(newBoardName);
    this.setState({
      boardData: [...this.state.boardData, newBoard],
    });
   
  };

  render() {
    let { id } = this.state.boardData;
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.state.boardData.map((board) => (
          <BoardCard
            board={board}
            key={board.id}
            handleClick={this.handleBoardsClick}
          />
        ))}
        <Card
          style={{
            width: "18rem",
            height: "7rem",
            margin: "20px",
            color: "grey",
          }}
        >
          <ModalBoard
            key={this.state.boardData.id}
            onCreate={this.handleCreateBoard}
          />
        </Card>
      </div>
    );
  }
}

export default BoardsContainer;
