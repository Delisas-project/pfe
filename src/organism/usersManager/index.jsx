import React from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import UsersTabBody from "../usersTabBody";

function UsersManager() {
	return (
		<div className='usersManager'>
			<AddUserLabel />
			<div className='userManagerContent'>
				<GestionPersonnel />
				<UsersTabBody />
			</div>
		</div>
	);
}

export default UsersManager;
