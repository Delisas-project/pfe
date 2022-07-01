import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import SideBarFrontOffice from "../../organism/frontOfficeSideBare";
import Navbar from "../../organism/navbar";
import ColisManager from "../../organism/coliesManager";
import FrontOffiiceCréesColis from "../../organism/frontOfficeColis";
import Profile from "../../organism/profile";

function FrontOfficeInterface() {
  return (
    <>
      <div className="backOfficeInterface ">
        <SideBarFrontOffice />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/gestioncolis" element={<ColisManager />}></Route>
            <Route
              path="/ajouterColis"
              element={<FrontOffiiceCréesColis />}
            ></Route>
            <Route
              path="/fournisseurProfile"
              element={
                <Profile
                  name={"Emna louati"}
                  email={"emnalouati@gmail.com"}
                  id={"emna1245"}
                  phone={"25136485"}
                  role={"fournisseur"}
                  imgSrc={
                    "https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
                  }
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default FrontOfficeInterface;
