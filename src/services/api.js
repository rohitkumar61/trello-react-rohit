export const API_TOKEN = process.env.REACT_APP_API_TOKEN;
export const API_KEY = process.env.REACT_APP_API_KEY;



export function deleteCard(id) {
  let url = `https://api.trello.com/1/cards/${id}`;
  let meta = {
    method: "DELETE",
  };

  return makeRequest(url, "", meta);
}

export function archiveList(id) {
  let url = `https://api.trello.com/1/lists/${id}/closed`;
  let queryParams = `&value=true`;
  let meta = {
    method: "PUT",
  };

  return makeRequest(url, queryParams, meta);
}

export function addBoard(name) {
  let url = `https://api.trello.com/1/boards/`;
  let queryParams = `&name=${name}`;
  let meta = {
    method: "POST",
  };

  return makeRequest(url, queryParams, meta);
}

export function addList(boardId, name) {
  let url = `https://api.trello.com/1/lists`;
  let queryParams = `&name=${encodeURI(name)}&idBoard=${boardId}`;
  let meta = {
    method: "POST",
  };

  return makeRequest(url, queryParams, meta);
}

export function addCard(id, name) {
  let url = `https://api.trello.com/1/cards`;
  let queryParams = `&idList=${id}&name=${encodeURI(name)}`;

  let meta = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  };

  return makeRequest(url, queryParams, meta);
}

export function getBoards() {
  let url = "https://api.trello.com/1/members/me/boards";
  let meta = {
    method: "GET",
  };

  return makeRequest(url, "", meta);
}

export function getLists(id) {
  let url = `https://api.trello.com/1/boards/${id}/lists`;

  let meta = {
    method: "GET",
  };

  return makeRequest(url, "", meta);
}

export function getCards(id) {
  let url = `https://api.trello.com/1/lists/${id}/cards`;

  let meta = {
    method: "GET",
  };

  return makeRequest(url, "", meta);
}


///   checklist api

export function updateCheckItem(cardId, checkItemId, state) {
	state = state ? "complete" : "incomplete";
  
	let url = `https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}`;
	let queryParams = `&state=${state}`;
	let meta = {
	  method: "PUT",
	};
  
	return makeRequest(url, queryParams, meta);
  }
  
  export function deleteCheckItem(checkListId, CheckItemId) {
	let url = `https://api.trello.com/1/checklists/${checkListId}/checkItems/${CheckItemId}`;
	let meta = {
	  method: "DELETE",
	};
  
	return makeRequest(url, "", meta);
  }
  
  export function addCheckItem(id, name) {
	let url = `https://api.trello.com/1/checklists/${id}/checkItems`;
	let queryParams = `&name=${name}`;
	let meta = {
	  method: "POST",
	};
  
	return makeRequest(url, queryParams, meta);
  }
  
  export function deleteChecklist(id) {
	let url = `https://api.trello.com/1/checklists/${id}`;
	let meta = {
	  method: "DELETE",
	};
  
	return makeRequest(url, "", meta);
  }
  
  export function createChecklist(id, name) {
	let url = `https://api.trello.com/1/cards/${id}/checklists`;
	let queryParams = `&name=${encodeURI(name)}`;
	let meta = {
	  method: "POST",
	};
	return makeRequest(url, queryParams, meta);
  }
  
  export function getCheckLists(id) {
	let url = `https://api.trello.com/1/cards/${id}/checklists`;
	let meta = {
	  method: "GET",
	};
  
	return makeRequest(url, "", meta);
  }
  




function makeRequest(url, queryParams, meta) {
  url += `?key=${API_KEY}&token=${API_TOKEN}${queryParams}`;
  return fetch(url, meta)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}
