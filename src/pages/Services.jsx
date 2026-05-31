function Services() {
  return (
    <section className="home service-page">
      <div className="home-content experience-content">
        <h1>Services</h1>
        <p>
          From data cleaning and dashboards to AI-based classification, clustering, and pattern discovery, I help your dataset reveal meaningful insights.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>AI Classification & Clustering</h3>
            <p>
              Run your dataset through machine learning models to discover groups, classify records, and reveal hidden relations across features.
            </p>
          </div>

          <div className="project-card">
            <h3>Data Cleaning</h3>
            <p>
              Transform messy raw data into clean, structured datasets that are ready for reliable modeling and reporting.
            </p>
          </div>

          <div className="project-card">
            <h3>Dashboard Design</h3>
            <p>
              Create clear dashboards that turn your KPIs and analytics into actionable insights for stakeholders.
            </p>
          </div>

          <div className="project-card">
            <h3>Insight Reporting</h3>
            <p>
              Deliver polished reports with findings, trends, and recommendations tailored to your business or research goals.
            </p>
          </div>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=a7med2005112233@gmail.com"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Email me
        </a>
      </div>
    </section>
  )
}

export default Services
