import { PlaneIcon } from "lucide-react"
import { useEffect } from "react";

interface ContactProps {
    className?: string;
}

export default function Contact({ className = "" }: ContactProps) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Contact Form validation
            const form = document.querySelector("[data-form]") as HTMLFormElement;
            const formInputs = document.querySelectorAll("[data-form-input]") as NodeListOf<HTMLInputElement>;
            const formBtn = document.querySelector("[data-form-btn]") as HTMLButtonElement;

            formInputs.forEach((input) => {
                input.addEventListener("input", () => {
                    if (form.checkValidity()) {
                        formBtn.removeAttribute("disabled");
                    } else {
                        formBtn.setAttribute("disabled", "");
                    }
                });
            });
        }
    }, []);

    return (
        <div>
            <article className={`contact ${className}`} data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                <section className="mapbox" data-mapbox>
                    <figure>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.51527968021!2d80.25598176327401!3d26.447150072041357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1740567820317!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            loading="lazy">
                        </iframe>
                    </figure>
                </section>

                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>

                    <form action="#" className="form" data-form>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                required
                                data-form-input
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email Address"
                                required
                                data-form-input
                            />
                        </div>

                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            required
                            data-form-input>
                        </textarea>

                        <button className="form-btn" type="submit" disabled data-form-btn>
                            <PlaneIcon />
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </div>
    );
}