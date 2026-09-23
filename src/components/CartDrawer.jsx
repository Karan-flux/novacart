import { useState } from 'react'
import { useCart } from '../CartContext'
import { products } from '../data/products'

export default function CartDrawer({ onClose }) {
  const { items, removeItem, changeQty, total } = useCart()
  const [checkedOut, setCheckedOut] = useState(false)

  const swatchFor = (id) => products.find((p) => p.id === id)?.palette ?? ['#ccc', '#999']

  return (
    <>
      <div className="overlay-backdrop" onClick={onClose} />
      <div className="drawer" role="dialog" aria-label="Shopping bag">
        <div className="drawer-header">
          <h3>Your bag</h3>
          <button className="drawer-close" onClick={onClose} aria-label="Close bag">×</button>
        </div>

        <div className="drawer-body">
          {items.length === 0 ? (
            <div className="empty-state">Your bag is empty. Add something from the collection.</div>
          ) : (
            items.map((item) => {
              const [a, b] = swatchFor(item.id)
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-swatch">
                    <div style={{ position: 'absolute', inset: 0, background: a }} />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: b,
                        clipPath: 'polygon(0 62%, 100% 0, 100% 100%, 0 100%)',
                      }}
                    />
                  </div>
                  <div className="cart-item-info">
                    <div className="row1">
                      <span style={{ fontWeight: 500 }}>{item.name}</span>
                      <span>₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="qty-controls">
                      <button onClick={() => changeQty(item.id, -1)} aria-label="Decrease quantity">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => changeQty(item.id, 1)} aria-label="Increase quantity">+</button>
                    </div>
                    <button className="remove-link" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer-footer">
            <div className="cart-total-row">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => setCheckedOut(true)}
            >
              Proceed to Checkout
            </button>
            {checkedOut && (
              <p className="checkout-note">
                Demo checkout — no real payment is processed. In a live build, this step
                would hand off to a payment provider.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  )
}
