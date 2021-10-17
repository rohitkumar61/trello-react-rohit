import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { API_TOKEN, API_KEY } from "../services/projectServices";

import BoardCard from "./BoardCard";
import ModalBoard from "./ModalBoard";


class BoardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: [],
    };
  }

  componentDidMount() {
    const url = `https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${API_TOKEN}`;
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ boardData: json });
      })
      .catch((err) => console.log(err));
  }

  handleCreateBoard = async (name) => {
    let url = `https://api.trello.com/1/boards/?name=${name}&key=${API_KEY}&token=${API_TOKEN}`;

    const response = await fetch(url, { method: "POST" });
    const newBoard = await response.json();
    this.setState({
      boardData: [...this.state.boardData, newBoard],
    });
    console.log(newBoard);
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
