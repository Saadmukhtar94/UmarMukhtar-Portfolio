'use client'

import { skillCategories } from '@/lib/data'

/* ── Reusable skill check-item ─────────────────────────────────────── */
function SkillItem({ label }: { label: string }) {
  return (
    <div className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
      {/* Cyan circle-check icon */}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="8" cy="8" r="7.5" stroke="#00e5ff" strokeWidth="1" fill="none" />
        <path d="M4.5 8.5l2.2 2.2 4.8-5" stroke="#00e5ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span style={{ fontSize: '0.82rem', color: '#c8d4f0' }}>{label}</span>
    </div>
  )
}

/* ── Skill category card ────────────────────────────────────────────── */
function SkillCard({
  icon, title, skills, wide = false,
}: {
  icon: string; title: string; skills: string[]; wide?: boolean
}) {
  return (
    <div
      className="glass-card"
      style={{
        padding:    '1.5rem',
        gridColumn: wide ? 'span 2' : 'span 1',
      }}
    >
      {/* Card header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div style={{
          width:          '38px',
          height:         '38px',
          borderRadius:   '10px',
          background:     '#0d1628',
          border:         '1px solid #1a2540',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       '1.1rem',
        }}>
          {icon}
        </div>
        <h3 style={{
          fontFamily:   "'Syne', sans-serif",
          fontWeight:   700,
          fontSize:     '0.95rem',
          color:        '#e8f0ff',
          letterSpacing:'-0.01em',
        }}>
          {title}
        </h3>
      </div>

      {/* Two-column skill grid */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap:                 '0.6rem 1rem',
      }}>
        {skills.map(skill => (
          <SkillItem key={skill} label={skill} />
        ))}
      </div>
    </div>
  )
}

/* ── Main section ───────────────────────────────────────────────────── */
export default function SkillsSection() {
  /* The reference layout shows "Platforms" as a wide top card,
     then "Graphics" and "Problem Solving" side-by-side below. */
  const [platforms, graphics, collab] = skillCategories

  return (
    <section
      id="skills"
      style={{
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '6rem 2rem',
        background:     '#04070f',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>

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
            Skills &amp; Expertise
          </h2>
          <div className="section-divider" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* ── Wide top card: Platforms ── */}
        <div style={{ marginBottom: '1rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width:          '38px',
                height:         '38px',
                borderRadius:   '10px',
                background:     '#0d1628',
                border:         '1px solid #1a2540',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontSize:       '1.1rem',
              }}>
                {platforms.icon}
              </div>
              <h3 style={{
                fontFamily:   "'Syne', sans-serif",
                fontWeight:   700,
                fontSize:     '0.95rem',
                color:        '#e8f0ff',
              }}>
                {platforms.title}
              </h3>
            </div>
            <div style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap:                 '0.6rem 1rem',
            }}>
              {platforms.skills.map(skill => <SkillItem key={skill} label={skill} />)}
            </div>
          </div>
        </div>

        {/* ── Bottom two cards side-by-side ── */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '1rem',
        }}>
          <SkillCard icon={graphics.icon} title={graphics.title} skills={graphics.skills} />
          <SkillCard icon={collab.icon}   title={collab.title}   skills={collab.skills}   />
        </div>
      </div>
    </section>
  )
}
