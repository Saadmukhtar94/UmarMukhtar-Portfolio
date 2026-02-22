'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection,setActiveSection]= useState('')

  // Change navbar background once user scrolls past the hero
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Highlight the active nav link based on scroll position
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        zIndex:          50,
        padding:         '0 2rem',
        height:          '64px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        transition:      'background 0.3s ease, border-color 0.3s ease',
        background:      scrolled ? 'rgba(4,7,15,0.92)' : 'transparent',
        backdropFilter:  scrolled ? 'blur(12px)' : 'none',
        borderBottom:    scrolled ? '1px solid #1a2540' : '1px solid transparent',
      }}
    >
      {/* ── Logo ── */}
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight:  800,
          fontSize:   '1.25rem',
          background:  'linear-gradient(90deg,#4488ff,#00e5ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor:  'transparent',
          letterSpacing: '-0.02em',
        }}>
          Umar Mukhtar<span style={{ WebkitTextFillColor: '#c8d4f0', fontWeight: 400 }}>.online</span>
        </span>
      </a>

      {/* ── Desktop nav links ── */}
      <ul style={{
        display:    'flex',
        gap:        '2rem',
        listStyle:  'none',
        margin:     0,
        padding:    0,
      }}
        className="hidden-mobile"
      >
        {navLinks.map(link => {
          const id      = link.href.replace('#', '')
          const isActive = activeSection === id
          return (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  textDecoration: 'none',
                  fontSize:       '0.875rem',
                  fontWeight:     isActive ? 600 : 400,
                  color:          isActive ? '#00e5ff' : '#6b7a99',
                  transition:     'color 0.2s',
                  letterSpacing:  '0.02em',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c8d4f0')}
                onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#00e5ff' : '#6b7a99')}
              >
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>

      {/* ── CTA button ── */}
      <a
        href="#contact"
        className="hidden-mobile"
        style={{
          padding:       '7px 20px',
          borderRadius:  '8px',
          border:        '1px solid #00e5ff55',
          background:    '#00e5ff0d',
          color:         '#00e5ff',
          fontSize:      '0.8rem',
          fontWeight:    600,
          textDecoration:'none',
          transition:    'background 0.2s, border-color 0.2s',
          letterSpacing: '0.04em',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLAnchorElement).style.background     = '#00e5ff22'
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor    = '#00e5ff'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLAnchorElement).style.background     = '#00e5ff0d'
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor    = '#00e5ff55'
        }}
      >
        Hire Me
      </a>

      {/* ── Mobile hamburger ── */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        style={{
          background: 'none',
          border:     'none',
          cursor:     'pointer',
          display:    'flex',
          flexDirection: 'column',
          gap:        '5px',
          padding:    '4px',
        }}
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display:    'block',
            width:      '22px',
            height:     '2px',
            background: '#c8d4f0',
            borderRadius:'2px',
            transition: 'transform 0.3s, opacity 0.3s',
            transform:   menuOpen
              ? i === 0 ? 'translateY(7px) rotate(45deg)'
              : i === 2 ? 'translateY(-7px) rotate(-45deg)'
              : 'scaleX(0)'
              : 'none',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div style={{
          position:   'absolute',
          top:        '64px',
          left:       0,
          right:      0,
          background: 'rgba(4,7,15,0.97)',
          borderBottom:'1px solid #1a2540',
          padding:    '1.5rem 2rem',
          display:    'flex',
          flexDirection:'column',
          gap:        '1.2rem',
          backdropFilter:'blur(12px)',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration:'none',
                color:         '#c8d4f0',
                fontSize:      '1rem',
                fontWeight:    500,
                fontFamily:    "'Syne',sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Inline responsive overrides — keeps the file self-contained */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex  !important; }
        }
        @media (min-width: 769px) {
          .show-mobile   { display: none  !important; }
          .hidden-mobile { display: flex  !important; }
        }
      `}</style>
    </nav>
  )
}
