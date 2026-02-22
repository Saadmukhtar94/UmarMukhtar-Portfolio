'use client'

import { experiences } from '@/lib/data'

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>

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
            Professional Experience
          </h2>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* ── Timeline ── */}
        <div style={{ position: 'relative' }}>

          {/* Vertical connector line running through all cards */}
          <div style={{
            position:   'absolute',
            left:       '28px',         /* centre of the 56px icon column */
            top:        '28px',
            bottom:     '28px',
            width:      '2px',
            background: 'linear-gradient(180deg, #4488ff55 0%, #00e5ff33 100%)',
            borderRadius: '2px',
          }} />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                display:      'flex',
                gap:          '1.5rem',
                marginBottom: idx < experiences.length - 1 ? '2.5rem' : 0,
                position:     'relative',
              }}
            >
              {/* ── Purple node icon ── */}
              <div style={{ flexShrink: 0, width: '56px', display: 'flex', justifyContent: 'center', paddingTop: '2px' }}>
                <div style={{
                  width:          '46px',
                  height:         '46px',
                  borderRadius:   '50%',
                  background:     '#7c3aed',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       '1.2rem',
                  zIndex:         1,
                  position:       'relative',
                  boxShadow:      '0 0 20px #7c3aed44',
                  flexShrink:     0,
                }}>
                  🎮
                </div>
              </div>

              {/* ── Experience card ── */}
              <div
                className="glass-card"
                style={{ flex: 1, padding: '1.5rem' }}
              >
                {/* Header row: title + dates / location */}
                <div style={{
                  display:         'flex',
                  justifyContent:  'space-between',
                  alignItems:      'flex-start',
                  flexWrap:        'wrap',
                  gap:             '0.5rem',
                  marginBottom:    '0.25rem',
                }}>
                  <h3 style={{
                    fontFamily:   "'Syne', sans-serif",
                    fontWeight:   700,
                    fontSize:     '1rem',
                    color:        '#e8f0ff',
                    letterSpacing:'-0.01em',
                  }}>
                    {exp.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                    <span style={{ fontSize: '0.78rem', color: '#6b7a99', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      📅 {exp.period}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#6b7a99', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      📍 {exp.location}
                    </span>
                  </div>
                </div>

                {/* Company name in cyan/teal */}
                <p style={{
                  fontSize:     '0.875rem',
                  fontWeight:   600,
                  color:        '#00e5ff',
                  marginBottom: '1rem',
                }}>
                  {exp.company}
                </p>

                {/* Divider */}
                <div style={{
                  height:       '1px',
                  background:   '#1a2540',
                  marginBottom: '1rem',
                }} />

                {/* Bullet points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      {/* Cyan dot */}
                      <span style={{
                        width:      '6px',
                        height:     '6px',
                        borderRadius:'50%',
                        background: '#00e5ff',
                        marginTop:  '7px',
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '0.875rem', color: '#6b7a99', lineHeight: 1.7 }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
