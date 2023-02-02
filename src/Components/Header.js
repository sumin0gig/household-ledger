import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
	return (
		<div id='Header'>
			<Link to="/">HOME</Link>
			<h2>헤더입니다.</h2>
			<input type='text'/>
		</div>
	);
};

export default Header;