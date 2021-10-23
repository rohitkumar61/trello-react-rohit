import * as TrelloApi from "./../services/api.js";
import { ADD_CARD, FETCH_CARD, DELETE_CARD } from "./actionsTypes";

export const fetchCardsAction = (id) => (dispatch) => {
  TrelloApi.getCards(id).then((cards) =>
    dispatch({
      type: FETCH_CARD,
      payload: cards,
    })
  );
};
