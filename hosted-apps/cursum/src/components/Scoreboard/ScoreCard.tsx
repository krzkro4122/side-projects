import { Email, User } from "helpers/types";

interface ScoreInfo {
  user: User;
  index: number;
  leagueColor: string | undefined;
}

const email2username = (email: Email) => email?.split("@")[0];

function ScoreCard({ user, index, leagueColor }: ScoreInfo) {
  return (
    <li
      className="scoreCard"
      style={{
        color: leagueColor,
        outlineColor: leagueColor,
      }}
    >
      <span>
        {index + 1}. <b>{email2username(user.email)}</b>
      </span>
      <span
        className="score"
        style={{
          color: leagueColor,
        }}
      >
        Score: {user.score}
      </span>
    </li>
  );
}

export default ScoreCard;
