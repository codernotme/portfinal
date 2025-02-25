"use client";
import { Image } from "@heroui/react";

interface BlogProps {
    className?: string;
}

export default function Blog({ className = "" }: BlogProps) {
    return (
        <article className={`blog ${className}`} data-page="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            <section className="blog-posts">
                <ul className="blog-posts-list">
                    <li className="blog-post-item">
                        <a href="https://codernotme.hashnode.dev/understanding-load-balancing-in-modern-cloudtech-companies">
                            <figure className="blog-banner-box">
                                <Image src="blog/balance.png" alt="Understanding Load Balancing in Modern CloudTech Companies" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Cloud Technology</p>
                                    <span className="dot"></span>
                                    <time dateTime="2024-05-15">May 15, 2024</time>
                                </div>

                                <h3 className="h3 blog-item-title">Understanding Load Balancing in Modern CloudTech Companies</h3>
                                <p className="blog-text">Explore the intricacies of load balancing in cloud environments, focusing on strategies to distribute workloads efficiently and ensure high availability.</p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="https://codernotme.hashnode.dev/decoding-dsa">
                            <figure className="blog-banner-box">
                                <Image src="blog/dsa.png" alt="Decoding DSA: Navigating Coding Challenges and Interviews" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Programming</p>
                                    <span className="dot"></span>
                                    <time dateTime="2024-05-12">May 12, 2024</time>
                                </div>

                                <h3 className="h3 blog-item-title">Decoding DSA: Navigating Coding Challenges and Interviews</h3>
                                <p className="blog-text">Delve into Data Structures and Algorithms (DSA), understanding their importance in computer science and how they form the foundation for efficient programming and problem-solving.</p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="https://codernotme.hashnode.dev/blockchain-technology-unpacking-its-potential-and-limitations-in-slow-motion">
                            <figure className="blog-banner-box">
                                <Image src="blog/blockchain.png" alt="Blockchain Technology: Unpacking Its Potential and Limitations in Slow Motion" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Blockchain</p>
                                    <span className="dot"></span>
                                    <time dateTime="2024-05-10">May 10, 2024</time>
                                </div>

                                <h3 className="h3 blog-item-title">Blockchain Technology: Unpacking Its Potential and Limitations in Slow Motion</h3>
                                <p className="blog-text">Examine the potential and challenges of blockchain technology, exploring its applications, benefits, and the reasons behind its gradual adoption.</p>
                            </div>
                        </a>
                    </li>

                    <li className="blog-post-item">
                        <a href="https://codernotme.hashnode.dev/the-serverless-revolution">
                            <figure className="blog-banner-box">
                                <Image src="blog/serverless.png" alt="The Serverless Revolution: A New Era of Agile and Cost-Effective Hosting" loading="lazy" />
                            </figure>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <p className="blog-category">Web Hosting</p>
                                    <span className="dot"></span>
                                    <time dateTime="2024-05-04">May 4, 2024</time>
                                </div>

                                <h3 className="h3 blog-item-title">The Serverless Revolution: A New Era of Agile and Cost-Effective Hosting</h3>
                                <p className="blog-text">Discover the principles of serverless architecture, its key features, and how it offers a more agile and cost-effective approach to web hosting compared to traditional methods.</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
}
