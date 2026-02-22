'use client'

export default function Footer() {
  return (
    <footer style={{
      background:    '#04070f',
      borderTop:     '1px solid #1a2540',
      padding:       '2rem',
      display:       'flex',
      alignItems:    'center',
      justifyContent:'space-between',
      flexWrap:      'wrap',
      gap:           '1rem',
    }}>
      {/* Brand */}
      <span style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight:  700,
        fontSize:   '0.9rem',
        background:  'linear-gradient(90deg,#4488ff,#00e5ff)',
        WebkitBackgroundClip:'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Umar Mukhtar<span style={{ WebkitTextFillColor:'#6b7a99', fontWeight:400 }}>.online</span>
      </span>

      {/* Copyright */}
      <p style={{ fontSize: '0.78rem', color: '#6b7a99', textAlign: 'center', flex: 1 }}>
        © {new Date().getFullYear()} Umar Mukhtar. Built with Next.js 
      </p>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          padding:       '7px 14px',
          borderRadius:  '8px',
          border:        '1px solid #60e4fb',
          background:    'transparent',
          color:         '#60e4fb',
          fontSize:      '0.78rem',
          cursor:        'pointer',
          transition:    'color 0.2s, border-color 0.2s',
          fontFamily:    "'DM Sans', sans-serif",
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLButtonElement).style.color       = '#00e5ff'
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#00e5ff55'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLButtonElement).style.color       = '#6b7a99'
          ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#1a2540'
        }}
      >
        ↑ Back to top
      </button>
    </footer>
  )
}
