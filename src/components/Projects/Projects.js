import "./Projects.scss";
import socialGif from "./social-litegif.gif"

const Projects = () => {
  return (
    <section className="projects">
      <h1 id="projects" data-aos="fade-up">
        Projects
      </h1>
      <div className="project container">
        <div className="project__card" data-aos="fade-up">
          <img src={socialGif} />
          <h2>Social-Lite</h2>
          <p>
            A full stack web application for friends who want to share memories
            and plan out events together. Users can upload photos, leave
            comments, RSVP and join a chatroom.
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
            <a
              target="_blank"
              href="https://social-lite-lfz.herokuapp.com/"
              rel="noreferrer"
            >
              <button>Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/PeterVila/social-lite"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
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
            <div className="project__techs-tech">DOM Manipulation</div>
          </div>
          <div className="project__links">
            <a
              target="_blank"
              href="https://petervila.github.io/whos-that-pokemon/"
              rel="noreferrer"
            >
              <button>Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/PeterVila/whos-that-pokemon"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <div className="project__card" data-aos="fade-up">
          <img src="https://i.gyazo.com/38087a6ab89491da6187f5ead6a312cd.png" />
          <h2>Code Journal</h2>
          <p>
            A full-stack web application where coders can share code-related
            posts using a database in PostgreSQL and components built in React.
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
            <a
              target="_blank"
              href="https://pvj-react-code-journal.herokuapp.com/#/"
              rel="noreferrer"
            >
              <button>Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/PeterVila/react-code-journal"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
