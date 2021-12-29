import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project container">
        <div className="project__card">
          <img src="https://user-images.githubusercontent.com/42393951/143111026-f15628c1-9c1c-42b8-ba0c-45a8f648dfb4.gif" />
          <p>
            A dynamic HTML, CSS, and JavaScript project for Pokemon enthusiasts
            who want to re-experience the classic, “Who’s that Pokemon?”.
          </p>
        </div>
        <div className="project__card">
          <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820" />
          <p>
            A dynamic HTML, CSS, and JavaScript project for Pokemon enthusiasts
            who want to re-experience the classic, “Who’s that Pokemon?”.
          </p>
        </div>
        <div className="project__card">test</div>
      </div>
    </section>
  );
}

export default Projects;
