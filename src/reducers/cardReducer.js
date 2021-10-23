import { FETCH_CARD, ADD_CARD, DELETE_CARD } from "../actions/actionsTypes";

const initialState = {
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARD:
      return {
        ...state,
        cards: action.payload,
      };
	  
    default:
      return state;
  }
};

export default cardReducer;
