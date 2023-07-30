import Age from "./Age";

function Timer() {
  return (
    <div className="timer">
        <div className="dampner">
            <span className="name">Krzysztof Król&nbsp;</span>
            <span className="time year"><Age part="year" /></span>
        </div>
    </div>
  );
}

export default Timer;
