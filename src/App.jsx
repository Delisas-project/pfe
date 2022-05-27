import React from "react";
import "./App.css";
import BackOfficeInterface from "./template/backOfficeInterface";

import Login from "./organism/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='app'>
			{/* <BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/' element={<BackOfficeInterface />}></Route>
				</Routes>
			</BrowserRouter> */}
      <Login/>
			{/* <BackOfficeInterface /> */}
		</div>
	);
}

export default App;
