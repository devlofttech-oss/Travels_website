function StatsCard({ label, value }) {
  return (
    <article className="stats-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

export default StatsCard;
