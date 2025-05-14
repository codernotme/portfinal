/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BookIcon } from "lucide-react";
import { useEffect, useState } from "react";
interface ResumeProps {
  className?: string;
}

export default function Resume({ className = "" }: ResumeProps) {
  const [showButton, setShowButton] = useState(true);

  return (
  <div>
      <article className={`resume ${className}`} data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box"><BookIcon /></div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">B.Tech in Computer Science and Engineering (Artificial Intelligence)</h4>
              <span>2022 - Present</span>
              <p className="timeline-text">Currently pursuing a B.Tech at PSIT Kanpur, specializing in Artificial Intelligence, with coursework covering data structures, software engineering, cloud computing, and backend development.</p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Senior Secondary (XII) - Science (Mathematics)</h4>
              <span>2021 - 2022</span>
              <p className="timeline-text">Completed my Senior Secondary education at SSDEC Kanpur, where I focused on mathematics and science, building a strong foundation in analytical problem-solving and logical reasoning.</p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box"><BookIcon /></div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Founder & CEO - Tackle Studioz</h4>
              <span>January 2025 - Present</span>
              <p className="timeline-text">Spearheading innovation at Tackle Studioz, a digital solutions company specializing in SaaS, PaaS, AI-driven products, and web development. Leading a team to build cutting-edge, accessible, and scalable solutions that empower businesses and individuals.</p>
            </li>
            <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Senior Dev Lead - Ignitia2k25 College Fest Website</h4>
            <span>Dec 2024 - Apr 2025</span>
            <p className="timeline-text">Leading the development of the Ignitia2k25 website for PSIT’s college fest, implementing scalable solutions and ensuring an interactive user experience.</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Developer - Ignitia2k24 College Fest Website</h4>
            <span>Dec 2023 - Apr 2024</span>
            <p className="timeline-text">Developed the frontend for PSIT’s college fest website, optimizing performance and enhancing UI/UX for smooth user interaction.</p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Internshala Student Partner</h4>
            <span>Jun 2023 - Aug 2023</span>
            <p className="timeline-text">Promoted Internshala’s programs, conducted marketing activities, and helped students discover career development opportunities.</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box"><BookIcon /></div>
          <h3 className="h3">Projects</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">VYBE - Connect, Collaborate, and Thrive</h4>
            <span>Nov 2024 - Present</span>
            <p className="timeline-text">Built a social platform empowering students, mentors, and communities to connect meaningfully using Next.js, Convex, Clerk, and TypeScript.</p>
          </li>
          <li className="timeline-item">
          <h4 className="h4 timeline-item-title">ECHO - Social Media Platform</h4>
          <span>Jul 2024 - Sep 2024</span>
          <p className="timeline-text">Developed a social media platform with real-time chat features to foster community engagement, leveraging Next.js, Convex, and Clerk.</p>
        </li>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">Kirby Game</h4>
          <span>Jun 2024</span>
          <p className="timeline-text">Designed and developed an interactive Kirby game using Vite and TypeScript, receiving positive user feedback on gameplay experience.</p>
        </li>
      </ol>
    </section>
    <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Development</h5>
              <data value="90">90%</data>
            </div>
            <div className="skills-progress-bg">
              <div className="skills-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend Development</h5>
              <data value="85">85%</data>
            </div>
            <div className="skills-progress-bg">
              <div className="skills-progress-fill" style={{ width: '85%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend Development</h5>
              <data value="80">80%</data>
            </div>
            <div className="skills-progress-bg">
              <div className="skills-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Cloud & DevOps</h5>
              <data value="75">75%</data>
            </div>
            <div className="skills-progress-bg">
              <div className="skills-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Database Management</h5>
              <data value="80">80%</data>
            </div>
            <div className="skills-progress-bg">
              <div className="skills-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>
        </ul>
      </section>
      <br/>
      {showButton && (
        <div className="fixed-button">
          <button className="button" onClick={() => window.open('/resume_aryanbajpai.pdf', '_blank')}>
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              height="40"
              width="40"
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
            <span className="button__text">Download</span>
          </button>
        </div>
      )}
    </article>
  </div>
  );
}
