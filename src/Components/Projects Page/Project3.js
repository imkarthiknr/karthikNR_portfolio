import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      <div className="project__main">
        <img
          className="project__image"
          src="/images/screenshot-3.png"
          srcset="/images/screenshot-3.png 900w, /images/screenshot-3.png 1800w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">AirFone - Network Provider</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Web application</span> developed
           during internship period in Prodapt. Used for a Network operator company.
             <span className="project__specialText">OTP</span> sending through mail 
            and mobile number using API. Notifications{" "}
            <span className="project__specialText">sent through SMS</span>{" "}
            and the <span className="project__specialText">Payment</span>{" "}
            page designed for online payment.
          </p>
          <p className="project__tech project__body">
            &gt; Angular · FLASK . MySQL . FireBase
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/imkarthiknr/AirFone"
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

export default Project3;
