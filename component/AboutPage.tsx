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
                        <p>I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                        <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                    </section>

                    <section className="service">
                        <h3 className="h3 service-title">What I&apos;m doing</h3>

                        <ul className="service-list">
                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="https://i.postimg.cc/4389jZkP/icon-design.png" alt="icon" width="40" />
                                </div>

                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">Web Design</h4>
                                    <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
                                </div>
                            </li>

                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png" alt="icon" width="40" />
                                </div>

                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">Web development</h4>
                                    <p className="service-item-text">High-quality development of sites at the professional level.</p>
                                </div>
                            </li>

                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="https://i.postimg.cc/xjLdzYxZ/icon-app.png" alt="icon" width="40" />
                                </div>

                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">Mobile apps</h4>
                                    <p className="service-item-text">Professional development of applications for iOS and Android.</p>
                                </div>
                            </li>

                            <li className="service-item">
                                <div className="service-icon-box">
                                    <Image src="https://i.postimg.cc/0NL8zHpx/icon-photo.png" alt="icon" width="40" />
                                </div>

                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">Photography</h4>
                                    <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
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

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel Lewis</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>Richard was hired to create a corporate identity. It&apos;s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <Image src="https://i.postimg.cc/DwY0yHtx/avatar-2.png" alt="avatar" data-testimonials-avatar width="60" />
                                    </figure>

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica Miller</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>Working with Richard has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and his professional approach to our timelines and processes.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <Image src="https://i.postimg.cc/fRFWhX9F/avatar-3.png" alt="avatar" data-testimonials-avatar width="60" />
                                    </figure>

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily Evans</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>I couldn&apos;t be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="testimonials-item">
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <Image src="https://i.postimg.cc/zXv1Xv81/avatar-4.png" alt="avatar" data-testimonials-avatar width="60" />
                                    </figure>

                                    <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry Williams</h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>I was overwhelmed with the thought of redesigning my online store, but Richard made the process seamless. The site is not only visually appealing but also optimized for conversions. I&apos;ve seen a 50% increase in traffic since the launch!</p>
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
                                    <p>Richard was hired to create a corporate identity. It&apos;s modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="clients">
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
                    </section>
                </article>
            </div>
        </>
    );
}