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
import Profile from "../../organism/profile";
function BackOfficeInterface() {
	return (
		<>
			<div className='backOfficeInterface '>
				<SideBar />
				<div className='content'>
					<Navbar />
					<Routes>
						<Route
							path='/adminProfile'
							element={
								<Profile
									name={"Wael Ajabi"}
									email={"waelAjabi@gmail.com"}
									id={"wael1245"}
									phone={"22564896"}
									role={"Administrateur"}
									imgSrc={
										"https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/271859266_1982027125312688_4156598321716349538_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QSQuNNktYwIAX8GtRgC&tn=NoWHxNPozIzb57NI&_nc_ht=scontent.ftun10-1.fna&oh=00_AT-VDwHl5a8kl3vK1OsIeTXdTXjrav6sf5xaIfKlupeFPw&oe=62A1F512"
									}
								/>
							}
						></Route>
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
		</>
	);
}

export default BackOfficeInterface;
