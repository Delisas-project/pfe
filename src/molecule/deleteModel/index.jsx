import React from "react";
import "./style.css";

function DeleteModel({ setshowDeleteModel }) {
	return (
		<div className='modelBackGround flex'>
			<div className='deleteModel'>
				<div className='deleteLabel flexStart'>Supprimer Personnel</div>
				<div className='deleteText flexStart'>
					Voulez vous vraiment supprimer ce personnel ?
				</div>
				<div className='buttons flexEnd'>
					<button
						className='cancel'
						onClick={() => setshowDeleteModel(false)}
					>
						Annuler
					</button>
					<button className='delete'>Supprimer</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteModel;
