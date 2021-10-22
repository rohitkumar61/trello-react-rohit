import React from "react";
import { Card } from "react-bootstrap";
import {connect} from "react-redux"


import * as TrelloApi from "./../../services/api.js";
import BoardCard from "./BoardCard";
import ModalBoard from "./ModalBoard";

import fetchBoardsAction from "../../actions/boardActions"


class BoardsContainer extends React.Component {

  componentDidMount() {
    console.log( "board state   " + " " )
    console.log(this.props.boards)
    this.props.fetchBoardsAction()
  }

  handleCreateBoard = async (newBoardName) => {
    let newBoard = await TrelloApi.addBoard(newBoardName);
    this.setState({
      boardData: [...this.state.boardData, newBoard],
    });
   
  };

  render() {
    
  console.log(this.props)
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {this.props.boards.map((board) => (
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
            key={this.props.boards.id}
            onCreate={this.handleCreateBoard}
          />
        </Card>
      </div>
    );
  }
}


const mapStateToProps = state =>({
  boards:state.boards.boardsCard
})

export default connect(mapStateToProps,{fetchBoardsAction})(BoardsContainer);
