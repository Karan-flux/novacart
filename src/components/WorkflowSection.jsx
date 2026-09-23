const steps = [
  { icon: '🧑', title: 'Customer' },
  { icon: '💬', title: 'Nova AI' },
  { icon: '✦', title: 'Recommendation' },
  { icon: '🛍️', title: 'Cart' },
  { icon: '✓', title: 'Checkout' },
  { icon: '↺', title: 'Order support' },
]

export default function WorkflowSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>How the pieces connect.</h2>
          <p>A single path from a question to a resolved order.</p>
        </div>

        <div className="flow-row">
          {steps.map((s, i) => (
            <div key={s.title} style={{ display: 'flex', alignItems: 'center' }}>
              <div className="flow-card">
                <div className="icon" aria-hidden="true">{s.icon}</div>
                <div className="title">{s.title}</div>
              </div>
              {i < steps.length - 1 && <div className="flow-arrow">→</div>}
            </div>
          ))}
        </div>
        <div className="flow-label">Concept workflow</div>
      </div>
    </section>
  )
}
