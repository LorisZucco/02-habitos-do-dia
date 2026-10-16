import { useState } from "react";
import "./counter-exercise.css";

export function CounterExercise() {
  // let number = 0;
  const [number, setNumber] = useState(0);

  function decrease() {
    setNumber(number - 1);
  }

  function increase() {
    setNumber(number + 1);
  }

  function reset() {
    setNumber(0);
  }

  return (
    <>
      <div className="commands">
        <button onClick={() => decrease()}> - </button>
        <p>{number}</p>
        <button onClick={() => increase()}> + </button>
      </div>

      <button className="reset-button" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
}
