function Experience() {
  return (
    <section className="home">
      <div className="home-content experience-content">
        <h1>Experience</h1>
        <p>Here are some projects I've worked on:</p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>SQL Project: Data Jobs Analysis</h3>
            <p>
              Analyzed the data analyst job market, focusing on top-paying roles and demanded skills in remote and European markets.
            </p>
            <a href="https://github.com/kartoofy/SQL_Project_Data_Jobs_Analysis" target="_blank" rel="noreferrer" className="btn">
              GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>React Project: World Cup 2026 Draw Simulator</h3>
            <p>
              A fun React app simulating World Cup 2026 team draws and predicting Round of 32 qualifiers.
            </p>
            <a href="https://kartoofy.github.io/worldcup26draw/" target="_blank" rel="noreferrer" className="btn">
              Demo
            </a>
          </div>

          <div className="project-card">
            <h3>Movie App</h3>
            <p>
              React + Vite app that fetches trending movies from TMDB API and stores favorites locally in the browser.
            </p>
            <div className="project-links">
              <a href="https://github.com/kartoofy/movie-app" target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
              <a href="https://kartoofy.github.io/movie-app/" target="_blank" rel="noreferrer" className="btn">
                Demo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>ChildCare</h3>
            <p>
              Flutter app for Bachelor graduation: a mini app connecting clinics and new mothers and replacing local health records.
            </p>
            <a href="https://github.com/kartoofy/ChildCare" target="_blank" rel="noreferrer" className="btn">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
