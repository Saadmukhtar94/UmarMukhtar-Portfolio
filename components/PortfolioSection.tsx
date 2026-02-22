'use client'

import { useState } from 'react'
import { portfolioItems } from '@/lib/data'

/* ── Single portfolio card ──────────────────────────────────────────── */
function PortfolioCard({ item }: { item: typeof portfolioItems[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       'flex',
        flexDirection: 'column',
        overflow:      'hidden',
        transition:    'transform 0.25s ease, box-shadow 0.25s ease',
        transform:     hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* ── Thumbnail / image area ── */}
      <div style={{
        width:      '100%',
        height:     '160px',
        background: hovered
          ? 'linear-gradient(135deg, #0d1e3a 0%, #091530 100%)'
          : 'linear-gradient(135deg, #0b1628 0%, #060d1e 100%)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        borderBottom:   '1px solid #1a2540',
        transition:     'background 0.25s',
        position:       'relative',
        overflow:       'hidden',
        flexShrink:     0,
      }}>
        {/* Stylised game icon placeholder */}
        <span style={{ fontSize: '3rem', opacity: 0.4 }}>🎮</span>
        {/* Hover overlay glow */}
        {hovered && (
          <div style={{
            position:   'absolute',
            inset:      0,
            background: 'radial-gradient(circle at 50% 60%, #00e5ff08 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
        )}
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>

        {/* Title */}
        <h3 style={{
          fontFamily:   "'Syne', sans-serif",
          fontWeight:   700,
          fontSize:     '0.95rem',
          color:        '#e8f0ff',
          letterSpacing:'-0.01em',
          lineHeight:    1.3,
        }}>
          {item.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.8rem', color: '#6b7a99', lineHeight: 1.7, flex: 1 }}>
          {item.description}
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: '#1a2540' }} />

        {/* Tech badges section */}
        <div>
          <p style={{
            fontSize:     '0.72rem',
            fontWeight:   700,
            color:        '#c8d4f0',
            letterSpacing:'0.07em',
            textTransform:'uppercase',
            marginBottom: '0.5rem',
          }}>
            Technologies Used
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {item.techs.map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        {/* Store button */}
        <a
          href={item.storeUrl}
          style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '6px',
            padding:       '7px 16px',
            borderRadius:  '8px',
            border:        '1px solid #1a2540',
            background:    '#0b1120',
            color:         '#c8d4f0',
            fontSize:      '0.78rem',
            fontWeight:    600,
            textDecoration:'none',
            width:         'fit-content',
            transition:    'border-color 0.2s, color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#00e5ff55'
            ;(e.currentTarget as HTMLAnchorElement).style.color       = '#00e5ff'
            ;(e.currentTarget as HTMLAnchorElement).style.background  = '#00e5ff0d'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#1a2540'
            ;(e.currentTarget as HTMLAnchorElement).style.color       = '#c8d4f0'
            ;(e.currentTarget as HTMLAnchorElement).style.background  = '#0b1120'
          }}
        >
          <span>📱</span> Store
        </a>
      </div>
    </div>
  )
}

/* ── Main section ───────────────────────────────────────────────────── */
export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '6rem 2rem',
        background:     '#04070f',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

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
            Portfolio
          </h2>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* ── 3-column card grid ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap:                 '1rem',
        }}>
          {portfolioItems.map(item => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
