"use client";

interface NavbarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
    const handleNavClick = (page: string) => {
        setActivePage(page);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className={`navbar-item ${activePage === "about" ? "active" : ""}`}>
                    <button
                        className="navbar-link"
                        onClick={() => handleNavClick("about")}
                    >
                        About
                    </button>
                </li>
                <li className={`navbar-item ${activePage === "resume" ? "active" : ""}`}>
                    <button
                        className="navbar-link"
                        onClick={() => handleNavClick("resume")}
                    >
                        Resume
                    </button>
                </li>
                <li className={`navbar-item ${activePage === "contests" ? "active" : ""}`}>
                    <button
                        className="navbar-link"
                        onClick={() => handleNavClick("contests")}
                    >
                        Achievements
                    </button>
                </li>
                <li className={`navbar-item ${activePage === "portfolio" ? "active" : ""}`}>
                    <button
                        className="navbar-link"
                        onClick={() => handleNavClick("portfolio")}
                    >
                        Work
                    </button>
                </li>
                <li className={`navbar-item ${activePage === "blog" ? "active" : ""}`}>
                    <button
                        className="navbar-link"
                        onClick={() => handleNavClick("blog")}
                    >
                        Blog
                    </button>
                </li>
                <li className={`navbar-item ${activePage === "contact" ? "active" : ""}`}>
                    <button
                        className="navbar-link"
                        onClick={() => handleNavClick("contact")}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}