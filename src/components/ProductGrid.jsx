import { useMemo, useState } from 'react'
import { products, categories } from '../data/products'
import { useCart } from '../CartContext'

export default function ProductGrid() {
  const [activeCat, setActiveCat] = useState('All')
  const { addItem } = useCart()
  const [justAdded, setJustAdded] = useState(null)

  const visible = useMemo(
    () => (activeCat === 'All' ? products : products.filter((p) => p.category === activeCat)),
    [activeCat]
  )

  const handleAdd = (product) => {
    addItem(product)
    setJustAdded(product.id)
    setTimeout(() => setJustAdded((id) => (id === product.id ? null : id)), 1400)
  }

  return (
    <section className="section" id="shop">
      <div className="container">
        <div className="section-head">
          <h2>Made for modern life.</h2>
          <p>Six pieces, three categories, no filler. Everything shown here ships in the demo cart.</p>
        </div>

        <div className="filters" role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCat === cat}
              className={`filter-pill ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="empty-state">No products in this category yet.</div>
        ) : (
          <div className="product-grid">
            {visible.map((p) => (
              <article className="product-card" key={p.id}>
                <div className="product-visual">
                  <div className="swatch swatch-a" style={{ background: p.palette[0] }} />
                  <div className="swatch swatch-b" style={{ background: p.palette[1] }} />
                  <span className="cat-tag">{p.category}</span>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{p.name}</h3>
                    <p className="product-tagline">{p.tagline}</p>
                  </div>
                  <span className="product-price">₹{p.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="product-actions">
                  <button
                    className={`add-btn ${justAdded === p.id ? 'added' : ''}`}
                    onClick={() => handleAdd(p)}
                  >
                    {justAdded === p.id ? 'Added to bag ✓' : 'Add to bag'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
