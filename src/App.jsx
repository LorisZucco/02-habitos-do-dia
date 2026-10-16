import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";
import { CounterExercise } from "./components/CounterExercise";

import initalHabits from "./data/habits";

function App() {
  const [habits, setHabits] = useState(initalHabits);
  const doneCount = habits.filter((habit) => habit.done).length;
  // const [count, setCount] = useState(0);

  function handleToggle(id) {
    // setCount(count + 1);
    // console.log(count);
    // console.log(id);
    setHabits(
      habits.map((habit) => {
        return habit.id == id ? { ...habit, done: !habit.done } : habit;
      }),
    );
    // console.log(doneCount);
  }
  return (
    <>
      <Header />
      <Counter doneCount={doneCount} total={habits.length} />
      <main className="habit-list">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            icon={habit.icon}
            name={habit.name}
            done={habit.done}
            onToggle={() => handleToggle(habit.id)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
