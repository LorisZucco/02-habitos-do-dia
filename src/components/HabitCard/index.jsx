import "./habit-card.css";

export function HabitCard({ icon, name, done, onToggle }) {
  return (
    <article className={done ? "habit-card done" : "habit-card"}>
      <span className="habit-icon">{icon}</span>

      <div className="habit-info">
        <h3>{name}</h3>
        <button onClick={onToggle}>{done ? "✓ Feito" : "Marcar"}</button>
      </div>
    </article>
  );
}
