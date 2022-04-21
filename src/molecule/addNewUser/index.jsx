import React from "react";
import "./style.css";

function AddNewUser({ setshowAddModel }) {
  return (
    <div className="addModel flex">
      <div className="modell">
        <h3>Ajouter Personnel</h3>
        <div className="parent">
          <div>
            <label className="labelAdd">Role Personnel</label>
            <select className="inputAdd" name="cars" id="cars">
              <option value="ChoisirRole">Choisir Role</option>
              <option value="Gérant">Gérant</option>
              <option value="livreur">livreur</option>
              <option value="Commercial">Commercial</option>
              <option value="Magasiné">Magasiné</option>
            </select>
          </div>
          <div>
            <label className="labelAdd">Nom du Personnel</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Prénom du Personnel</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Numéro CIN</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Numéro du téléphone</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Adresse E-mail</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Permis</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Matricule Vehicule</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Carte Grise</label>
            <input className="inputAdd" type="text" />
          </div>
          <div>
            <label className="labelAdd">Hub</label>
            <select className="inputAdd" name="cars" id="cars">
              <option value="ChoisirRole">Choisir Role</option>
              <option value="Gérant">Gérant</option>
              <option value="livreur">livreur</option>
              <option value="Commercial">Commercial</option>
              <option value="Magasiné">Magasiné</option>
            </select>
          </div>
          <div>
            <label className="labelAdd">Choisir image</label>
            <input className="inputAdd" type="file" />
          </div>
        </div>
        <div className="parentBtn">
          <button
            onClick={() => {
              setshowAddModel(false);
            }}
            className="AddBtn"
          >
            Annuler
          </button>
          <button className="AddBtn" id="ajouter">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewUser;
