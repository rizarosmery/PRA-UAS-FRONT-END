import React from "react";

const slides = [
    {
        tag: "EXPLORE THE OCEAN",
        title: <>Boats and Yacht <br /> Rentals</>,
        desc: "Enjoy the perfect service and luxury",
        img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=2200&q=90",
        position: "center 45%"
    },
    {
        tag: "DISCOVER THE BLUE",
        title: <>Your Journey, <br /> Our Passion</>,
        desc: "Experience unforgettable moments at sea",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2200&q=90",
        position: "center 50%"
    },
    {
        tag: "SAIL IN STYLE",
        title: <>Escape Into <br /> Luxury</>,
        desc: "Find your perfect yacht for every adventure",
        img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=2200&q=90",
        position: "center 50%"
    }
];

export default function Hero({ slide, setSlide }) {
    const s = slides[slide];

    return (
        <>
            <section
                id="home"
                className="hero"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(3, 25, 38, 0.65),
                            rgba(3, 25, 38, 0.12)
                        ),
                        url("${s.img}")
                    `,
                    backgroundPosition: s.position
                }}
            >
                   <div className="container hero-inner">
                    <div className="hero-copy" key={slide}>
                        <span className="hero-eyebrow">
                            <i className="bi bi-water"></i>
                            {s.tag}
                        </span>

                        <h1>{s.title}</h1>

                        <p>{s.desc}</p>

                        <a className="hero-button" href="#fleet">
                            Discover More
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>

                    <div className="slide-controls">
                        <span className="slide-number">
                            0{slide + 1}
                        </span>

                        <div className="slide-dots">
                            {slides.map((item, i) => (
                                <button
                                    key={i}
                                    className={i === slide ? "active" : ""}
                                    onClick={() => setSlide(i)}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <span>03</span>
                    </div>
                </div>

                <div className="side-note">
                    LUXURY YACHT EXPERIENCE — EST. 2024
                </div>
            </section>

            {/* Form pencarian yacht */}
            <section className="booking-section">
                <div className="container">
                    <form
                        className="booking"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Thank you! Our team will contact you.");
                        }}
                    >
                        <div className="booking-heading">
                            <span>PLAN YOUR TRIP</span>
                            <h2>Find Your Yacht</h2>
                        </div>
                                 <div className="booking-fields">
                            <label>
                                <span>Pick-Up Date</span>
                                <input type="date" required />
                            </label>

                            <label>
                                <span>Drop-Off Date</span>
                                <input type="date" required />
                            </label>

                            <label>
                                <span>Select Make</span>
                                <select defaultValue="" required>
                                    <option value="" disabled>
                                        Select yacht
                                    </option>
                                    <option value="Luxury Yacht">Luxury Yacht</option>
                                    <option value="Motor Yacht">Motor Yacht</option>
                                    <option value="Sailing Yacht">Sailing Yacht</option>
                                </select>
                            </label>

                            <button type="submit" className="booking-button">
                                Search Now
                                <i className="bi bi-arrow-up-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}