import "./counter.css";

export function Counter({ doneCount, total }) {
  return (
    <section className="daily-progress">
      <p>
        Hoje: {doneCount} de {total}
      </p>
    </section>
  );
}
