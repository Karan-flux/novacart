import { useState } from 'react'
import { useCart } from '../CartContext'

export default function Navbar({ onOpenSearch, onOpenCart }) {
  const { count } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#shop', label: 'Shop' },
    { href: '#story', label: 'Our Story' },
    { href: '#ai-commerce', label: 'AI Commerce' },
  ]

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo">NovaCart</a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-right">
          <button className="icon-btn" aria-label="Search" onClick={onOpenSearch}>
            <SearchIcon />
          </button>
          <button className="icon-btn" aria-label={`Bag, ${count} items`} onClick={onOpenCart}>
            <BagIcon />
            {count > 0 && <span className="bag-count">{count}</span>}
          </button>
          <button
            className="icon-btn nav-mobile-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container mobile-menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function BagIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
