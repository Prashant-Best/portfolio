import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  ExternalLink,
  FolderGit,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react'
import './App.css'
import { portfolioData } from './data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </motion.div>
  )
}

function App() {
  const {
    name,
    title,
    intro,
    location,
    phone,
    email,
    linkedin,
    github,
    profileImage,
    resume,
    highlights,
    stats,
    skills,
    internship,
    projects,
    certificates,
    education,
  } = portfolioData

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <motion.header
        className="topbar"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="brand" href="#home">
          <span className="brand-mark">PP</span>
          <span>{name}</span>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-ghost" href={resume} target="_blank" rel="noreferrer">
          View CV
        </a>
      </motion.header>

      <main>
        <section className="hero-section" id="home">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span className="hero-kicker" variants={fadeUp}>
              <Sparkles size={16} />
              Data Analyst and Full Stack Developer
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Delivering full stack products and data insights that turn complexity into clarity.
            </motion.h1>

            <motion.p className="hero-intro" variants={fadeUp}>
              {intro}
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="button" href="#projects">
                Explore Projects
                <ArrowRight size={18} />
              </a>
              <a className="button button-ghost" href={linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
            </motion.div>

            <motion.div className="hero-meta" variants={fadeUp}>
              <span>
                <MapPin size={16} />
                {location}
              </span>
              <a href={`mailto:${email}`}>
                <Mail size={16} />
                {email}
              </a>
              <a href={`tel:${phone.replace(/\s+/g, '')}`}>
                <Phone size={16} />
                {phone}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div className="portrait-wrap">
              <div className="portrait-ring" />
              <img src={profileImage} alt={`${name} portrait`} className="portrait" />
            </div>

            <div className="floating-card floating-card-top">
              <span>Primary Stack</span>
              <strong>MERN, Django, Python, SQL</strong>
            </div>

            <div className="floating-card floating-card-bottom">
              <span>Professional Focus</span>
              <strong>Full Stack Development + Data Analytics</strong>
            </div>
          </motion.div>
        </section>

        <motion.section
          className="stats-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((item) => (
            <motion.article
              key={item.label}
              className="stat-card"
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </motion.section>

        <section className="content-section" id="about">
          <SectionTitle
            eyebrow="About Me"
            title="I build digital products and data solutions with a strong focus on clarity, execution, and impact."
            copy="I focus on shipping applications, analyzing data, and solving real business problems through practical, well-structured solutions."
          />

          <div className="about-grid">
            <motion.article
              className="glass-card story-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <p>
                {title}. I build software and data solutions that solve real problems, especially
                where clean user experience, backend logic, and analytical thinking need to work
                together.
              </p>
              <p>
                From workflow automation systems to industry-level data analysis, I focus on
                creating solutions that are practical, structured, and easy for people to use and
                act on.
              </p>
            </motion.article>

            <motion.div
              className="glass-card highlight-list"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {highlights.map((item) => (
                <motion.div key={item.title} className="highlight-item" variants={fadeUp}>
                  
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="content-section" id="skills">
          <SectionTitle
            eyebrow="Skills"
            title="My stack is balanced across engineering, analytics, and delivery."
            copy="I work across frontend, backend, databases, visualization, and analytical workflows to build complete solutions."
          />

          <motion.div
            className="skills-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((group) => (
              <motion.article
                key={group.title}
                className="glass-card skill-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <motion.span
                      className="chip"
                      key={item}
                      whileHover={{ y: -3, scale: 1.03 }}
                      transition={{ duration: 0.18 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="content-section">
          <SectionTitle
            eyebrow="Experience"
            title="My experience reflects strong execution, structured thinking, and technical discipline."
            copy="Through training and hands-on work, I have strengthened implementation quality, problem solving, and analytical rigor."
          />

          <motion.article
            className="timeline-card glass-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <div className="timeline-icon">
              <BriefcaseBusiness size={22} />
            </div>
            <div className="timeline-copy">
              <div className="timeline-head">
                <div>
                  <h3>{internship.role}</h3>
                  <p>{internship.company}</p>
                </div>
                <span>{internship.duration}</span>
              </div>

              <div className="chip-row">
                {internship.skills.map((item) => (
                  <motion.span
                    className="chip"
                    key={item}
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ duration: 0.18 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              <ul className="detail-list">
                {internship.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </section>

        <section className="content-section" id="projects">
          <SectionTitle
            eyebrow="Projects"
            title="My work spans full stack development and data analysis."
            copy="These projects show how I design systems, work with data, and deliver usable solutions with practical value."
          />

          <motion.div
            className="projects-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card glass-card"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.24 }}
              >
                <div className="project-topline">
                  <span>{project.duration}</span>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                        <FolderGit size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="chip-row">
                  {project.stack.map((item) => (
                    <motion.span
                      className="chip"
                      key={item}
                      whileHover={{ y: -3, scale: 1.03 }}
                      transition={{ duration: 0.18 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <ul className="detail-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="content-section" id="certificates">
          <SectionTitle
            eyebrow="Certificates"
            title="My certifications reflect continuous learning and technical growth."
            copy="These certificates support my skills in development, problem solving, and technical upskilling."
          />

          <motion.div
            className="cert-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certificates.map((certificate) => (
              <motion.a
                key={certificate.title}
                className="certificate-card glass-card"
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.24 }}
              >
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-copy">
                  <div className="certificate-head">
                    <Award size={18} />
                    <span>{certificate.issuer}</span>
                  </div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.date}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        <section className="content-section">
          <SectionTitle
            eyebrow="Education"
            title="My education supports the foundation behind my work."
            copy="I include my academic background here as supporting context while keeping the main focus on my professional skills and projects."
          />

          <motion.div
            className="education-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {education.map((item) => (
              <motion.article
                key={`${item.school}-${item.duration}-${item.degree}`}
                className="glass-card education-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <div className="education-icon">
                  <GraduationCap size={22} />
                </div>
                <span>{item.duration}</span>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <strong>{item.score}</strong>
                <small>{item.location}</small>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="content-section contact-section" id="contact">
          <motion.div
            className="glass-card contact-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <span className="eyebrow">Let&apos;s Build</span>
            <h2>Available for full stack development, data analysis, and meaningful collaborations.</h2>
            <p>
              I am open to opportunities where product thinking, analytics, and engineering come
              together to build useful digital experiences and data-driven solutions.
            </p>

            <div className="contact-links">
              <a href={`mailto:${email}`}>
                <Mail size={18} />
                {email}
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                LinkedIn
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <FolderGit size={18} />
                GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
