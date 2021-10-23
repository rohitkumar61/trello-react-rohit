import { FETCH_LISTS } from "../actions/actionsTypes";

const initialState = {
  lists: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      //   console.log(" 2: reducer  working on fetch LISTS ....");
      return {
        ...state,
        lists: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
