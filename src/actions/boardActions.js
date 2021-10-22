import { FETCH_BOARD, ADD_BOARD } from "./actionsTypes";
import * as TrelloApi from "../services/api.js";

export const fetchBoardsAction = () => (dispatch) => {
  TrelloApi.getBoards().then((board) =>
    dispatch({
      type: FETCH_BOARD,
      payload: board,
    })
  );
};

export const createBoardsAction = (newBoardName) => (dispatch) => {
  TrelloApi.addBoard(newBoardName).then((postBoard) =>
    dispatch({
      type: ADD_BOARD,
      payload: postBoard,
    })
  );
};
