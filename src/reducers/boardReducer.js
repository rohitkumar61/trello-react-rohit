import { FETCH_BOARD } from "../actions/actionsTypes";

const initialState = {
  boardsCard: [],
//   board: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARD:
      console.log("reducer  working on case fetch match ....");
      return {
        ...state,
        boardsCard: action.payload,
      };

    default:
      return state;
  }
}
