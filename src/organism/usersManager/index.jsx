import React, { useState } from "react";
import "./style.css";
import AddUserLabel from "../../molecule/addUserLabel";
import GestionPersonnel from "../../molecule/gestionPersonel";
import UsersTabBody from "../usersTabBody";
import AddNewUser from "../../molecule/addNewUser";

function UsersManager() {
  const [showAddModel, setshowAddModel] = useState(false);

  return (
    <React.Fragment>
      <div className="usersManager">
        <AddUserLabel />
        <div className="userManagerContent">
          <GestionPersonnel setshowAddModel={setshowAddModel} />
          <UsersTabBody />
        </div>
      </div>
      {showAddModel && <AddNewUser setshowAddModel={setshowAddModel} />}
    </React.Fragment>
  );
}

export default UsersManager;
