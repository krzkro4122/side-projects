import { Link } from "react-router-dom";
import { useContext } from "react";

import { League, LeagueType } from "helpers/types";
import { AuthContext } from "components/Authentication/AuthProvider";
import BugLeagueIcon from "assets/leagueIcons/BugLeagueIcon.png";
import FireLeagueIcon from "assets/leagueIcons/FireLeagueIcon.png";
import GhostLeagueIcon from "assets/leagueIcons/GhostLeagueIcon.png";

interface leagueInfo {
  league: League;
}

function LeagueCard({ league }: leagueInfo) {
  const { setLeague } = useContext(AuthContext);

  const leagueType2Icon = (leagueType: LeagueType) => {
    switch (leagueType) {
      case LeagueType.BUG:
        return BugLeagueIcon;
      case LeagueType.FIRE:
        return FireLeagueIcon;
      case LeagueType.GHOST:
        return GhostLeagueIcon;
      default:
        return BugLeagueIcon;
    }
  };

  const setColor = () => {
    document.documentElement.style.setProperty("--accent-color", league.color);
    document.documentElement.style.setProperty(
      "--accent-color-low-sat",
      league.color + "55"
    );
    setLeague(league.id);
  };

  return (
    <li
      className="browserCard"
      style={{
        border: `solid 0.2rem ${league.color}`,
      }}
    >
      <Link
        to={`/cursum/league/${league.id}/courses`}
        onClick={() => setColor()}
      >
        <img
          className="browserCardImage"
          src={leagueType2Icon(league.type)}
          alt={`Image of the ${league.type} league.`}
        />
        <h1
          className="browserCardLabel"
          style={{
            color: `${league.color}`,
          }}
        >
          {league.type}
        </h1>
      </Link>
    </li>
  );
}

export default LeagueCard;
