import React from "react";
import "./App.css";
import BackOfficeInterface from "./template/backOfficeInterface";

import Login from "./organism/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='app'>
			<React.StrictMode>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />}></Route>
						<Route
							path='/backOfficeInterface/*'
							element={<BackOfficeInterface />}
						></Route>
					</Routes>
				</BrowserRouter>
			</React.StrictMode>
			{/* <Login /> */}
			{/* <BackOfficeInterface /> */}
		</div>
	);
}

export default App;
