import Age from "./Age";

function Timer() {
  return (
    <div className="timer">
        <div className="dampner">
        <span className="name">Krzysztof Król </span>
        <span className="time year"><Age part="year" /></span>
        </div>
        {/* <span className="time seconds"><Age part="second" /></span> */}
    </div>
  );
}

export default Timer;
