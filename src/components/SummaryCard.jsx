import './SummaryCard.css';

export default function SummaryCard({ title, value }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p>{value.toLocaleString()}</p>
    </div>
  );
}
