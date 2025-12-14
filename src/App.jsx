import StatCard from './components/StatCard.jsx'

const stats = [
  { label: 'Bakiye', value: '₺ 128.450', delta: '+%3.2', tone: 'good' },
  { label: 'Aylık Harcama', value: '₺ 21.780', delta: '+%1.1', tone: 'warn' },
  { label: 'Aylık Gelir', value: '₺ 34.900', delta: '+%4.8', tone: 'good' },
  { label: 'Tasarruf', value: '₺ 13.120', delta: '+%2.0', tone: 'good' }
]

const recent = [
  { name: 'Market', date: '14 Ara', amount: '-₺ 540' },
  { name: 'Maaş', date: '13 Ara', amount: '+₺ 32.500' },
  { name: 'Abonelik', date: '12 Ara', amount: '-₺ 149' },
  { name: 'Transfer', date: '10 Ara', amount: '-₺ 2.000' }
]

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo" aria-hidden />
          <div>
            <div className="brandTitle">Finance Dashboard</div>
            <div className="brandSubtitle">Özet görünüm</div>
          </div>
        </div>
        <div className="actions">
          <button className="button buttonGhost">Raporlar</button>
          <button className="button">Yeni işlem</button>
        </div>
      </header>

      <main className="content">
        <section className="grid">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2 className="panelTitle">Son işlemler</h2>
            <span className="panelHint">Demo veri</span>
          </div>
          <div className="table">
            <div className="row rowHead">
              <div>İşlem</div>
              <div>Tarih</div>
              <div className="right">Tutar</div>
            </div>
            {recent.map((r, i) => (
              <div className="row" key={i}>
                <div className="name">{r.name}</div>
                <div className="muted">{r.date}</div>
                <div className={`right ${r.amount.startsWith('-') ? 'bad' : 'good'}`}>{r.amount}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="muted">Bu proje bu workspace içinde yeniden oluşturuldu.</span>
      </footer>
    </div>
  )
}
