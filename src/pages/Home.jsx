import mainImg from '../assets/images/main.avif'
import cvFile from '../assets/CV Ahmed Abdelhafid.pdf'

function Home() {
  return (
    <section className="home">
      <div className="home-img">
        <img src={mainImg} alt="Picture of a handsome dude with glasses" />
      </div>

      <div className="home-content">
        <h1>
          Hi, It's <span>kartoofy</span>
        </h1>
        <h3 className="typing-text">
          I'm a <span></span>
        </h3>
        <p>
          I'm into data analysis, currently doing a master's in AI.
          I really enjoy working with data, finding insights, and learning more about ML.
          I also do some frontend web development and working to improve across different areas.
          I have a strong interest in PC hardware and tech, especially building and optimizing computers.
            Outside of that, I'm into football, fitness, and gaming in my free time.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ahmed-abdelhafid-29b87b366/" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/kartoofy" target="_blank" rel="noreferrer" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://steamcommunity.com/id/kartoofy" target="_blank" rel="noreferrer" title="Steam">
            <i className="fa-brands fa-steam"></i>
          </a>
          <a href="https://www.instagram.com/kartoofy/" target="_blank" rel="noreferrer" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.kaggle.com/kartoofy" target="_blank" rel="noreferrer" title="Kaggle">
            <i className="fa-brands fa-kaggle"></i>
          </a>
        </div>
        <div className="home-buttons">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=a7med2005112233@gmail.com" className="btn" target="_blank" rel="noreferrer" title="Email me">
            Email me
          </a>
          <a href={cvFile} className="btn" target="_blank" rel="noreferrer" title="View CV">
            View CV
          </a>
          <a href={cvFile} className="btn btn-icon" download="CV Ahmed Abdelhafid.pdf" title="Download CV">
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
