function Services() {
  return (
    <section className="home service-page">
      <div className="home-content service-content">
        <div className="service-intro">
          <h1>Data Analysis Services</h1>
          <p>I analyze your data, build polished dashboards, and deliver insights that match your goals.</p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-card-icon">
              <i className="fa-solid fa-database"></i>
            </div>
            <h2>Data Cleaning</h2>
            <p>Transform messy raw data into clean, structured datasets ready for reliable analysis.</p>
          </article>

          <article className="service-card">
            <div className="service-card-icon">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
            <h2>Dashboard Design</h2>
            <p>Create interactive dashboards that make insights easy to read and act upon.</p>
          </article>

          <article className="service-card">
            <div className="service-card-icon">
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <h2>Insight Reporting</h2>
            <p>Deliver clear reports with recommendations tailored to your business goals.</p>
          </article>

          <article className="service-card">
            <div className="service-card-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h2>Performance Tracking</h2>
            <p>Monitor key metrics and trends so your team can make faster, smarter decisions.</p>
          </article>
        </div>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=a7med2005112233@gmail.com" className="btn" target="_blank" rel="noreferrer">
          Email me
        </a>
      </div>
    </section>
  )
}

export default Services
