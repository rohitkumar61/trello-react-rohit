import { FETCH_LISTS, ADD_LISTS, ARCHIEVE_LIST } from "../actions/actionsTypes";

const initialState = {
  lists: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return {
        ...state,
        lists: action.payload,
      };

    case ADD_LISTS:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };

    case ARCHIEVE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };

    default:
      return state;
  }
};

export default listReducer;
