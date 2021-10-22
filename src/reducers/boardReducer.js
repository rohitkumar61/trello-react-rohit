import { FETCH_BOARD, ADD_BOARD } from "../actions/actionsTypes";

const initialState = {
  boardsCard: [],
  newBoard: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARD:
      //   console.log("reducer  working on case fetch match ....");
      return {
        ...state,
        boardsCard: action.payload,
      };

    case ADD_BOARD:
      //   console.log("reducer  working on case add card ....");
      return {
        ...state,
        newBoard: action.payload,
      };

    default:
      return state;
  }
}
