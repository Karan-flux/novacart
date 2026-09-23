export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">NovaCart</div>
            <p>Self-initiated AI commerce concept by Novariyan.</p>
          </div>
          <div className="footer-links">
            <div>
              <a href="#shop">Shop</a>
              <a href="#ai-commerce">AI Commerce</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom" id="contact">
          <span>© 2026 Novariyan</span>
          <span className="concept-tag"><span className="dot" />CONCEPT DEMO</span>
        </div>
      </div>
    </footer>
  )
}
