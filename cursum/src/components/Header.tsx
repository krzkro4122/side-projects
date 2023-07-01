import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./Authentication/AuthProvider";
import LightningLogo from "assets/lightningDynamic.svg";

import "styles/Header.css";

function Header() {
  const { unsetUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  function logOut() {
    console.log("logging out...");
    unsetUser();
    navigate("/cursum");
  }

  if (!user) {
    return <div></div>;
  }

  return (
    <div className="header">
      <div className="userInfo">
        <img id="logo" src={LightningLogo} alt="Lightning icon" />
        <h2 className="email">{user?.email}</h2>
        <h2 className="score">Score: {user?.score}</h2>
      </div>
      <div className="navigation">
        <Link className="link" to={`/cursum/`}>
          Leagues
        </Link>
        <Link
          className={user?.leagueId ? "link" : "link disabled"}
          to={`/cursum/league/${user?.leagueId}/courses`}
        >
          Courses
        </Link>
        <Link className="link" to={`/cursum/scoreboard`}>
          Scoreboard
        </Link>
      </div>
      <span className="log-out" onClick={logOut}>
        Log out
      </span>
    </div>
  );
}

export default Header;
