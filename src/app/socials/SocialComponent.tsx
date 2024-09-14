import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faTwitter,
  faLinkedin,
  faDiscord,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export default function SocialFooter() {
  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2  py-3 px-4 md:px-6 lg:px-8 rounded-full shadow-lg flex space-x-4 md:space-x-6 lg:space-x-8 justify-center items-center"
      style={{
        backdropFilter: "blur(10px)",
        border: "0.01px solid",
        zIndex: 9999
      }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.instagram.com/outta_urreach/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 lg:p-4 hover:bg-secondary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.behance.net/codernotme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 lg:p-4 hover:bg-secondary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faBehance} size="lg" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Behance</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://twitter.com/codernotme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 lg:p-4 hover:bg-secondary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://www.linkedin.com/in/codernotme/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 lg:p-4 hover:bg-secondary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 lg:p-4 hover:bg-secondary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Discord</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <a
              href="https://github.com/codernotme"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 lg:p-4 hover:bg-secondary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
