const familyMembers = [
  {
    number: '01',
    role: 'Father',
    title: 'The foundation',
    tagline: 'Head of the family · The engine room',
    initials: 'F',
    color: 'amber',
    icon: 'compass',
    intro:
      'The family’s steady lead and driving force—setting direction, creating security, and helping everyone move forward together.',
    responsibilities: [
      'Guide important family decisions with care and perspective.',
      'Work to provide stability, protection, and a sense of security.',
      'Encourage each family member and keep the household moving toward shared goals.',
    ],
    contribution: 'Direction, resilience & security',
  },
  {
    number: '02',
    role: 'Mother',
    title: 'The heart',
    tagline: 'The soul of the family · Its nucleus',
    initials: 'M',
    color: 'rose',
    icon: 'heart',
    intro:
      'The emotional centre that brings everyone close—nurturing connection, care, and the feeling of belonging that makes a house a home.',
    responsibilities: [
      'Offer warmth, reassurance, and attentive care to the family.',
      'Keep relationships connected through communication and understanding.',
      'Create a welcoming home rhythm and help everyone feel valued.',
    ],
    contribution: 'Connection, care & belonging',
  },
  {
    number: '03',
    role: 'Son',
    title: 'The keeper of shared spaces',
    tagline: 'Looks after the living room',
    initials: 'S',
    color: 'blue',
    icon: 'sparkles',
    intro:
      'Takes ownership of the living room, keeping this shared space comfortable, tidy, and ready for everyone to enjoy.',
    responsibilities: [
      'Put away personal items, games, and anything left out.',
      'Straighten cushions and keep the room neat after use.',
      'Help maintain a welcoming space for family time and guests.',
    ],
    contribution: 'A tidy, welcoming living room',
  },
  {
    number: '04',
    role: 'Daughter',
    title: 'The kitchen helper',
    tagline: 'Supports Mother in the kitchen',
    initials: 'D',
    color: 'green',
    icon: 'leaf',
    intro:
      'A thoughtful helping hand in the kitchen, sharing the everyday work and learning how to care for the family together.',
    responsibilities: [
      'Assist Mother with suitable meal preparation and kitchen tasks.',
      'Help set the table, clear dishes, and tidy up after meals.',
      'Keep kitchen help safe, considerate, and suited to her age.',
    ],
    contribution: 'Teamwork, helpfulness & care',
  },
]

function RoleIcon({ name }) {
  const paths = {
    compass: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
      </>
    ),
    heart: <path d="M20.2 8.8c0 4.1-8.2 9.2-8.2 9.2S3.8 12.9 3.8 8.8a4.1 4.1 0 0 1 7.1-2.8l1.1 1.2 1.1-1.2a4.1 4.1 0 0 1 7.1 2.8Z" />,
    sparkles: (
      <>
        <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4c-9.5 0-15 3.2-15 9a6 6 0 0 0 6 6c5.8 0 9-5.5 9-15Z" />
        <path d="M5 21c2.5-5 6.2-8.7 11-11" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="role-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function MemberCard({ member }) {
  return (
    <article className={`member-card ${member.color}`}>
      <div className="card-topline">
        <span className="member-number">{member.number} / 04</span>
        <span className="role-icon-wrap">
          <RoleIcon name={member.icon} />
        </span>
      </div>

      <div className="identity">
        <span className="avatar" aria-hidden="true">
          {member.initials}
        </span>
        <div>
          <h3>{member.role}</h3>
          <p className="member-title">{member.title}</p>
        </div>
      </div>

      <p className="tagline">{member.tagline}</p>
      <p className="member-intro">{member.intro}</p>

      <div className="responsibility-block">
        <h4>In the family</h4>
        <ul>
          {member.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="contribution">
        <span className="contribution-mark" aria-hidden="true">+</span>
        <span>{member.contribution}</span>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Our Family home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none">
              <path d="M3.5 12.2 14 3.8l10.5 8.4v11H3.5v-11Z" />
              <path d="M10 23.2v-7h8v7M8 11.5h.01M14 11.5h.01M20 11.5h.01" />
            </svg>
          </span>
          <span>our family<span className="brand-period">.</span></span>
        </a>
        <div className="header-note">
          <span className="live-dot" aria-hidden="true" />
          <span>A little about us</span>
        </div>
      </header>

      <section className="hero" id="home" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> THE PEOPLE WHO MAKE A HOME</p>
          <h1 id="page-title">Different roles.<br />One <span>family.</span></h1>
          <p className="hero-description">
            Every family member brings something special. Here’s how we show
            up for one another, and make our home work as a team.
          </p>
          <a className="explore-link" href="#family">
            Meet the family
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <aside className="family-note" aria-label="Our family values">
          <div className="note-decoration" aria-hidden="true">“</div>
          <p>A strong home isn’t built by one person. It’s held together by all of us.</p>
          <span>OUR FAMILY, OUR TEAM</span>
          <div className="note-orbit orbit-one" aria-hidden="true" />
          <div className="note-orbit orbit-two" aria-hidden="true" />
        </aside>

        <div className="hero-index" aria-hidden="true">
          <span>01</span><i /><span>04</span>
        </div>
      </section>

      <section className="family-section" id="family" aria-labelledby="family-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> OUR LITTLE TEAM</p>
            <h2 id="family-title">Everyone has a part to play.</h2>
          </div>
          <p className="section-description">
            Big or small, each role adds to the care, comfort, and togetherness
            we share at home.
          </p>
        </div>

        <div className="member-grid">
          {familyMembers.map((member) => (
            <MemberCard key={member.role} member={member} />
          ))}
        </div>

        <div className="family-footer">
          <span className="footer-symbol" aria-hidden="true">✳</span>
          <p><strong>Better, together.</strong> Every contribution matters. Every day.</p>
          <span className="footer-caption">MADE WITH LOVE, AT HOME</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span>our family<span className="brand-period">.</span></span>
        </a>
        <span>A home is something we make together.</span>
        <a className="back-to-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App