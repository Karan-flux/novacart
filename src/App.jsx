import { useState } from 'react'
import { CartProvider } from './CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import SearchOverlay from './components/SearchOverlay'
import CartDrawer from './components/CartDrawer'
import NovaAI from './components/NovaAI'
import AICommerceSection from './components/AICommerceSection'
import OurStory from './components/OurStory'
import WorkflowSection from './components/WorkflowSection'
import Footer from './components/Footer'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [novaOpen, setNovaOpen] = useState(false)

  return (
    <CartProvider>
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
      />
      <main>
        <Hero onOpenNova={() => setNovaOpen(true)} />
        <ProductGrid />
        <AICommerceSection onOpenNova={() => setNovaOpen(true)} />
        <OurStory />
        <WorkflowSection />
      </main>
      <Footer />

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
      {novaOpen && <NovaAI onClose={() => setNovaOpen(false)} />}
    </CartProvider>
  )
}
