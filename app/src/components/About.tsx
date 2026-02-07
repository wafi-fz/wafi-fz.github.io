import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I am a passionate programmer who enjoys working in software development,
              with a special focus on <span className="highlight">backend development</span>.
            </p>
            <p>
              My journey in software engineering has equipped me with expertise in building
              robust server-side applications, designing efficient databases, and implementing
              modern development patterns like <span className="highlight">Domain-Driven Design</span> and <span className="highlight">CQRS</span>.
            </p>
            <p>
              I'm enthusiastic about working with data, machine learning, and creating scalable
              software solutions. I thrive in collaborative environments and am always eager to
              take on new challenges in the fast-evolving digital landscape.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Companies Worked</div>
              </div>
            </div>
          </div>

          <div className="about-education">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>Bachelor of Computer Science</h3>
              <p className="university">Universitas Padjadjaran</p>
              <p className="education-period">Aug 2020 - Jun 2024</p>
              <div className="gpa">
                <span className="gpa-label">GPA:</span>
                <span className="gpa-value">3.82/4.00</span>
              </div>
              <p className="education-location">Jatinangor, Indonesia</p>
            </div>

            <div className="organization-card">
              <div className="org-icon">👥</div>
              <h3>Head of Data Research & Analysis</h3>
              <p className="org-name">BEM Kema Unpad</p>
              <p className="org-period">Feb 2023 - Dec 2023</p>
              <ul className="org-responsibilities">
                <li>Led research initiatives to improve organizational performance</li>
                <li>Managed data integration and information technology systems</li>
                <li>Developed data integration website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
