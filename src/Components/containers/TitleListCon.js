import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTitle } from '../modules/getDataReducer';
import TitleList from '../page/TitleList';

const TitleListCon = () => {
	const {data}= useSelector(state=>state.getDataReducer);
	const dispatch= useDispatch();
	useEffect(()=>{
		dispatch(getTitle())
	},[dispatch])
	console.log(data);
	if(!data) return <div>No data</div>
	
	return (
		<div>
			<TitleList data={data}/>
		</div>
	);
};

export default TitleListCon;