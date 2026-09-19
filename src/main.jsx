import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  ["Java", "Core Java · OOP · Collections · Exception Handling · Multithreading"],
  ["Spring Boot", "REST APIs · JSON · HTTP Methods · Backend Development"],
  ["React.js", "HTML · CSS · JavaScript · Frontend Development"],
  ["MySQL", "SQL · Database Management · Database Integration"],
  ["Python", "Random Forest Regression · Flask"],
  ["Developer Tools", "Git · GitHub · Postman · IntelliJ IDEA · MySQL Workbench"]
];

const projects = [
  {
    no: "01",
    title: "Job Portal Application",
    label: "FULL-STACK · ONGOING",
    stack: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "REST APIs", "Postman"],
    description: "Developing a full-stack Job Portal application with separate roles for Job Seekers, Recruiters and Admins.",
    points: [
      "Developed and tested REST APIs for job listings, applications and recruiter management.",
      "Worked with JSON request and response data while integrating REST endpoints.",
      "Implemented role-based authentication using JWT.",
      "Used Postman to test endpoints, validate responses and troubleshoot issues."
    ],
    github: "https://github.com/Dileep3015"
  },
  {
    no: "02",
    title: "Traffic-Flow Predictor",
    label: "MACHINE LEARNING · DEPLOYED",
    stack: ["Python", "Random Forest Regression", "Flask", "GitHub", "Render"],
    description: "Built a web application for predicting traffic volume and patterns with location visualization.",
    points: [
      "Developed the prediction application using Python and Random Forest Regression.",
      "Built a Flask-based web application for traffic prediction and location visualization.",
      "Optimized the ML model from approximately 308 MB to 58.2 MB for deployment constraints.",
      "Deployed the application using GitHub and Render."
    ],
    github: "https://github.com/Dileep3015/TRAFFIC-VOLUME"
  }
];

function App() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="app">
      <div className="grid-bg"></div>

      <header className="topbar">
        <a href="#home" className="logo"><span>DK</span><b>/</b>DEV</a>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#stack">STACK</a>
          <a href="#projects">PROJECTS</a>
          <a href="#training">TRAINING</a>
          <a href="#certifications">CERTIFICATIONS</a>
          <a href="#resume">RESUME</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <a className="hire-btn" href="#contact"><i></i> AVAILABLE</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-main">
            <div className="status-line"><span className="pulse"></span> JUNIOR FULL STACK DEVELOPER</div>
            <h1>Dileep<br/><span>Kumar</span></h1>
            <p className="hero-sub">
              Java-focused full-stack developer building practical web applications with
              <strong> Spring Boot, React.js, MySQL and REST APIs.</strong>
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">VIEW PROJECTS <span>↘</span></a>
              <a href="https://github.com/Dileep3015" target="_blank" rel="noreferrer" className="btn ghost">GITHUB ↗</a>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="dots"><i></i><i></i><i></i></span>
              <span>developer.profile</span>
              <span>01</span>
            </div>
            <div className="terminal-body">
              <p><em>const</em> developer = {"{"}</p>
              <p className="indent"><key>name:</key> <val>"Dileep Kumar"</val>,</p>
              <p className="indent"><key>role:</key> <val>"Junior Full Stack Developer"</val>,</p>
              <p className="indent"><key>degree:</key> <val>"B.Tech AI & Data Science"</val>,</p>
              <p className="indent"><key>backend:</key> [<val>"Java"</val>, <val>"Spring Boot"</val>],</p>
              <p className="indent"><key>frontend:</key> [<val>"React.js"</val>, <val>"JavaScript"</val>],</p>
              <p className="indent"><key>database:</key> [<val>"MySQL"</val>, <val>"SQL"</val>],</p>
              <p className="indent"><key>apis:</key> [<val>"REST"</val>, <val>"JSON"</val>, <val>"JWT"</val>],</p>
              <p className="indent"><key>tools:</key> [<val>"Git"</val>, <val>"Postman"</val>]</p>
              <p>{"};"}</p>
              <div className="terminal-cursor">▮</div>
            </div>
          </div>

          <div className="hero-metrics">
            <div><b>8.0</b><span>CGPA</span></div>
            <div><b>02</b><span>FEATURED PROJECTS</span></div>
            <div><b>2025</b><span>GRADUATED</span></div>
            <div><b>∞</b><span>LEARNING MODE</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label"><span>01</span> PROFILE</div>
          <div className="section-content two-col">
            <h2>Building from<br/><accent>logic to interface.</accent></h2>
            <div className="copy">
              <p className="big">B.Tech graduate in Artificial Intelligence and Data Science with hands-on training and project experience in Java Full Stack Development.</p>
              <p>I work across backend development, REST APIs, database integration, authentication, frontend development and API testing. My projects focus on turning requirements into working applications while applying Java OOP and clean coding practices.</p>
              <div className="mini-facts">
                <span><b>LOCATION</b>Bengaluru, India</span>
                <span><b>EMAIL</b>dileepmotives@gmail.com</span>
                <span><b>LANGUAGES</b>English · Telugu</span>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <div className="section-label"><span>02</span> TECHNICAL STACK</div>
          <div className="stack-head">
            <h2>Tools I <accent>work with.</accent></h2>
            <p>Focused on the technologies demonstrated through my training and projects.</p>
          </div>
          <div className="skills-grid">
            {skills.map(([name, detail], i) => (
              <article className="skill-card" key={name}>
                <span className="skill-index">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{detail}</p>
                <span className="arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label"><span>03</span> PROJECT LAB</div>
          <div className="project-layout">
            <div className="project-list">
              {projects.map((p, i) => (
                <button key={p.title} className={activeProject === i ? "project-tab active" : "project-tab"} onClick={() => setActiveProject(i)}>
                  <span>{p.no}</span><div><b>{p.title}</b><small>{p.label}</small></div><strong>↗</strong>
                </button>
              ))}
            </div>
            <article className="project-detail">
              <div className="project-top"><span>{projects[activeProject].no} / {projects[activeProject].label}</span><span>PROJECT</span></div>
              <h2>{projects[activeProject].title}</h2>
              <p className="project-desc">{projects[activeProject].description}</p>
              <div className="chip-row">{projects[activeProject].stack.map(x => <span key={x}>{x}</span>)}</div>
              <ul>{projects[activeProject].points.map(x => <li key={x}>{x}</li>)}</ul>
              <a className="project-link" href={projects[activeProject].github} target="_blank" rel="noreferrer">OPEN GITHUB REPOSITORY <span>↗</span></a>
            </article>
          </div>
        </section>

        <section className="section architecture">
          <div className="section-label"><span>04</span> DEVELOPMENT APPROACH</div>
          <h2>From request to<br/><accent>working application.</accent></h2>
          <div className="flow">
            {["Requirement", "Backend", "API", "Database", "Frontend", "Testing"].map((x, i) =>
              <div className="flow-item" key={x}><span>0{i+1}</span><b>{x}</b>{i < 5 && <i>→</i>}</div>
            )}
          </div>
          <p className="approach-note">Java OOP → Spring Boot → REST/JSON → MySQL → React.js → Postman testing</p>
        </section>

        <section id="training" className="section training">
          <div className="section-label"><span>05</span> EDUCATION & TRAINING</div>
          <div className="timeline">
            <article><span>2021 — 2025</span><div><small>B.TECH</small><h3>Artificial Intelligence & Data Science</h3><p>Annamacharya Institute of Technology and Sciences, Rajampet · CGPA 8.0</p></div></article>
            <article><span>JUL 2025 — MAY 2026</span><div><small>PROFESSIONAL TRAINING</small><h3>Java & Python Full Stack Development</h3><p>KodNest Technologies · Core Java, OOP, Collections, Exception Handling, SQL, Spring Boot, REST APIs and web development.</p></div></article>
            <article><span>CERTIFICATION</span><div><small>EMERGING TECHNOLOGIES</small><h3>Data Science</h3><p>Indo-Euro Synchronization, Rajampet</p></div></article>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-label">
            <span>06</span> CERTIFICATIONS
          </div>

          <h2>
            Credentials that support my <accent>technical foundation.</accent>
          </h2>

          <div className="certification-list">

            <div className="certification-item">
              <span className="certification-number">01</span>
              <div>
                <h3>Java & Python Full Stack Development</h3>
                <p>KodNest Technologies</p>
              </div>
            </div>

            <div className="certification-item">
              <span className="certification-number">02</span>
              <div>
                <h3>Certification on Emerging Technologies – Data Science</h3>
                <p>Indo-Euro Synchronization, Rajampet</p>
              </div>
            </div>

          </div>
        </section>

        <section id="resume" className="section resume-section">
          <div className="section-label">
            <span>07</span> RESUME
          </div>

          <h2>
            Want the complete <accent>profile?</accent>
          </h2>

          <p className="section-description">
            View or download my resume for a detailed overview of my
            education, technical skills, training and projects.
          </p>
        
          <div className="resume-actions">
            <a
              href={`${import.meta.env.BASE_URL}resume.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW RESUME
            </a>

            <a
              href={`${import.meta.env.BASE_URL}DileepKumarDonakonda.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD PDF
            </a>
          </div>
        </section>

        <section className="section beyond">
          <div className="section-label"><span>08</span> BEYOND CODE</div>
          <div className="beyond-box">
            <div><span>DDK</span><h2>DDKTalks</h2></div>
            <p>Content creation has strengthened my research, communication and presentation skills. I built DDKTalks as a digital content platform alongside my technical development.</p>
            <a href="https://www.instagram.com/ddktalks/" target="_blank" rel="noreferrer">VIEW DDKTALKS ↗</a>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-label"><span>09</span> CONTACT</div>
          <h2>Let's build<br/><accent>something useful.</accent></h2>
          <p>Open to Junior Full Stack Developer opportunities and practical software projects.</p>
          <div className="contact-actions">
            <a href="mailto:dileepmotives@gmail.com">dileepmotives@gmail.com ↗</a>
          </div>
          <div className="socials">
            <a href="https://github.com/Dileep3015" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/dileepkumar28072002/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/ddktalks/" target="_blank" rel="noreferrer">DDKTalks</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="copyright-line">
          <span>© {new Date().getFullYear()} Dileep Kumar.</span>
          <span>All rights reserved.</span>
        </div>
        <span>DILEEP KUMAR / JUNIOR FULL STACK DEVELOPER</span>
        <span>JAVA · SPRING BOOT · REACT · MYSQL</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);