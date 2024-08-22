import React from "react";
import SocialComponent from "./SocialComponent";
export default function Socials() {
  return (
    <>
      <main
        className="flex flex-col soc items-center justify-center"
        id="social"
      >
        <div className="nav">
          <SocialComponent />
        </div>
      </main>
    </>
  );
}
