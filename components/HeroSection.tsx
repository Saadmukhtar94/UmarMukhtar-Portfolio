'use client'

import { relative } from 'path'
import { useEffect, useState } from 'react'

const ROLES = [
  'Unity Game Developer',
  'Mobile Game Engineer',
  'Hyper-Casual Specialist',
  'C# Systems Architect',
]

export default function HeroSection() {
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [deleting,   setDeleting]   = useState(false)
  const [charIndex,  setCharIndex]  = useState(0)

  // Typewriter effect cycling through ROLES
  useEffect(() => {
    const current = ROLES[roleIndex]
    const delay   = deleting ? 45 : 90

    const timer = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        setDisplayed(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          // Pause then start deleting
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        // Deleting
        setDisplayed(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setCharIndex(0)
          setRoleIndex(r => (r + 1) % ROLES.length)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIndex, deleting, roleIndex])

  return (
    <section
      id="hero"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        textAlign:      'center',
        padding:        '0 1.5rem',
        position:       'relative',
        overflow:       'hidden',
        background:     '#04070f',
      }}
    >
      {/* ── Ambient radial glow blobs ── */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: '420px', height: '420px',
        background: 'radial-gradient(circle, #4488ff12 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '8%',
        width: '360px', height: '360px',
        background: 'radial-gradient(circle, #00e5ff0e 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '45%', left: '45%',
        width: '280px', height: '280px',
        background: 'radial-gradient(circle, #7c3aed08 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* ── Dot grid texture ── */}
      <div className="dot-grid" style={{
        position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none',
      }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>

        {/* Status badge */}
        <div style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '8px',
          padding:        '6px 16px',
          border:         '1px solid #1a2540',
          borderRadius:   '999px',
          background:     '#0b1120',
          marginBottom:   '2rem',
          fontSize:       '0.78rem',
          color:          '#6b7a99',
          letterSpacing:  '0.06em',
          textTransform:  'uppercase',
          position:'relative',
          top:'25px',
        }}>
          <span style={{
            width: '7px', height: '7px',
            borderRadius: '50%',
            background: '#00e5ff',
            boxShadow: '0 0 8px #00e5ff',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          Available for freelance projects
        </div>

        {/* Main name heading */}
        <h1 style={{
          fontFamily:   "'Syne', sans-serif",
          fontWeight:   500,
          fontSize:     'clamp(2.6rem, 7vw, 5rem)',
          lineHeight:   1.1,
          marginBottom: '1rem',
          letterSpacing:'-0.03em',
          color:        '#e8f0ff',
        }}>
          Hi, I&apos;m{' '}
          <span style={{
            background:           'linear-gradient(90deg, #4488ff 0%, #00e5ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:  'transparent',
          }}>
            Umar Mukhtar
          </span>
        </h1>

        {/* Typewriter role */}
        <p style={{
          fontFamily:   "'Syne', sans-serif",
          fontSize:     'clamp(1.1rem, 3vw, 1.6rem)',
          fontWeight:   600,
          color:        '#00e5ff',
          marginBottom: '1.5rem',
          minHeight:    '2.2rem',
          letterSpacing:'-0.01em',
        }}>
          {displayed}
          <span style={{ animation: 'blink 1s step-end infinite', color: '#4488ff' }}>|</span>
        </p>

        {/* Sub-description */}
        <p style={{
          fontSize:     'clamp(0.95rem, 2vw, 1.1rem)',
          color:        '#6b7a99',
          lineHeight:   1.8,
          maxWidth:     '580px',
          margin:       '0 auto 2.5rem',
        }}>
          Unity engineer with 7+ years building hyper-casual, idle and puzzle games
          for top publishers like <span style={{ color: '#c8d4f0' }}>Voodoo</span> and{' '}
          <span style={{ color: '#c8d4f0' }}>Supersonic</span>. Shipped 14+ titles to the App Store and Google Play.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#portfolio"
            style={{
              padding:       '13px 32px',
              borderRadius:  '10px',
              background:    'linear-gradient(135deg, #4488ff, #00e5ff)',
              color:         '#04070f',
              fontWeight:    700,
              fontSize:      '0.9rem',
              textDecoration:'none',
              letterSpacing: '0.03em',
              transition:    'opacity 0.2s, transform 0.2s',
              display:       'inline-block',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.opacity   = '0.88'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.opacity   = '1'
              ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
            }}
          >
            View My Work
          </a>

          <a
            href="#contact"
            style={{
              padding:       '13px 32px',
              borderRadius:  '10px',
              border:        '1px solid #1a2540',
              background:    'transparent',
              color:         '#c8d4f0',
              fontWeight:    600,
              fontSize:      '0.9rem',
              textDecoration:'none',
              letterSpacing: '0.03em',
              transition:    'border-color 0.2s, color 0.2s, transform 0.2s',
              display:       'inline-block',
            }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#00e5ff55'
              ;(e.currentTarget as HTMLAnchorElement).style.color       = '#00e5ff'
              ;(e.currentTarget as HTMLAnchorElement).style.transform   = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#1a2540'
              ;(e.currentTarget as HTMLAnchorElement).style.color       = '#c8d4f0'
              ;(e.currentTarget as HTMLAnchorElement).style.transform   = 'translateY(0)'
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Quick stats row */}
        <div style={{
          display:       'flex',
          gap:           '2.5rem',
          justifyContent:'center',
          marginTop:     '4rem',
          flexWrap:      'wrap',
        }}>
          {[
            { value: '4+',  label: 'Years Experience' },
            { value: '14+', label: 'Games Shipped'    },
            { value: '3',   label: 'Top Publishers'   },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily:   "'Syne', sans-serif",
                fontWeight:   800,
                fontSize:     '2rem',
                background:   'linear-gradient(90deg, #4488ff, #00e5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight:   1,
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7a99', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform:'translateX(-50%)',
        display:  'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      }}>
        <span style={{ fontSize: '0.65rem', color: '#6b7a99', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(180deg, #4488ff, transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 6px #00e5ff; }
          50%      { box-shadow: 0 0 14px #00e5ff, 0 0 28px #00e5ff55; }
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
