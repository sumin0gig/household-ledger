import axios from "axios";
import { serveraddress } from "../../App";

const GET_TITLE='addaccounttitle/GET_TITLE';

const initialState={
	data: null
}

export default function getDataReducer(state=initialState,action){
	switch (action.type) {
		case GET_TITLE:
			return {data: action.data};
		default:
			return state;
	}
}

export const getTitle=()=> async dispatch=>{
	dispatch({type:GET_TITLE})
	try{
		const response= await axios.get(`${serveraddress}addaccounttitle`);
		const data= response.data;
		dispatch({type:GET_TITLE, data:data})
	}
	catch(e){
		alert(e);
	}
}
