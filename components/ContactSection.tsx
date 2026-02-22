'use client'

import { useState } from 'react'

/* ── Small info card used in the right column ──────────────────────── */
function InfoCard({
  icon, label, value, href,
}: {
  icon: string; label: string; value: string; href?: string
}) {
  return (
    <div className="glass-card" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
      <div style={{
        width:          '38px',
        height:         '38px',
        borderRadius:   '10px',
        background:     '#0d1628',
        border:         '1px solid #1a2540',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontSize:       '1rem',
        flexShrink:     0,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: '0.7rem', color: '#6b7a99', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '2px' }}>
          {label}
        </p>
        {href ? (
          <a href={href} style={{ fontSize: '0.85rem', color: '#00e5ff', textDecoration: 'none', fontWeight: 500 }}>{value}</a>
        ) : (
          <p style={{ fontSize: '0.85rem', color: '#c8d4f0', fontWeight: 500 }}>{value}</p>
        )}
      </div>
    </div>
  )
}

/* ── Input / textarea shared styles ────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width:           '100%',
  padding:         '12px 14px',
  background:      '#0b1120',
  border:          '1px solid #1a2540',
  borderRadius:    '10px',
  color:           '#c8d4f0',
  fontSize:        '0.875rem',
  outline:         'none',
  fontFamily:      "'DM Sans', sans-serif",
  boxSizing:       'border-box',
  transition:      'border-color 0.2s',
}

/* ── Main section ───────────────────────────────────────────────────── */
export default function ContactSection() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production wire up to an API route / email service
    console.log('Contact form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section
      id="contact"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '6rem 2rem',
        background:     '#04070f',
        position:       'relative',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, #4488ff0a 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* ── Section heading ── */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily:   "'Syne', sans-serif",
            fontWeight:   800,
            fontSize:     'clamp(1.8rem, 4vw, 2.8rem)',
            background:   'linear-gradient(90deg, #4488ff 0%, #00e5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing:'-0.02em',
          }}>
            Get In Touch
          </h2>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
          <p style={{ fontSize: '0.95rem', color: '#6b7a99', marginTop: '0.5rem' }}>
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '2.5rem',
          alignItems:          'start',
        }}>

          {/* ── Left: form ── */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{
              fontFamily:   "'Syne', sans-serif",
              fontWeight:   700,
              fontSize:     '1.1rem',
              color:        '#e8f0ff',
              marginBottom: '1.5rem',
            }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {(['name', 'email'] as const).map(field => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#6b7a99', marginBottom: '6px', textTransform: 'capitalize', letterSpacing: '0.05em' }}>
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                      style={{
                        ...inputStyle,
                        borderColor: focused === field ? '#00e5ff55' : '#1a2540',
                      }}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#6b7a99', marginBottom: '6px', letterSpacing: '0.05em' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  style={{
                    ...inputStyle,
                    borderColor: focused === 'subject' ? '#00e5ff55' : '#1a2540',
                  }}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#6b7a99', marginBottom: '6px', letterSpacing: '0.05em' }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{
                    ...inputStyle,
                    resize:      'vertical',
                    borderColor: focused === 'message' ? '#00e5ff55' : '#1a2540',
                  }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  padding:       '13px',
                  borderRadius:  '10px',
                  border:        'none',
                  background:    'linear-gradient(135deg, #4488ff, #00e5ff)',
                  color:         '#04070f',
                  fontWeight:    700,
                  fontSize:      '0.9rem',
                  cursor:        'pointer',
                  letterSpacing: '0.04em',
                  transition:    'opacity 0.2s, transform 0.2s',
                  fontFamily:    "'DM Sans', sans-serif",
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.opacity   = '0.88'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLButtonElement).style.opacity   = '1'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                }}
              >
                {sent ? '✅ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* ── Right: contact info + social links ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <h3 style={{
                fontFamily:   "'Syne', sans-serif",
                fontWeight:   700,
                fontSize:     '1.1rem',
                color:        '#e8f0ff',
                marginBottom: '0.5rem',
              }}>
                Contact Information
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#6b7a99', lineHeight: 1.7 }}>
                Open to freelance projects, full-time opportunities, and technical consultations.
              </p>
            </div>

            <InfoCard icon="📧" label="Email"    value="umar.mukhtar90@gmail.com"      href="mailto:umar.mukhtar90@gmail.com" />
            <InfoCard icon="📍" label="Location" value="Lahore, Pakistan"                                             />
            <InfoCard icon="💼" label="Status"   value="Available for projects"                                       />

            {/* Social links */}
            <div style={{ marginTop: '0.5rem' }}>
              <p style={{ fontSize: '0.75rem', color: '#6b7a99', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.75rem' }}>
                Social
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { label: 'GitHub',   icon: '🐙', href: '#' },
                  { label: 'LinkedIn', icon: '💼', href: '#' },
                  { label: 'Twitter',  icon: '🐦', href: '#' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    style={{
                      width:         '42px',
                      height:        '42px',
                      borderRadius:  '10px',
                      border:        '1px solid #1a2540',
                      background:    '#0b1120',
                      display:       'flex',
                      alignItems:    'center',
                      justifyContent:'center',
                      fontSize:      '1.1rem',
                      textDecoration:'none',
                      transition:    'border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => {
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#00e5ff55'
                      ;(e.currentTarget as HTMLAnchorElement).style.background  = '#00e5ff0d'
                    }}
                    onMouseLeave={e => {
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#1a2540'
                      ;(e.currentTarget as HTMLAnchorElement).style.background  = '#0b1120'
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
