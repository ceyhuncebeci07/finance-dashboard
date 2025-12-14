export default function StatCard({ label, value, delta, tone = 'good' }) {
  return (
    <div className="card">
      <div className="cardTop">
        <div className="cardLabel">{label}</div>
        <div className={`pill ${tone}`}>{delta}</div>
      </div>
      <div className="cardValue">{value}</div>
      <div className="cardMeta">Son 30 gün</div>
    </div>
  )
}
