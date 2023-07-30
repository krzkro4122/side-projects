import { useState, useEffect } from "react";
import university from "./assets/university.svg";
import company from "./assets/company.png";
import "./SlidingText.css";

function SlidingText() {
  const [mousePosition, setMousePosition] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        width: `${(event.clientX / window.innerWidth) * 100}%`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  const age = new Date().getFullYear() - 1999;

  return (
    <div>
      <div id="left-side" style={mousePosition} className="side">
        <div className="title">
          Krzysztof Król <span className="age">({age})</span>
          <br />
          <span className="fancy">Software Engineer</span>
          <img id="company" src={company} alt="Willbert by Euroloop logo" />
        </div>
      </div>
      <div id="right-side" className="side">
        <div className="title">
          Krzysztof Król <span className="age">({age})</span>
          <br />
          <span className="fancy">Master's Student</span>
        </div>
        <img id="university" src={university} alt="Jagiellonian University logo" />
      </div>
    </div>
  );
}

export default SlidingText;
