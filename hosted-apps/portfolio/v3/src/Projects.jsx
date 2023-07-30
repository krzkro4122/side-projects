import profilePic from "./assets/profile_pic.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import Card from "./Card";
import HalfCard from "./HalfCard";
import "./App.css";

function Projects() {
  return (
     <div id="main">
        <div id="profileContainer">
        	<img src={profilePic} id="profile" alt="My profile photo." />
        </div>
        <div id="cards">
        <div id="halfcards">
            <HalfCard
            src={github}
            alt={"My GitHub profile"}
            href={"https://github.com/krzkro4122"}
            />
            <HalfCard
            src={linkedin}
            alt={"My LinkedIn profile"}
            href={"https://linkedin.com/in/krzysztof-krol1"}
            />
        </div>
        <Card
            title={"AI Image Generator"}
            subtitle={
            "A text-based image generator powered by OpenAI's DALL-E API"
            }
            href={"http://67.207.78.202:5004/"}
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
            href={"http://67.207.78.202:5173/"}
            stack={["Frontend: React.js", "Backend: FastApi", "Service: Flask", "Database: PostgreSQL"]}
        />
        <Card
            title={"Cursum"}
            subtitle={
            'A web-application that gamifies learning courses by keeping tabs on every users\' and leagues\' score.'
            }
            href={"http://67.207.78.202/"}
            stack={["Frontend: React.ts", "Backend: Nginx"]}
        />
        </div>
	</div>
  );
}

export default Projects;
