"use client";
import { useEffect } from "react";
import { Image } from "@heroui/react";
import { ChevronRight, XIcon } from "lucide-react";

interface AboutProps {
    className?: string;
}

export default function About({ className = "" }: AboutProps) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const testimonialsItems = document.querySelectorAll("[data-testimonials-item]") as NodeListOf<HTMLElement>;
            const modalContainer = document.querySelector("[data-modal-container]") as HTMLElement;
            const modalCloseBtn = document.querySelector("[data-modal-close-btn]") as HTMLElement;
            const overlay = document.querySelector("[data-overlay]") as HTMLElement;

            const modalImg = document.querySelector("[data-modal-img]") as HTMLImageElement;
            const modalTitle = document.querySelector("[data-modal-title]") as HTMLElement;
            const modalText = document.querySelector("[data-modal-text]") as HTMLElement;

            const testimonialsModalFunc = () => {
                modalContainer.classList.toggle("active");
                overlay.classList.toggle("active");
            };

            testimonialsItems.forEach((item) => {
                item.addEventListener("click", function () {
                    const avatar = this.querySelector("[data-testimonials-avatar]") as HTMLImageElement;
                    const title = this.querySelector("[data-testimonials-title]") as HTMLElement;
                    const text = this.querySelector("[data-testimonials-text]") as HTMLElement;

                    if (avatar && title && text) {
                        modalImg.src = avatar.src;
                        modalImg.alt = avatar.alt;
                        modalTitle.innerHTML = title.innerHTML;
                        modalText.innerHTML = text.innerHTML;
                    }

                    testimonialsModalFunc();
                });
            });

            // Close modal functionality
            modalCloseBtn.addEventListener("click", testimonialsModalFunc);
            overlay.addEventListener("click", testimonialsModalFunc);
        }
    }, []);

    return (
        <>
            <div id="about">
                <article className={`about ${className}`} data-page="about">
                    <header>
                        <h2 className="h2 article-title">About me</h2>
                    </header>

                    <section className="about-text">
                        <p>I&apos;m a dynamic Full-Stack Developer from Kanpur, India, specializing in building high-performance web applications with Next.js, React, and TypeScript. My expertise extends to cloud integration, backend architecture, and database optimization, ensuring scalable and efficient solutions.</p>
                        <p>My goal is to create intuitive, user-centered digital experiences that seamlessly merge functionality with aesthetics. From developing interactive games to architecting social platforms, I bring creativity and technical excellence to every project. Recently, I was recognized as a Top 10 Finalist at HackIITK 2k24, highlighting my problem-solving skills and innovative approach to development.</p>
                    </section>

                    <section className="service">
                        <h3 className="h3 service-title">What I&apos;m doing</h3>
                        <ul className="service-list">
                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="/images/innovate.png" alt="icon" width="100" />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">Innovator</h4>
                                    <p className="service-item-text">
                                        Leading innovative digital solutions at <strong>Tackle Studioz</strong>.
                                    </p>
                                </div>
                            </li>
                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="/images/webbuild.png" alt="icon" width="100" />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">Full-Stack Development</h4>
                                    <p className="service-item-text">
                                        Developing high-performance web & mobile apps with <strong>Next.js, React, Node.js, and MongoDB</strong>.
                                    </p>
                                </div>
                            </li>
                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="/images/ai.png" alt="icon" width="100" />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">AI & Automation</h4>
                                    <p className="service-item-text">
                                        Implementing <strong>automation, ML models, and chatbots</strong> to enhance efficiency.
                                    </p>
                                </div>
                            </li>
                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="/images/ui.png" alt="icon" width="100" />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">UI/UX & Branding</h4>
                                    <p className="service-item-text">
                                        Designing interfaces with <strong>Figma, Tailwind CSS, and Framer Motion</strong>.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="testimonials">
                        <h3 className="h3 testimonials-title">Testimonials</h3>

                        <ul className="testimonials-list has-scrollbar">
                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <Image src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="avatar" data-testimonials-avatar width="60" />
                                    </figure>

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Anshu Gupta</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>Aryan created a modern and clean corporate identity for us. The design received a lot of praise from colleagues and visitors. He is very experienced and attentive to client needs.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <Image src="https://i.postimg.cc/DwY0yHtx/avatar-2.png" alt="avatar" data-testimonials-avatar width="60" />
                                    </figure>

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Kritika Srivastava</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>Working with Aryan was a pleasure. His attention to detail, web design skills, and professional approach to timelines and processes were impressive.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <Image src="https://i.postimg.cc/fRFWhX9F/avatar-3.png" alt="avatar" data-testimonials-avatar width="60" />
                                    </figure>

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Omisha Singh</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>I couldn&apos;t be happier with the website that Aryan created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <Image src="https://i.postimg.cc/JzBWVhW4/my-avatar.png" alt="avatar" data-testimonials-avatar width="60" />
                                    </figure>

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Ayush Verma</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>I was overwhelmed with the thought of redesigning my online store, but Aryan made the process seamless. The site is not only visually appealing but also optimized for conversions. I&apos;ve seen a 50% increase in traffic since the launch!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <div className="modal-container" data-modal-container>
                        <div className="overlay" data-overlay></div>

                        <section className="testimonials-modal">
                            <button className="modal-close-btn" data-modal-close-btn><XIcon /></button>

                            <div className="modal-img-wrapper">
                                <figure className="modal-avatar-box">
                                    <Image src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="Daniel Lewis" width="80" data-modal-img />
                                </figure>

                                <Image src="https://i.postimg.cc/mZ00RwX7/icon-quote.png" alt="quote icon" />
                            </div>

                            <div className="modal-content">
                                <h4 className="h3 modal-title" data-modal-title>Daniel Lewis</h4>
                                <time dateTime="2023-06-14">14 June, 2023</time>

                                <div className="modal-text" data-modal-text>
                                    <p>Aryan was hired to create a corporate identity. It&apos;s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/*<section className="clients">
                        <h3 className="h3 clients-title">Clients</h3>

                        <ul className="clients-list has-scrollbar">
                            <li className="clients-item">
                                <a href="#"><Image src="https://i.postimg.cc/YqfKyG66/logo-1-color.png" alt="logo" /></a>
                            </li>

                            <li className="clients-item">
                                <a href="#"><Image src="https://i.postimg.cc/fWm6JtgG/logo-2-color.png" alt="logo" /></a>
                            </li>

                            <li className="clients-item">
                                <a href="#"><Image src="https://i.postimg.cc/Bb07xpwd/logo-3-color.png" alt="logo" /></a>
                            </li>

                            <li className="clients-item">
                                <a href="#"><Image src="https://i.postimg.cc/hv1yMmkh/logo-4-color.png" alt="logo" /></a>
                            </li>

                            <li className="clients-item">
                                <a href="#"><Image src="https://i.postimg.cc/ry1P86Dc/logo-5-color.png" alt="logo" /></a>
                            </li>

                            <li className="clients-item">
                                <a href="#"><Image src="https://i.postimg.cc/SsWDN8NV/logo-6-color.png" alt="logo" /></a>
                            </li>
                        </ul>
                    </section>*/}
                    <section className="tackle-section">
                        <div className="tackle">
                        <h3 className="h3 tackle-title">Want to know about Tackle Studioz?</h3>
                        <section className="about-text">
                            <p>Tackle Studioz is a cutting-edge digital solutions company dedicated to crafting innovative and accessible technology. From SaaS and PaaS products to AI-driven solutions and custom web development, we bring ideas to life with creativity and precision. Our mission is to make high-quality digital experiences available to everyone, helping businesses and individuals turn their visions into reality.</p>
                            <p>Founded by me. Tackle Studioz is driven by a vision to revolutionize the digital landscape. We believe in innovation, accessibility, and impact, striving to build solutions that empower users and redefine possibilities. Whether it's developing our own tech products or helping businesses scale, we are committed to pushing the boundaries of what's possible.</p>
                        </section>
                        </div>
                            <a href="https://tacklestudioz.com" className="tackle-btn" target="_blank">
                               Know More
                                <ChevronRight size={24} className="ion-icon" />
                            </a>
                    </section>
                </article>
            </div>
        </>
    );
}