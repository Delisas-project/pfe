import React from "react";

function DeleteModel() {
	return (
		<div className='modelBackGround flex'>
			<div className='model flexCol'>
				<div className='deleteLabel flexStart'>Supprimer Personnel</div>
				<div className='deleteText flexStart'>
					Voulez vous vraiment supprimer ce personnel ?
				</div>
				<div className='buttons flexEnd'>
					<button className='cancel'>Annuler</button>
					<button className='delete'>Supprimer</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteModel;
