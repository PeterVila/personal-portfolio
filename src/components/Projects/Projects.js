import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h1 id="projects" data-aos="fade-up">Projects</h1>
      <div className="project container">
        <div className="project__card" data-aos="fade-up">
          <img src="https://i.gyazo.com/911d108d7b7136d4993bd34de14c4232.jpg" />
          <h2>Social-Lite</h2>
          <p>
            A dynamic HTML, CSS, and JavaScript project for Pokemon enthusiasts
            who want to re-experience the classic, “Who’s that Pokemon?”.
          </p>
          <h3>Technologies Used</h3>
          <div className="project__techs">
            <div className="project__techs-tech">React</div>
            <div className="project__techs-tech">Node.js</div>
            <div className="project__techs-tech">Express</div>
            <div className="project__techs-tech">PostgreSQL</div>
            <div className="project__techs-tech">Socket.io</div>
            <div className="project__techs-tech">Webpack</div>
            <div className="project__techs-tech">React Router</div>
            <div className="project__techs-tech">AWS S3</div>
          </div>
          <div className="project__links">
            <button>Live</button>
            <button>Github</button>
          </div>
        </div>
        <div className="project__card" data-aos="fade-up">
          <img src="https://user-images.githubusercontent.com/42393951/143111026-f15628c1-9c1c-42b8-ba0c-45a8f648dfb4.gif" />
          <h2>Who's that Pokemon</h2>
          <p>
            A dynamic HTML, CSS, and JavaScript project for Pokemon enthusiasts
            who want to re-experience the classic, “Who’s that Pokemon?”.
          </p>
          <h3>Technologies Used</h3>
          <div className="project__techs">
            <div className="project__techs-tech">JavaScript</div>
            <div className="project__techs-tech">CSS</div>
            <div className="project__techs-tech">Animations</div>
            <div className="project__techs-tech">HTML</div>
            <div className="project__techs-tech">SASS</div>
            <div className="project__techs-tech">DOM</div>
          </div>
          <div className="project__links">
            <button>Live</button>
            <button>Github</button>
          </div>
        </div>
        <div className="project__card" data-aos="fade-up">
          <img src="https://i.gyazo.com/5eb146fbeae27fc504f6881e49e2c151.png" />
          <h2>Code Journal</h2>
          <p>
            A full-stack web application where coders can share code-related
            posts using a database in PostgreSQL and components built in React
          </p>
          <h3>Technologies Used</h3>
          <div className="project__techs">
            <div className="project__techs-tech">React</div>
            <div className="project__techs-tech">Node.js</div>
            <div className="project__techs-tech">Express</div>
            <div className="project__techs-tech">PostgreSQL</div>
            <div className="project__techs-tech">Webpack</div>
            <div className="project__techs-tech">React Hooks</div>
          </div>
          <div className="project__links">
            <button>Live</button>
            <button>Github</button>
          </div>
        </div>
        <div className="project__card" data-aos="fade-up">
          <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820" />
          <h2>Who's that Pokemon</h2>
          <p>
            A dynamic HTML, CSS, and JavaScript project for Pokemon enthusiasts
            who want to re-experience the classic, “Who’s that Pokemon?”.
          </p>
          <h3>Technologies Used</h3>
          <div className="project__techs">
            <div className="project__techs-tech">React</div>
            <div className="project__techs-tech">Node.js</div>
            <div className="project__techs-tech">Express</div>
            <div className="project__techs-tech">PostgreSQL</div>
            <div className="project__techs-tech">Socket.io</div>
            <div className="project__techs-tech">Webpack</div>
            <div className="project__techs-tech">React Router</div>
          </div>
          <div className="project__links">
            <button>Live</button>
            <button>Github</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
