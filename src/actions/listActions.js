import * as TrelloApi from "./../services/api.js";
import { FETCH_LISTS } from "./actionsTypes";

export const fetchListsAction = (id) => (dispatch) => {
//   console.log("1 : ACTION ON LIST WORKING");

  TrelloApi.getLists(id).then((list) =>
    dispatch({
      type: FETCH_LISTS,
      payload: list,
    })
  );
};
