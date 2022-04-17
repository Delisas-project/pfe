import React from "react";
import "./style.css";
import Text from "../../atome/text";
import Icon from "../../atome/icon";
import Select from "../../atome/select";
import Input from "../../atome/input";

function GestionPersonnel() {
	return (
		<div className='gestionPersonnel '>
			<div className='flexBetween labelGestion'>
				<Text text={"Gestion personnel"} />
				<Icon
					path={"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}
					fill={"#54525e"}
				/>
			</div>
			<div className='flex addPerson'>
				<Icon path={"M12 6v6m0 0v6m0-6h6m-6 0H6"} fill={"#fff"} />
				<Text text={"Ajouter personnel"} />
			</div>
			<div className='flexBetween selectAndSearchInput'>
				<div className='flex selectSection'>
					<Text text={"Afficher"} />
					<Select options={[10, 20, 30, 40, 50]} />
					<Text text={"personnel"} />
				</div>
				<Input placeHolder={"Filter"} label={"Filter"} />
			</div>
		</div>
	);
}

export default GestionPersonnel;
