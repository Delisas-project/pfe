//gestionColis
const mongoose = require("mongoose");

const gestionColis = mongoose.Schema(
	{
		code_a_bare: Number,
		nom_du_client: String,
		numero_telephone: Number,
		date_de_creation: String,
		code: Number,
		service: String,
		
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("GestionColis", gestionColis);
