export default function AICommerceSection({ onOpenNova }) {
  const steps = [
    { num: '01', title: 'Understand', text: 'Customer intent, in plain language, no menus to dig through.' },
    { num: '02', title: 'Recommend', text: 'Relevant products, matched to the task or the budget stated.' },
    { num: '03', title: 'Assist', text: 'Support and follow-up, from comparison to order questions.' },
  ]

  return (
    <section className="section ai-commerce" id="ai-commerce">
      <div className="container">
        <div className="section-head">
          <h2>An assistant behind every click.</h2>
        </div>
        <p className="ai-commerce-intro">
          Ask about products, compare options, get recommendations or understand an order.
        </p>

        <div className="workflow-steps">
          {steps.map((s) => (
            <div className="workflow-step" key={s.num}>
              <div className="num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="ai-commerce-cta">
          <button className="btn btn-outline" onClick={onOpenNova}>Try Nova AI</button>
        </div>
      </div>
    </section>
  )
}
