import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            DOCERE - App for COVID'19 Prevention
          </h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Mobile Application</span> developed
            to give various informations to public to get awarness about COVID-19 virus.
            providing online checkup with a help of chat-bot,
            different <span className="project__specialText">COVID-19</span>{" "}
            data including cases, test, and vaccines.
          </p>
          <p className="project__tech project__body">
            &gt; Java · Discord API · COVID19-India APIs
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Karthik1804/docere-coronapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/screenshot-2.jpg"
          srcset="/images/screenshot-2.jpg 750w, /images/screenshot-2.jpg 1468w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
