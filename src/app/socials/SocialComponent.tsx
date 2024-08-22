import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faBehance,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"; // Import the icons from @fortawesome/free-brands-svg-icons

const SocialsPage: React.FC = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="button4">
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <span>
            <a
              href="https://www.instagram.com/outta_urreach/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </span>
        </div>

        <div className="button4">
          <div className="icon">
            <FontAwesomeIcon icon={faBehance} />
          </div>
          <span>
            <a
              href="https://www.behance.net/codernotme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
          </span>
        </div>

        <div className="button4">
          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <span>
            <a
              href="https://twitter.com/codernotme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </span>
        </div>

        <div className="button4">
          <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <span>
            <a
              href="https://www.linkedin.com/in/codernotme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </div>

        <div className="button4">
          <div className="icon">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
          <span>
            <a
              href="https://discord.com/invite/your-invite-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </span>
        </div>

        <div className="button4">
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <span>
            <a
              href="https://github.com/codernotme"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialsPage;
