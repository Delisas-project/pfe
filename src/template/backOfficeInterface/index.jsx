import React from "react";
import "./style.css";
import SideBar from "../../organism/sidebar";
import Navbar from "../../organism/navbar";
import UsersManager from "../../organism/usersManager";
import ColisManager from "../../organism/ColisManager";

function BackOfficeInterface() {
  return (
    <div className="backOfficeInterface ">
      <SideBar />
      <div className="login"></div>
      <div className="content">
        <Navbar />
        <UsersManager />
        <ColisManager />
      </div>
    </div>
  );
}

export default BackOfficeInterface;
