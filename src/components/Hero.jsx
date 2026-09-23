export default function Hero({ onOpenNova }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <div className="hero-eyebrow concept-tag">
            <span className="dot" />
            CONCEPT DEMO
          </div>

          <h1>Better products.<br />Smarter shopping.</h1>

          <p className="hero-sub">
            A premium commerce experience combining thoughtful product
            discovery with AI-assisted customer support.
          </p>

          <div className="hero-actions">
            <a href="#shop" className="btn btn-primary">Explore Collection</a>
            <button className="btn btn-outline" onClick={onOpenNova}>Ask Nova AI</button>
          </div>

          <div className="trust-row">
            <span><span className="tick">●</span> AI-assisted support</span>
            <span><span className="tick">●</span> Secure checkout ready</span>
            <span><span className="tick">●</span> Mobile-first</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="plate plate-1" />
          <div className="plate plate-2" />
          <div className="grain" />
          <div className="caption">Everyday Carry Set</div>
        </div>
      </div>
    </section>
  )
}
