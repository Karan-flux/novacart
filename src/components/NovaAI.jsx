import { useEffect, useRef, useState } from 'react'
import { getNovaReply, examplePrompts } from '../data/novaResponses'

const WELCOME = {
  role: 'ai',
  text: "Hi, I'm Nova — a demo shopping assistant. Try one of the prompts below, or ask your own.",
}

export default function NovaAI({ onClose }) {
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const send = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const reply = getNovaReply(trimmed)
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'ai', text: reply },
    ])
    setInput('')
  }

  return (
    <>
      <div className="overlay-backdrop" onClick={onClose} />
      <div className="drawer nova-panel" role="dialog" aria-label="Nova AI shopping assistant">
        <div className="drawer-header">
          <div>
            <h3>Nova AI</h3>
            <span className="nova-badge">Demo assistant · predefined responses</span>
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close Nova AI">×</button>
        </div>

        <div className="drawer-body" ref={bodyRef}>
          <div className="nova-messages">
            {messages.map((m, i) => (
              <div className={`nova-msg ${m.role}`} key={i}>
                <span className="label">{m.role === 'ai' ? 'Nova AI' : 'You'}</span>
                {m.text}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="nova-prompts">
                {examplePrompts.map((p) => (
                  <button key={p} className="nova-prompt-btn" onClick={() => send(p)}>
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <form
          className="nova-input-row"
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
        >
          <input
            type="text"
            placeholder="Ask Nova something…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="nova-send">Send</button>
        </form>
      </div>
    </>
  )
}
