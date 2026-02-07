import './Projects.css'

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  category: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'E-commerce Platform - Twostrap',
      description: 'Built a scalable e-commerce solution with Google login integration, loyalty points system, and affiliate transaction capabilities that increased client sales.',
      tags: ['Google OAuth', 'Loyalty System', 'Affiliate Marketing', 'E-commerce'],
      link: 'https://twostrap.id',
      category: 'Professional',
    },
    {
      title: 'Atma Asta Event Platform',
      description: 'Created a comprehensive event management website for SMAN 8 Bandung\'s annual music and arts festival, featuring live streaming, sponsor seats, and merchandise management.',
      tags: ['Live Streaming', 'Event Management', 'Next.js', 'Real-time'],
      link: 'https://atma-asta-2021.vercel.app',
      category: 'Professional',
    },
    {
      title: 'Campus Orientation Portal',
      description: 'Developed a student management system for FISIP Unpad to handle new student admissions, assignments, attendance tracking, and score management.',
      tags: ['Student Portal', 'Assignment Management', 'Attendance', 'Education'],
      link: 'https://orasifisipunpad.com',
      category: 'Professional',
    },
    {
      title: 'Absensi Bimbingan Belajar',
      description: 'Web-based attendance system for tutoring centers featuring fingerprint integration, WhatsApp notifications, and comprehensive summary reports.',
      tags: ['Fingerprint', 'WhatsApp API', 'Attendance System', 'Reports'],
      link: 'https://absensi.octoscript.id',
      category: 'Professional',
    },
    {
      title: 'KPU Kemafar Unpad',
      description: 'Developed a web-based information system for the General Election at the Faculty of Pharmacy, Unpad, managing voter registration and election processes.',
      tags: ['Election System', 'Voting', 'Student Government', 'Web App'],
      category: 'Academic',
    },
    {
      title: 'Image Segmentation System',
      description: 'Built and developed an image segmentation system for aquatic waste detection using DeepLabV3+ deep learning architecture.',
      tags: ['Deep Learning', 'DeepLabV3+', 'Computer Vision', 'Python'],
      category: 'Machine Learning',
    },
    {
      title: 'CV Analysis with BERT',
      description: 'Created a CV analysis system using Bidirectional Encoder Representations from Transformers (BERT) for intelligent resume screening.',
      tags: ['BERT', 'NLP', 'Machine Learning', 'Text Analysis'],
      category: 'Machine Learning',
    },
    {
      title: 'Prabu Unpad',
      description: 'Information system for the orientation program (OSPEK) at Universitas Padjadjaran, managing student activities and tracking.',
      tags: ['Student Portal', 'Event Management', 'Web Platform'],
      category: 'Academic',
    },
  ]

  const achievements = [
    {
      title: 'P2MW Top 5',
      description: 'Achieved Top 5 in P2MW competition by creating an innovative mobile application for pregnant mothers',
      year: '2022',
      icon: '🏆',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects & Achievements</h2>
          <div className="title-underline"></div>
        </div>

        <div className="achievements-section">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <span className="achievement-year">{achievement.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-category-badge">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* <div className="portfolio-cta">
          <p>Want to see more of my work?</p>
          <a
            href="https://drive.google.com/file/d/1EdRdMUaiQzNAT6KfC5vjigc33QHVX_sX/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Full Portfolio
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Projects
