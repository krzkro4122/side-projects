import { fetchLeagues } from "helpers/fetchers";
import { useGuard } from "components/Authentication/useAuth";
import League from "./LeagueCard";

import 'styles/Browser.css';

function LeagueBrowser() {
  const leagues = fetchLeagues();
  const leaguesFormatted = leagues.map((league, index) => {
    return <League league={league} key={index} />;
  });
  return useGuard(<div className="browser">{leaguesFormatted}</div>);
}

export default LeagueBrowser;
