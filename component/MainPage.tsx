"use client";
import { Image } from "@heroui/react";
import { Calendar, ChevronDownIcon, GithubIcon, LinkedinIcon, LocateIcon, MailIcon, PhoneIcon, TwitterIcon, } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Main() {
    const elementToggleFunc = (elem: HTMLElement) => {
        elem.classList.toggle("active");
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Sidebar functionality
            const sidebar = document.querySelector("[data-sidebar]") as HTMLElement;
            const sidebarBtn = document.querySelector("[data-sidebar-btn]") as HTMLElement;

            sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

            return () => {
                sidebarBtn.removeEventListener("click", () => elementToggleFunc(sidebar));
            };
        }
    }, []);

    return (
        <>
            <aside className="sidebar " data-sidebar>
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <Image src="/ary.png" alt="avatar" width="80" height="80" />
                    </figure>

                    <div className="info-content">
                        <h1 className="name" title="Aryan Bajpai">Aryan Bajpai</h1>
                        <div className="tile">
                            <p className="title">Founder and Technologist</p>
                        </div>
                    </div>

                    <button className="info-more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>
                        <ChevronDownIcon className="ion-icon" />
                    </button>
                </div>

                <div className="sidebar-info-more">
                    <div className="separator"></div>

                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <MailIcon className="ion-icon" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Email</p>

                                <a href="mailto:aryanbajpai2411@gmail.com" className="contact-link">aryanbajpai2411@gmail.com</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <PhoneIcon className="ion-icon" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Phone</p>

                                <a href="tel:+91 9214144637" className="contact-link">+91 9214144637</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <Calendar className="ion-icon" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>

                                <time dateTime="2003-11-24">November 24, 2003</time>
                            </div>
                        </li>

                        <li className="contact-item">
                            <div className="icon-box">
                                <LocateIcon className="ion-icon" />
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Kanpur, Uttar Pradesh, India</address>
                            </div>
                        </li>
                    </ul>

                    <div className="separator"></div>

                    <ul className="social-list">
                        <li className="social-item"><Link href="https://www.linkedin.com/in/codernotme" className="social-link"><LinkedinIcon className="ion-icon" /></Link></li>
                        <li className="social-item"><Link href="https://github.com/codernotme" className="social-link"><GithubIcon className="ion-icon" /></Link></li>
                        <li className="social-item"><Link href="https://x.com/codernotme" className="social-link"><TwitterIcon className="ion-icon" /></Link></li>
                    </ul>
                </div>
            </aside>
        </>
    )
}