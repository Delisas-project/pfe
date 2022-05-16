import React, { useState } from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import FournisseurTabBody from "../fournisseurTab";
import AddNewUser from "../../molecule/addNewUser";

function FournisseurManager() {
	const [showAddModel, setshowAddModel] = useState(false);

	return (
		<React.Fragment>
			<div className='usersManager'>
				<AddUserLabel text={"Ajouter Fournisseur"} />
				<div className='userManagerContent'>
					<GestionPersonnel
						setshowAddModel={setshowAddModel}
						text={"Gestion Fournisseur"}
						role={"fournisseur"}
					/>
					<FournisseurTabBody />
				</div>
			</div>
			{showAddModel && (
				<AddNewUser
					setshowAddModel={setshowAddModel}
					data={"Fournisseur"}
				/>
			)}
		</React.Fragment>
	);
}

export default FournisseurManager;
