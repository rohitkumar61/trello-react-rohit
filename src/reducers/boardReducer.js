import { FETCH_BOARD, ADD_BOARD, FETCH_LISTS } from "../actions/actionsTypes";

const initialState = {
  boardsCard: [],
};

const boardReducer = (state = initialState, action) =>{
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
        boardsCard: [...state.boardsCard, action.payload],
      };

    default:
      return state;
  }
}


export default boardReducer