'use client'

export default function AboutSection() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* ── Two-column layout ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '3rem',
          alignItems:          'center',
        }}>

          {/* ── Left: avatar + decorative border ── */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '280px', height: '280px' }}>
              {/* Outer glow ring */}
              <div style={{
                position:     'absolute',
                inset:        '-6px',
                borderRadius: '50%',
                background:   'linear-gradient(135deg, #4488ff44, #00e5ff44)',
                zIndex:       0,
              }} />
              {/* Avatar placeholder */}
              <div style={{
                position:     'relative',
                width:        '280px',
                height:       '280px',
                borderRadius: '50%',
                background:   'linear-gradient(135deg, #0d1628 0%, #091020 100%)',
                border:       '2px solid #1a2540',
                display:      'flex',
                flexDirection:'column',
                alignItems:   'center',
                justifyContent:'center',
                zIndex:       1,
                overflow:     'hidden',
              }}>
                {/* Big stylised initial */}
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight:  800,
                  fontSize:   '6rem',
                  background:  'linear-gradient(135deg,#4488ff,#00e5ff)',
                  WebkitBackgroundClip:'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight:  1,
                  userSelect: 'none',
                }}>A</span>
                <span style={{ fontSize: '0.7rem', color: '#6b7a99', letterSpacing: '0.1em', marginTop: '4px' }}>
                  GAME DEV
                </span>
              </div>

              {/* Decorative floating badge */}
              <div style={{
                position:   'absolute',
                bottom:     '-12px',
                right:      '-12px',
                background: '#0b1120',
                border:     '1px solid #1a2540',
                borderRadius:'12px',
                padding:    '8px 14px',
                zIndex:     2,
                fontSize:   '0.75rem',
                color:      '#c8d4f0',
                fontWeight:  600,
                whiteSpace: 'nowrap',
              }}>
                <span style={{ color: '#00e5ff' }}>✦</span> Unity Expert
              </div>
            </div>
          </div>

          {/* ── Right: bio text ── */}
          <div>
            <h3 style={{
              fontFamily:   "'Syne', sans-serif",
              fontWeight:   700,
              fontSize:     '1.5rem',
              color:        '#e8f0ff',
              marginBottom: '1rem',
              letterSpacing:'-0.01em',
            }}>
              Crafting Engaging Mobile Game Experiences
            </h3>

            <p style={{ fontSize: '0.95rem', color: '#6b7a99', lineHeight: 1.85, marginBottom: '1rem' }}>
              I&apos;m a passionate Unity game developer based in Lahore, Pakistan, with over 4 years of 
              experience building and shipping mobile games across hyper-casual, idle, puzzle, and simulation genres.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#6b7a99', lineHeight: 1.85, marginBottom: '1rem' }}>
              I&apos;ve worked with industry-leading publishers including <span style={{ color:'#c8d4f0' }}>Voodoo</span> and{' '}
              <span style={{ color:'#c8d4f0' }}>Supersonic</span>, shipping 14+ titles to the App Store and Google Play. 
              My core strength lies in writing clean, modular C# systems — from gameplay loops and AI 
              to SDK integrations and build automation.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#6b7a99', lineHeight: 1.85 }}>
              Whether working solo end-to-end or leading a small team, I bring both technical depth and 
              a product mindset to every project — balancing performance, player feel, and publisher metrics.
            </p>

            {/* Skill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.5rem' }}>
              {['Unity', 'C#', 'Android', 'iOS', 'WebGL', 'DoTween', 'Scriptable Objects', 'Git'].map(tag => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom stat cards ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap:                 '1rem',
          marginTop:           '3.5rem',
        }}>
          {[
            { value: '4+',  label: 'Years of Experience', icon: '⏱' },
            { value: '14+', label: 'Games Published',     icon: '🎮' },
            { value: '3',   label: 'Major Publishers',    icon: '🏢' },
            { value: '3',   label: 'Platforms Covered',   icon: '📱' },
          ].map(card => (
            <div key={card.label} className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{card.icon}</div>
              <div style={{
                fontFamily:   "'Syne', sans-serif",
                fontWeight:   800,
                fontSize:     '1.8rem',
                background:   'linear-gradient(90deg, #4488ff, #00e5ff)',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor: 'transparent',
              }}>{card.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7a99', marginTop: '4px' }}>{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
