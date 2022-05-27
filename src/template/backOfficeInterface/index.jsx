import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "../../organism/sidebar";
import Navbar from "../../organism/navbar";
import UsersManager from "../../organism/usersManager";
import FournisseurManager from "../../organism/fournisseurManager";
import ColisManager from "../../organism/coliesManager";
import RunSheetManager from "../../organism/runSheetManager";
import HubManager from "../../organism/HubManager";
import Login from "../../organism/login";

function BackOfficeInterface() {
	return (
		<BrowserRouter>
			{/* <Routes>
				<Route path='/login' exact element={<Login />}></Route>
				<React.Fragment> */}
					<div className='backOfficeInterface '>
						<SideBar />
						<div className='content'>
							<Navbar />
							<Routes>
								<Route
									path='/gestionPersonnel'
									element={<UsersManager />}
								></Route>
								<Route
									path='/gestionfournisseurs'
									element={<FournisseurManager />}
								></Route>
								<Route
									path='/gestioncolis'
									element={<ColisManager />}
								></Route>
								<Route
									path='/gestionrunsheet'
									element={<RunSheetManager />}
								></Route>
								<Route
									path='/gestionhub'
									element={<HubManager />}
								></Route>
							</Routes>
						</div>
					</div>
				{/* </React.Fragment>
			</Routes> */}
		</BrowserRouter>
	);
}

export default BackOfficeInterface;
