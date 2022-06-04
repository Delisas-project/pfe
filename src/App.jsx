import React from "react";
import "./App.css";
import BackOfficeInterface from "./template/backOfficeInterface";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./organism/login";
import FrontOfficeInterface from "./template/frontOfficeInterface";

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
						<Route
							path='/frontOfficeInterface/*'
							element={<FrontOfficeInterface />}
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
