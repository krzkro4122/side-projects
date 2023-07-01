import { useContext } from "react";

import { fetchLeagues, fetchUsers } from "helpers/fetchers";
import { AuthContext } from "components/Authentication/AuthProvider";
import { useGuard } from "components/Authentication/useAuth";
import ScoreCard from "./ScoreCard";

import "styles/Scoreboard.css";

function Scoreboard() {
  const { user } = useContext(AuthContext);
  const users = [...fetchUsers(), user!].sort((a, b) => {
    return b.score - a.score;
  });
  const leagues = fetchLeagues();
  const usersFormatted = users.map((user, index) => {
    let leagueColor = leagues.find(
      (league) => league.id === user.leagueId
    )?.color;
    return (
      <ScoreCard
        user={user}
        key={index}
        index={index}
        leagueColor={leagueColor}
      />
    );
  });
  return useGuard(<div className="scoreboard">{usersFormatted}</div>);
}

export default Scoreboard;
