import React, { useEffect, useState } from "react";

const links = [
    { name: "Home", to: "#home" },
    {
        name: "Yacht Rent",
        to: "#fleet",
        sub: ["Our Yachts", "Special Offers"]
    },
    {
        name: "Destinations",
        to: "#destinations",
        sub: ["Popular Destinations", "Destination Guide"]
    },
    {
        name: "Blog",
        to: "#blog",
        sub: ["Blog Grid", "Latest News"]
    },
    { name: "Contact", to: "#contact" }
];

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setCursor({ x: e.clientX, y: e.clientY });
            setCursorVisible(true);
        };

        const hideCursor = () => setCursorVisible(false);
        const showCursor = () => setCursorVisible(true);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", hideCursor);
        document.addEventListener("mouseenter", showCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", hideCursor);
            document.removeEventListener("mouseenter", showCursor);
        };
    }, []);

    return (
           <>
            <header className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="brand" href="#home">
                            <span className="brand-icon">
                                <i className="bi bi-water"></i>
                            </span>

                            <span className="brand-name">
                                Trip<span>Zap</span>
                                <small>YACHT & BOAT RENTAL</small>
                            </span>
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={() => setMenu(!menu)}
                            aria-label="Buka menu"
                        >
                            <i className={`bi ${menu ? "bi-x-lg" : "bi-list"}`}></i>
                        </button>

                        <div className={`navbar-collapse ${menu ? "show" : ""}`}>
                            <ul className="navbar-nav ms-auto align-items-lg-center">
                                {links.map((link) => (
                                    <li className="nav-item dropdown" key={link.name}>
                                        <a
                                            className="nav-link"
                                            href={link.to}
                                            onClick={() => setMenu(false)}
                                        >
                                            {link.name}

                                            {link.sub && (
                                                <i className="bi bi-chevron-down ms-2"></i>
                                            )}
                                        </a>

                                        {link.sub && (
                                            <div className="drop">
                                                {link.sub.map((sub) => (
                                                    <a
                                                        href={link.to}
                                                        key={sub}
                                                        onClick={() => setMenu(false)}
                                                    >
                                                        {sub}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                               <li className="nav-item nav-tools">
                                    <button
                                        className="search-toggle"
                                        onClick={() => setSearch(!search)}
                                        aria-label="Cari"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>

                                    <a className="quote" href="#contact">
                                        Get A Quote
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {search && (
                    <form
                        className="search-box"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSearch(false);
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Type your keyword..."
                            autoFocus
                        />

                        <button type="submit" aria-label="Cari">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                )}
            </header>
 {/* Kontak yang selalu muncul di kanan bawah */}
            <div className="contact-widget">
                <div className="contact-person">
                    <span className="contact-avatar">
                        <i className="bi bi-person-fill"></i>
                    </span>
                    <span>Marty</span>
                </div>

                <a className="contact-message" href="#contact">
                    Hi! What can I do for you?
                </a>
            </div>

            {/* Lingkaran yang mengikuti kursor */}
            <div
                className={`cursor-ring ${cursorVisible ? "visible" : ""}`}
                style={{
                    left: `${cursor.x}px`,
                    top: `${cursor.y}px`
                }}
            />
        </>
    );
}