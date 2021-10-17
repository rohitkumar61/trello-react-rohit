export const API_TOKEN = process.env.REACT_APP_API_TOKEN;
export const API_KEY = process.env.REACT_APP_API_KEY;



export function getBoard(url) {
	 url += `?key=${API_KEY}&token=${API_TOKEN}`;
	 return fetch(url,{
		 method:'GET'
	 })
	 .then((response)=>{
		 return response.json()
	 })
	 .then((data)=>{
		 return data
	 })
	 .catch((err)=>{
		 console.error(err)
	 })
	
}