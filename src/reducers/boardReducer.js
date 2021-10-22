import { FETCH_BOARD,ADD_BOARD} from "../actions/actionsTypes";

const initialState = {
	boards:[],
	board:{}

}

export default function (state = initialState,action) {

	switch (action.type){
		case FETCH_BOARD:
			return {
				...state,
				board:action.payload
			}
			default:
				return state
	}
	
}