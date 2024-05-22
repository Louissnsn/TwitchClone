import React from "react";
import logo from "./Header/IconeTwitch.svg";
import search from "./Header/Search.svg";
import menuIconeTel from "./Header/MenuIco.svg";

function Header() {
  return (
    <div>
      <nav className="headerTop">
        <ul className="listeMenu">
          <li className="liensNav">
            <img src={logo} alt="logo Twitch" className="logo" />
          </li>
          <li className="liensNav">Top Games</li>
          <li className="liensNav">Top Streams</li>
          <li className="liensNav">
            <form className="formSubmit">
              <input type="text" className="inputRecherche" />
              <button type="submit">
                <img src={search} alt="Icone loupe" className="logoLoupe" />
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="menuResponsiveButton">
        <img src={menuIconeTel} alt="Menu icone tel" className="menuIconeTel" />
      </div>
    </div>
  );
}

export default Header;
