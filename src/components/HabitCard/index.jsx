import "./habit-card.css";
export function HabitCard({ icon, name }) {
  return (
    <article className="habit-card">
      <span className="habit-icon">{icon}</span>
      <div className="habit-info">
        <h3>{name}</h3>
        <button>Marcar</button>
      </div>
    </article>
  );
}
