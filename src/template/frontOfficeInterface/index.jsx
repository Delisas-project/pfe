import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBarFrontOffice from "../../organism/frontOfficeSideBare";
import Navbar from "../../organism/navbar";
import UsersManager from "../../organism/usersManager";
import FournisseurManager from "../../organism/fournisseurManager";
import ColisManager from "../../organism/coliesManager";
import RunSheetManager from "../../organism/runSheetManager";
import HubManager from "../../organism/HubManager";
import FrontOffiiceCréesColis from "../../organism/frontOfficeColis";

function FrontOfficeInterface() {
	return (
		<>
			<div className='backOfficeInterface '>
				<SideBarFrontOffice />
				<div className='content'>
					<Navbar />
					<Routes>
						<Route
							path='/gestioncolis'
							element={<ColisManager />}
						></Route>
						<Route
							path='/ajouterColis'
							element={<FrontOffiiceCréesColis />}
						></Route>
						<Route
							path='/gestionhub'
							element={<HubManager />}
						></Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default FrontOfficeInterface;
