import React from "react";
import "./style.css";
import SideBar from "../../organism/sidebar";
import Navbar from "../../organism/navbar";
import UsersManager from "../../organism/usersManager";

function BackOfficeInterface() {
	return (
		<div className='backOfficeInterface '>
			<SideBar />
			<div className='content'>
				<Navbar />
				<UsersManager />
			</div>
		</div>
	);
}

export default BackOfficeInterface;
