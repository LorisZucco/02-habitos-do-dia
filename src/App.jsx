import "./App.css";
import { Counter } from "./components/Counter";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Counter />

      <HabitCard icon={"icon"} name={"Beber 2 litros de água"} />
    </>
  );
}

export default App;
