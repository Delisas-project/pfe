import React from "react";
import "./App.css";
import BackOfficeInterface from "./template/backOfficeInterface";

import Login from "./organism/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='app'>
				{/* <BackOfficeInterface /> */}
			{/* <Login/> */}
			<BrowserRouter>
			<Routes>
			<Route path="/" element={<Login />}></Route>
			<Route path="/BackOfficeInterface" element={<BackOfficeInterface />}></Route>

			
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
