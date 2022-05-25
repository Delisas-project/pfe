import React, { useState } from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import AddNewColis from "../../molecule/addNewColis";
import RunSheetTabBody from "../runSheetTab";

function RunSheetManager() {
	const [showAddModel, setshowAddModel] = useState(false);

	return (
		<>
			<div className='usersManager'>
				<AddUserLabel text={"Ajouter runsheet"} />

				<div className='userManagerContent'>
					<GestionPersonnel
						setshowAddModel={setshowAddModel}
						text={"Gestion runsheet"}
						role={"runsheet"}
					/>
					<RunSheetTabBody />
				</div>
			</div>
			{showAddModel && (
				<AddNewColis setshowAddModel={setshowAddModel} data={"RunSheet"} />
			)}
		</>
	);
}

export default RunSheetManager;
