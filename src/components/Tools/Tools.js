import React from "react";
import "./Tools.scss";

const Tools = () => {
  return (
    <div className="tools">
      <section className="container" data-aos="fade-up">
        <h1 id="tools">Tools</h1>
        <div className="row">
          <img alt="aws" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
          <img alt="babel" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
          <img alt="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
          <img alt="figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          <img alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <img alt="github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <img alt="heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
          <img alt="npm" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
          <img alt="vs-code" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
          <img alt="slack" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" />
        </div>
      </section>
    </div>
  );
};

export default Tools;
