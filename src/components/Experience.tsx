import { useState } from 'react'
import './Experience.css'

interface Job {
  company: string
  position: string
  period: string
  location: string
  type: string
  responsibilities: string[]
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0)

  const experiences: Job[] = [
    {
      company: 'PT Astra Digital Arta',
      position: 'Product Engineer',
      period: 'Aug 2025 - Present',
      location: 'Jakarta',
      type: 'Fintech',
      responsibilities: [
        'Developed mobile applications for customers using iOS (Swift) and Android (Kotlin)',
        'Built web admin interface for merchants using Angular framework',
        'Developed backend services using Java Spring Boot',
        'Focused on implementing QRIS payment features for seamless transactions',
      ],
    },
    {
      company: 'PT Eigen Tri Mathema',
      position: 'Backend Developer',
      period: 'Oct 2024 - Jul 2025',
      location: 'Bandung',
      type: 'Software House',
      responsibilities: [
        'Developed comprehensive ERP modules including sales, purchase, pricing, company, and contact management',
        'Built scalable server-side applications using Node.js',
        'Implemented Domain-Driven Design (DDD) architecture for maintainable codebase',
        'Collaborated with cross-functional teams to deliver enterprise solutions',
      ],
    },
    {
      company: 'GRV Software Studio',
      position: 'Backend Developer',
      period: 'Jan 2024 - Sep 2024',
      location: 'Bandung',
      type: 'Software House',
      responsibilities: [
        'Developed authentication and authorization systems',
        'Built posting and feed management features for social platform',
        'Implemented payment systems supporting Stripe and cryptocurrency',
        'Applied CQRS pattern for improved performance and scalability',
      ],
    },
    {
      company: 'Bank Indonesia',
      position: 'Programmer Intern',
      period: 'Feb 2024 - Jun 2024',
      location: 'Tasikmalaya',
      type: 'Central Bank',
      responsibilities: [
        'Completed macroeconomic indicators application project',
        'Developed Genbi scholarship announcement website',
        'Collaborated with team members to deliver projects on time',
      ],
    },
    {
      company: 'Growsire',
      position: 'Fullstack Developer',
      period: 'Aug 2023 - Nov 2023',
      location: 'Jakarta',
      type: 'Grocery E-commerce',
      responsibilities: [
        'Developed user and admin web interfaces using TypeScript with Next.js',
        'Built server-side applications using C# with .NET framework',
        'Integrated frontend and backend for seamless user experience',
      ],
    },
    {
      company: 'Switch Box',
      position: 'Backend Developer',
      period: 'Sep 2022 - Feb 2023',
      location: 'Bandung',
      type: 'Software House',
      responsibilities: [
        'Developed web application zada.co.id',
        'Built government portal tramites.babahoyo.gob.ec',
        'Implemented backend services and database architecture',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-content">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-company">{exp.company}</span>
                <span className="tab-position">{exp.position}</span>
              </button>
            ))}
          </div>

          <div className="experience-details">
            <div className="experience-card">
              <div className="card-header">
                <div>
                  <h3 className="job-position">{experiences[activeTab].position}</h3>
                  <h4 className="job-company">
                    {experiences[activeTab].company}
                    <span className="job-type"> • {experiences[activeTab].type}</span>
                  </h4>
                </div>
                <div className="job-meta">
                  <span className="job-period">{experiences[activeTab].period}</span>
                  <span className="job-location">📍 {experiences[activeTab].location}</span>
                </div>
              </div>

              <ul className="job-responsibilities">
                {experiences[activeTab].responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
