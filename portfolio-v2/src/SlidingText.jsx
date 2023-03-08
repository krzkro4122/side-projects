import { useState, useEffect } from "react";
import ujLogo from "./assets/uj.svg";
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
        </div>
      </div>
      <div id="right-side" className="side">
        <div className="title">
          Krzysztof Król <span className="age">({age})</span>
          <br />
          <span className="fancy">Working Student</span>
        </div>
      </div>
    </div>
  );
}

export default SlidingText;
