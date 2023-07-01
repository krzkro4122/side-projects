import profilePic from "./assets/profile_pic.png";
import SlidingText from "./SlidingText";
import Card from "./Card";
import HalfCard from "./HalfCard";
import "./App.css";

function App() {
  return (
    <div id="main">
      <img src={profilePic} id="profile" alt="My profile photo." />
      <SlidingText />
      <div id="cards">
        <div className="halfcards">
          <HalfCard
            title={"GitHub"}
            subtitle={"My profile on GitHub"}
            href={"https://github.com/krzkro4122"}
          />
          <HalfCard
            title={"LinkedIn"}
            subtitle={"My profile on LinkedIn"}
            href={"https://linkedin.com/in/krzysztof-krol1"}
          />
        </div>
        <Card
          title={"AI Image Generator"}
          subtitle={
            "A text-based image generator powered by OpenAI's DALL-E API"
          }
          href={"https://fireship-dream-app.lm.r.appspot.com/"}
          stack={["Frontend: Vanilla JS", "Backend: Express.js"]}
        />
        <Card
          title={"Goofy Slider"}
          subtitle={
            'A minigame breaking the conventional usage of the "slider" UI element'
          }
          href={"http://67.207.78.202:5001/"}
          stack={["Frontend: Vanilla JS", "Backend: Express.js"]}
        />
        <Card
          title={"Tic Tac Toe"}
          subtitle={
            'A classic tic-tac-toe game with interactive move-history'
          }
          href={"http://67.207.78.202:5000/"}
          stack={["Frontend: React.js", "Backend: Flask"]}
        />
        <Card
          title={"Chatter"}
          subtitle={
            'A service-oriented application that communicates with OpenAI to provide a great chatBot experience.'
          }
          href={"https://tic-tac-toe-382117.lm.r.appspot.com/"}
          stack={["Frontend: React.js", "Backend: FastApi", "Service: Flask", "Db: PostgreSQL"]}
        />
        <Card
          title={"Cursum"}
          subtitle={
            'A web-application oriented that gamifies courses by keeping tabs on every users\' and teams\' score.'
          }
          href={"https://tic-tac-toe-382117.lm.r.appspot.com/"}
          stack={["Frontend: React.ts", "Backend: Nginx"]}
        />
      </div>
    </div>
  );
}

export default App;
