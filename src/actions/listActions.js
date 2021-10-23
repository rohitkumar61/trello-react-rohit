import * as TrelloApi from "./../services/api.js";
import { FETCH_LISTS,ADD_LISTS} from "./actionsTypes";

export const fetchListsAction = (id) => (dispatch) => {
//   console.log("1 : ACTION ON LIST WORKING");

  TrelloApi.getLists(id).then((list) =>
    dispatch({
      type: FETCH_LISTS,
      payload: list,
    })
  );
};


export const createListsAction = (id,newListName) => (dispatch) => {
	console.log("crete listaction eorking")
	TrelloApi.addList(id, newListName).then((postList) =>
	  dispatch({
		type: ADD_LISTS,
		payload: postList,
	  })
	);
  };
  