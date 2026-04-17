import mainImg from '../assets/images/main.jpg'

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
          I’m into data analysis and SQL, and I’m currently doing a master’s in AI.
           I really enjoy working with data, finding insights, and learning more about machine learning.
            I also do some frontend web development and like improving my skills across different tech areas.
             Outside of that, I’m into football, fitness, and gaming in my free time.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ahmed-abdelhafid-29b87b366/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/kartoofy" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://steamcommunity.com/id/kartoofy" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-steam"></i>
          </a>
          <a href="https://www.instagram.com/kartoofy/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=a7med2005112233@gmail.com" className="btn" target="_blank" rel="noreferrer">
          Email me
        </a>
      </div>
    </section>
  )
}

export default Home
