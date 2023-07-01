import profilePic from "./assets/profile_pic.png";
import SlidingText from "./SlidingText";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div id="main">
      <img src={profilePic} id="profile" alt="My profile photo." />
      <SlidingText />
      <div id="cards">
        <Card
          title={"GitHub"}
          subtitle={"My profile on GitHub"}
          href={"https://github.com/krzkro4122"}
        />
        <Card
          title={"LinkedIn"}
          subtitle={"My profile on LinkedIn"}
          href={"https://linkedin.com/in/krzysztof-krol1"}
        />
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
          href={"https://regal-extension-379017.lm.r.appspot.com/"}
          stack={["Frontend: Vanilla JS", "Backend: Express.js"]}
        />
         <Card
          title={"Tic Tac Toe"}
          subtitle={
            'A classic tic-tac-toe game with interactive move-history'
          }
          href={"https://tic-tac-toe-382117.lm.r.appspot.com/"}
          stack={["Frontend: React.js", "Backend: Flask"]}
        />
      </div>
    </div>
  );
}

export default App;
