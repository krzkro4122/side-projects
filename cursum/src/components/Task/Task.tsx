import {
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";

import { Task } from "helpers/types";
import { AuthContext } from "components/Authentication/AuthProvider";

interface TaskInfo {
  task: Task;
  localIndex: number;
  activeTaskIndex: number;
  setActiveTaskIndex: Dispatch<SetStateAction<number>>;
  maxTaskIndex: number;
}

function Task({
  task,
  localIndex,
  activeTaskIndex,
  setActiveTaskIndex,
  maxTaskIndex,
}: TaskInfo) {
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCorrectAnswer = () => {
    let scoreDiff = 0;
    if (activeTaskIndex + 2 <= maxTaskIndex) {
      scoreDiff = 100;
      setActiveTaskIndex(activeTaskIndex + 1);
    } else {
      scoreDiff = 1000;
      navigate("/cursum");
    }
    setUser({
      id: user!.id,
      email: user!.email,
      leagueId: user!.leagueId,
      score: user!.score + scoreDiff,
    });
    alert(`Correct answer!\n+${scoreDiff} points`);
    return;
  };
  const handleIncorrectAnswer = () => {
    alert("Incorrect answer!");
    return;
  };
  const markAsPicked = (pi: number) => {
    setPickedIndex(pi);
  };

  useEffect(() => {
    setPickedIndex(null);
  }, [task]);

  const checkAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const answers = task.answers;
    const taskIndeces = [...Array(answers.length).keys()];

    if (taskIndeces.includes(pickedIndex!)) {
      if (answers.at(pickedIndex!)?.isCorrect) {
        return handleCorrectAnswer();
      } else {
        return handleIncorrectAnswer();
      }
    }
  };
  const { question, answers } = task;
  const answersFormatted = answers.map((answer, index) => {
    return (
      <label
        htmlFor={index.toString()}
        onClick={() => markAsPicked(index)}
        className={"answer " + (pickedIndex === index ? "picked" : "")}
        key={index}
      >
        <input
          type="radio"
          className="radio"
          id={index.toString()}
          name="answer"
          value={answer.text}
        ></input>
        <h4>{answer.text}</h4>
      </label>
    );
  });
  return (
    <div className="task">
      <form onSubmit={checkAnswer}>
        <fieldset>
          <legend>
            <h2>
              {localIndex + 1}. {question}
            </h2>
          </legend>
          <div id="answers">{answersFormatted}</div>
          <div id="checkContainer">
            <button
              type="submit"
              id="check"
              className={pickedIndex !== null ? "" : "disabled"}
            >
              Check
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Task;
