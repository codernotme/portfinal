import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faBehance,
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

export default function SocialFooter() {
  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-3 px-4 md:px-6 lg:px-8 rounded-full shadow-lg flex space-x-4 md:space-x-6 lg:space-x-8 justify-center items-center"
      style={{
        backdropFilter: "blur(10px)",
        border: "0.01px solid",
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.5)" // Added background for better visibility
      }}
    >
      <TooltipProvider>
        {[
          { href: "https://www.instagram.com/outta_urreach/", icon: faInstagram, label: "Instagram" },
          { href: "https://www.behance.net/codernotme", icon: faBehance, label: "Behance" },
          { href: "https://twitter.com/codernotme", icon: faTwitter, label: "Twitter" },
          { href: "https://www.linkedin.com/in/codernotme/", icon: faLinkedin, label: "LinkedIn" },
          { href: "https://github.com/codernotme", icon: faGithub, label: "GitHub" },
          { href: "https://www.buymeacoffee.com/codernotme", icon: faSackDollar, label: "Tip" },
        ].map(({ href, icon, label }, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 lg:p-4 hover:bg-secondary-foreground/10 rounded-full transition-all duration-300 hover:scale-110"
                aria-label={label} // Accessibility improvement
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
