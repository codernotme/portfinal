"use client";
import { useEffect } from "react";
import { Image } from "@heroui/react";
import { XIcon } from "lucide-react";

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
                        <h3 className="h3 tackle-title">Want to know about Tackle Studioz?</h3>
                        <section className="about-text">
                            <p>Tackle Studioz is a cutting-edge digital solutions company dedicated to crafting innovative and accessible technology. From SaaS and PaaS products to AI-driven solutions and custom web development, we bring ideas to life with creativity and precision. Our mission is to make high-quality digital experiences available to everyone, helping businesses and individuals turn their visions into reality.</p>
                            <p>Founded by me. Tackle Studioz is driven by a vision to revolutionize the digital landscape. We believe in innovation, accessibility, and impact, striving to build solutions that empower users and redefine possibilities. Whether it's developing our own tech products or helping businesses scale, we are committed to pushing the boundaries of what's possible. </p>
                            <button className="tackle-btn"><a href="https://tacklestudioz.com" target="_blank"><div className="tackle"><span className="text">Discover</span>
                                <span className="svg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="20"
                                        viewBox="0 0 38 15"
                                        fill="none"
                                    >
                                        <path
                                            fill="white"
                                            d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                                        ></path>
                                    </svg>
                                </span>
                            </div></a></button>
                        </section>
                    </section>
                </article>
            </div>
        </>
    );
}