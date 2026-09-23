import { products } from './products'

const find = (id) => products.find((p) => p.id === id)

const fmt = (n) => `₹${n.toLocaleString('en-IN')}`

// Ordered list of intent matchers. First match wins.
const rules = [
  {
    test: /travel|trip|carry|pack|luggage/i,
    reply: () =>
      `For travel, I'd recommend the ${find('p2').name} at ${fmt(
        find('p2').price
      )}. It's built as a 22L companion for short trips and keeps everyday organization simple. The ${
        find('p1').name
      } pairs well with it if you also want your wallet and keys in one place.`,
  },
  {
    test: /under\s*₹?\s*3,?000|budget|cheap|affordable|less than 3000/i,
    reply: () => {
      const affordable = products.filter((p) => p.price < 3000)
      const list = affordable
        .map((p) => `the ${p.name} at ${fmt(p.price)}`)
        .join(' or ')
      return `Under ₹3,000, I'd suggest ${list}. Both are solid entry points into the collection.`
    },
  },
  {
    test: /compare/i,
    reply: () => {
      const a = find('p2')
      const b = find('p1')
      return `Comparing the two carry pieces: the ${a.name} (${fmt(
        a.price
      )}) is a single 22L bag for short trips, while the ${b.name} (${fmt(
        b.price
      )}) is a three-piece set for wallet, pouch, and keys. Choose the pack if you're moving, the set if you're organizing daily.`
    },
  },
  {
    test: /desk|light|home|mug|office/i,
    reply: () =>
      `For a desk setup, the ${find('p3').name} (${fmt(
        find('p3').price
      )}) gives you adjustable task lighting, and the ${find('p4').name} (${fmt(
        find('p4').price
      )}) is a nice everyday mug to go with it.`,
  },
  {
    test: /headset|headphone|audio|music|call/i,
    reply: () =>
      `The ${find('p5').name} at ${fmt(
        find('p5').price
      )} is tuned for long work sessions rather than heavy bass, with a 30-hour battery — a good fit for calls and focus time.`,
  },
  {
    test: /power|battery|charge|charger/i,
    reply: () =>
      `The ${find('p6').name} at ${fmt(
        find('p6').price
      )} packs 10,000mAh into a pocket-sized shell — enough for a laptop and phone through a travel day.`,
  },
  {
    test: /order|checkout|cart|shipping|return|refund/i,
    reply: () =>
      `This is a concept demo, so there's no live order system — but in a full build, I'd be able to look up order status, shipping estimates, and return windows right here in chat.`,
  },
  {
    test: /hello|hi there|^hi$|hey/i,
    reply: () =>
      `Hi! I'm Nova, a demo shopping assistant. Ask me what to buy for a task or a budget, and I'll point you to something from the collection.`,
  },
]

const fallback = () =>
  `I'm a demo assistant with a small, fixed set of responses, so I don't have a specific answer for that. Try asking what to buy for travel, for the desk, or under a budget.`

export function getNovaReply(message) {
  const rule = rules.find((r) => r.test.test(message))
  return (rule ? rule.reply : fallback)()
}

export const examplePrompts = [
  'What should I buy for travel?',
  'Recommend something under ₹3,000',
  'Compare the travel products',
]
