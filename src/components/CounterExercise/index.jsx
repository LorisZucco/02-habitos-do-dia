import "./counter-exercise.css";

export function CounterExercise() {
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

        <button onClick={() => increase()}>+</button>
      </div>

      <button onClick={() => reset()} className="reset-button">
        Reset
      </button>
    </>
  );
}
