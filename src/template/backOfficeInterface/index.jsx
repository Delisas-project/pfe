import React from "react";
import "./style.css";
import SideBar from "../../organism/sidebar";
import Navbar from "../../organism/navbar";
import UsersManager from "../../organism/usersManager";
// import Login from '../../organism/login'

function BackOfficeInterface() {
	return (
		<div className='backOfficeInterface '>
			<SideBar />
			
			<div className='content'>
				<Navbar />
				<UsersManager />
				{/* <login/> */}
			</div>
		</div>
	);
}

export default BackOfficeInterface;
