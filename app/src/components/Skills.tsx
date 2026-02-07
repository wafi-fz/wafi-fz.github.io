import './Skills.css'

const Skills = () => {
  const technicalSkills = [
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Java Spring Boot', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'C# .NET', level: 75 },
        { name: 'Express.js', level: 88 },
      ],
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React & Next.js', level: 80 },
        { name: 'Angular', level: 75 },
        { name: 'HTML/CSS', level: 85 },
      ],
    },
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Swift (iOS)', level: 70 },
        { name: 'Kotlin (Android)', level: 70 },
      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'Database Design', level: 88 },
        { name: 'SQL/NoSQL', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Git/GitHub', level: 90 },
      ],
    },
  ]

  const patterns = [
    'Domain-Driven Design (DDD)',
    'CQRS Pattern',
    'RESTful API Design',
    'Microservices Architecture',
  ]

  const softSkills = [
    { name: 'Leadership', icon: '👨‍💼' },
    { name: 'Team Collaboration', icon: '🤝' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Communication', icon: '💬' },
    { name: 'Project Management', icon: '📊' },
    { name: 'Analytical Thinking', icon: '🔍' },
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          <div className="technical-skills">
            <h3 className="subsection-title">Technical Skills</h3>
            {technicalSkills.map((category, index) => (
              <div key={index} className="skill-category">
                <h4 className="category-title">{category.category}</h4>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="additional-skills">
            <div className="patterns-card">
              <h3 className="subsection-title">Architecture Patterns</h3>
              <div className="patterns-list">
                {patterns.map((pattern, index) => (
                  <div key={index} className="pattern-tag">
                    <span className="pattern-icon">✓</span>
                    {pattern}
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-skills-card">
              <h3 className="subsection-title">Soft Skills</h3>
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-item">
                    <span className="soft-skill-icon">{skill.icon}</span>
                    <span className="soft-skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
