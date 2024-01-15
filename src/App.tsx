import React from 'react';
import {ReactComponent as Logo} from './stackline_logo.svg';
import './App.css';
import {Product} from './components/product/product';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Logo className='App-logo'/>
			</header>
			<Product />
		</div>
	);
}

export default App;
