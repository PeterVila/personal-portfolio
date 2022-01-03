import './Hero.scss';

const Hero = () => {
  return (
    // Container needed for each component under navbar
    <section id="about" className="hero container">
      <div className="hero__image">
        <img
          src="https://i.pinimg.com/originals/e1/85/18/e18518c6d24257c6fb02e3c95a862d85.gif"
          alt="placeholder"
        />
      </div>
      <div className="hero__text">
        <h3>Hello! I'm Peter Vila</h3>
        <h1>Full Stack Web Developer</h1>
        <h2>
          I'm a Software Developer with a passion for technology, coding, and
          creating digital art!
        </h2>
        <h2>
          I'm skilled in languages such as JavaScript (ES5 + ES6), React.js,
          Node.js, Express, PostgreSQL, HTML, CSS and Sass. I'm intimately
          familiar with tools like Git, Babel, npm, and Webpack.
        </h2>
        <div className="hero__text-buttons">
          <a
            target="_blank"
            href="https://github.com/PeterVila"
            rel="noreferrer"
            >
            <button>
            GitHub
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/peterdvila/"
            rel="noreferrer"
            >
            <button>
            LinkedIn
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
