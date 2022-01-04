import React from "react";
import "./Projects.scss";
import socialGif from "./social-litegif.gif";
import journalGif from "./codeGif.gif";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 data-aos="fade-up">Projects</h1>
      <div className="project container">
        <div className="project__card column-half" data-aos="fade-up">
          <div className="project__card-img">
            <img
              className="animated"
              src="https://i.gyazo.com/7dd227ac9cefd4a5f57815f7ea761d7e.png"
            />
            <img src="http://localhost:3000/PeterVila/personal-portfolio/static/media/social-litegif.e28ba6e7f5b50f97e874.gif" />
          </div>
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
        <div className="project__card column-half" data-aos="fade-up">
          <div className="project__card-img">
            <img
              className="animated"
              src="https://i.gyazo.com/eb606057ab20e6691436d5fb410ae4df.png"
            />
            <img src="https://user-images.githubusercontent.com/42393951/143111026-f15628c1-9c1c-42b8-ba0c-45a8f648dfb4.gif" />
          </div>
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
            <div className="project__techs-tech">DOM</div>
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
        <div className="project__card column-half" data-aos="fade-up">
          <div className="project__card-img">
            <img
              className="animated"
              src="https://i.gyazo.com/aaac310a1411d7b7ecdf61e82f612434.png"
            />
            <img src={journalGif} />
          </div>
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
            <div className="project__techs-tech">Hooks</div>
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
};

export default Projects;
