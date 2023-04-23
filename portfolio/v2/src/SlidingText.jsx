import { useState, useEffect } from "react";
import uj from "./assets/uj.svg";
import f5 from "./assets/f5.svg";
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
          <span className="fancy">Software Developer</span>
          <img id="f5" src={f5} alt="F5 Networks logo" />
        </div>
      </div>
      <div id="right-side" className="side">
        <div className="title">
          Krzysztof Król <span className="age">({age})</span>
          <br />
          <span className="fancy">Working Student</span>
        </div>
        <img id="uj" src={uj} alt="Jagiellonian University logo" />
      </div>
    </div>
  );
}

export default SlidingText;
