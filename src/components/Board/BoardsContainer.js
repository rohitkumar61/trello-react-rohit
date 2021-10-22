import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";


import BoardCard from "./BoardCard";
import ModalBoard from "./ModalBoard";

import {
  fetchBoardsAction,
  createBoardsAction,
} from "../../actions/boardActions";

class BoardsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBoardsAction();
  }

  handleCreateBoard = (newBoardName) => {
    this.props.createBoardsAction(newBoardName);
  };

  render() {
    console.log(this.props);
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

BoardsContainer.propTypes = {
  fetchBoardsAction: PropTypes.func.isRequired,
  boards: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  boards: state.boards.boardsCard,
  newBoards: state.boards.newBoard,
});

export default connect(mapStateToProps, {
  fetchBoardsAction,
  createBoardsAction,
})(BoardsContainer);
