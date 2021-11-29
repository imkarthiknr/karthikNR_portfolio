import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project1({ id }) {
  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image"
          src="/images/screenshot-1.png"
          srcset="/images/screenshot-1.png 750w, /images/screenshot-1.png 1468w"
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">MEDSTAZA</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Web application</span> project
            used for tracking medical records. Allows admin to{" "}
            <span className="project__specialText">scan QR code</span> and{" "}
            <span className="project__specialText">get medicine details</span>. The
            collected record stored in DB and number of reports
            designed for admin panel, using the{" "}
            <span className="project__specialText">StreamLit</span>.
          </p>
          <p className="project__tech project__body">
            &gt; jQuery · HTML · CSS · MySQL · Python . StreamLit
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Karthik1804/Medstaza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
