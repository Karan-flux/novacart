export default function OurStory() {
  const stats = [
    { num: '24/7', label: 'AI support concept' },
    { num: '1-click', label: 'Product discovery' },
    { num: '100%', label: 'Responsive UI' },
  ]

  return (
    <section className="section" id="story">
      <div className="container story-inner">
        <div>
          <h2>Commerce that feels human.</h2>
          <p className="story-text">
            NovaCart is a self-initiated e-commerce concept designed to demonstrate
            how a polished storefront, useful automation and conversational AI can
            work together.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
