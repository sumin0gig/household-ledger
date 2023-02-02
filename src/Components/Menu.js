import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
	return (
		<>
			<div id='Menu' className='left'>
				<button><Link to={"/ledgerenter"}>작성하기</Link></button>
				<button><Link to={"/addaccounttitle"}>계정과목 등록</Link></button>
			</div>
			<div id='Menu' className='right'>
				메뉴입니다.
			</div>
		</>
	);
};

export default Menu;