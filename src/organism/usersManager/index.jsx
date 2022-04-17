import React from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";

function UsersManager() {
	return (
		<div className='usersManager'>
			<AddUserLabel />
			<div className='userManagerContent'>
				<GestionPersonnel />
			</div>
		</div>
	);
}

export default UsersManager;
