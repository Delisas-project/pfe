const mongoose = require("mongoose");

const gestionColis = mongoose.Schema(
  {
    id: String,
    cin: Number,
    nom: String,
    prenom: String,
    role: String,
    tel: Number,
    mail: String,
    permis: String,
    matricule_veh: String,
    carte_grise: String,
    photo: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("GestionColis", gestionColis);
