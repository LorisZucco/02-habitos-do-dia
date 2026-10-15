import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";

import initalHabits from "./data/habits";

function App() {
  const [habits, setHabits] = useState(initalHabits);
  function handleToggle(id) {
    console.log(id);
    setHabits(
      habits.map((habit) => {
        return habit.id == id ? { ...habit, done: !habit.done } : habit;
      }),
    );
  }
  return (
    <>
      <Header />
      <Counter />
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
