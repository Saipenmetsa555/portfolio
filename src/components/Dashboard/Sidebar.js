//rfce
import React from "react";
import "./index.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="main">
      <div>
        <h1 className="name">Sai Dattu</h1>
      </div>
      <div className="Sidebar">
        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                className="row"
                key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
        <hr className="hr-line"></hr>
      </div>
    </div>
  );
}

export default Sidebar;
