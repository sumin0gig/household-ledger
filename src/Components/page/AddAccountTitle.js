import axios from 'axios';
import React, { useContext, useState } from 'react';
import { serveraddress } from '../../App';
import TitleListCon from '../containers/TitleListCon';

const AddAccountTitle = () => {
	const[formdata,setFormdata]=useState({
		title: "자산",
		text: ""
	});
	const {title,text}=formdata;
	const addr= useContext(serveraddress);

	const addtitle=()=>{
		axios.post(`${addr}/upload`,formdata,{
			Headers:{'content-type':'multipart/form-data'},
		}).then(res=>{
			console.log("우아");
		})
	}
	
	const onclick=(e)=>{
		setFormdata({
			...formdata,
			title:e.target.value
		});
		console.log(formdata);
	};
	const onchange=(e)=>{
		setFormdata({
			...formdata,
			text:e.target.value
		});
		console.log(formdata);
	};

	return (
		<div>
			<div>
				<h2>계정과목</h2>
				<form method='post'>
					항목명
					<input onChange={onchange} value={text} required/>
					종류
					<button value="자산" type='button' onClick={onclick} className={title==="자산"? "assestcolor":"btnOff"}>자산</button>
					<button value="부채" type='button' onClick={onclick} className={title==="부채"? "debtcolor":"btnOff"}>부채</button>
					<button value="수익" type='button' onClick={onclick} className={title==="수익"? "profitcolor":"btnOff"}>수익</button>
					<button value="비용" type='button' onClick={onclick} className={title==="비용"? "costcolor":"btnOff"}>비용</button>
					<button onClick={addtitle}>등록</button>
				</form>
				{/* 계정과목 등록 axios.post */}
			</div>
			<div>
				<h2>계정과목 수정하기</h2>
				<TitleListCon/>
				{/* 존재하는 계정과목 리스트 출력 axios.get */}
			</div>
		</div>
	);
};

export default AddAccountTitle;