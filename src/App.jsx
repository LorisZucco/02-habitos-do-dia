import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";
// import { CounterExercise } from "./components/CounterExercise";
// import { PlayersPoints } from "./components/PlayersPoints";

import initialHabits from "./data/habits";
import { HabitForm } from "./components/HabitForm";

function App() {
  const [habits, setHabits] = useState(initialHabits);

  const doneCount = habits.filter((habit) => habit.done).length;

  function handleAdd(name) {
    const newHabit = {
      id: Date.now(),
      icon: "⭐️",
      name,
      done: false,
    };

    setHabits([...habits, newHabit]);
  }

  // const [count, setCount] = useState(0);

  function handleToggle(id) {
    // setCount(count + 1);
    // console.log(count);

    //console.log(id);

    setHabits(
      habits.map((habit) => {
        return habit.id == id ? { ...habit, done: !habit.done } : habit;
      }),
    );
  }

  return (
    <>
      {/* <PlayersPoints /> */}
      {/* <CounterExercise /> */}
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

      <HabitForm onAdd={handleAdd} />
    </>
  );
}

export default App;
