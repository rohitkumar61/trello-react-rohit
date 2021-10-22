import { FETCH_BOARD } from "./actionsTypes";
import * as TrelloApi from "../services/api.js";

export const fetchBoardsAction = () => (dispatch) => {
  console.log("dispatch action board triggered.......");
  TrelloApi.getBoards().then((board) =>
    dispatch({
      type: FETCH_BOARD,
      payload: board,
    })
  );
};

export default fetchBoardsAction;
