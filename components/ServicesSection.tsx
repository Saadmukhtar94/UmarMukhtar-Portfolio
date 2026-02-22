'use client'

import { services } from '@/lib/data'

/* ── Individual service card ────────────────────────────────────────── */
function ServiceCard({ service }: { service: typeof services[number] }) {
  return (
    <div
      className="glass-card"
      style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      {/* Icon box */}
      <div style={{
        width:          '48px',
        height:         '48px',
        borderRadius:   '12px',
        background:     '#0d1628',
        border:         '1px solid #1a2540',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontSize:       '1.4rem',
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:   "'Syne', sans-serif",
        fontWeight:   700,
        fontSize:     '1rem',
        color:        '#e8f0ff',
        letterSpacing:'-0.01em',
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '0.85rem', color: '#6b7a99', lineHeight: 1.75 }}>
        {service.description}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: '#1a2540' }} />

      {/* Feature arrow list */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {service.features.map(feature => (
          <li key={feature} className="feature-item">
            {/* Right-arrow in cyan */}
            <span style={{ color: '#00e5ff', fontWeight: 700, fontSize: '0.8rem' }}>→</span>
            <span style={{ fontSize: '0.8rem', color: '#6b7a99' }}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── Main section ───────────────────────────────────────────────────── */
export default function ServicesSection() {
  /* Mirror the reference: first two cards are wider (top row),
     last three are equal-width (bottom row). */
  const topRow    = services.slice(0, 2)
  const bottomRow = services.slice(2)

  return (
    <section
      id="services"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '6rem 2rem',
        background:     '#04070f',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

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
            Services I Provide
          </h2>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* ── Top row: 2 cards ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '1rem',
          marginBottom:        '1rem',
        }}>
          {topRow.map(s => <ServiceCard key={s.title} service={s} />)}
        </div>

        {/* ── Bottom row: 3 cards ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap:                 '1rem',
        }}>
          {bottomRow.map(s => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>
  )
}
