import React from 'react';
import Assets from './NM/Assets';
import { Route, Routes } from 'react-router-dom';
import LedgerEnter from './page/LedgerEnter';
import './Main.css';
import './NM/style.css'
import AddAccountTitle from './page/AddAccountTitle'

const Main = () => {
	return (
		<div id='Main'>
			<div id='NM'>
			<Routes>
        <Route path='/' element={<Assets/>}/>
        <Route path='/ledgerenter' element={<LedgerEnter/>}/>
        <Route path='/addaccounttitle' element={<AddAccountTitle/>}/>
      </Routes>
			</div>
		</div>
	);
};

export default Main;