import { useEffect, useMemo, useRef, useState } from 'react'
import { products } from '../data/products'
import { useCart } from '../CartContext'

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      <div className="overlay-backdrop" onClick={onClose} />
      <div className="search-panel" role="dialog" aria-label="Search products">
        <div className="search-input-row">
          <SearchIcon />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="drawer-close" onClick={onClose} aria-label="Close search">×</button>
        </div>
        <div className="search-results">
          {results.length === 0 ? (
            <div className="search-empty">No products match "{query}".</div>
          ) : (
            results.map((p) => (
              <div className="search-result-row" key={p.id}>
                <div>
                  <div className="name">{p.name}</div>
                  <div className="cat">{p.category} · ₹{p.price.toLocaleString('en-IN')}</div>
                </div>
                <button
                  className="btn-ghost"
                  style={{ fontWeight: 500 }}
                  onClick={() => {
                    addItem(p)
                    onClose()
                  }}
                >
                  Add
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
