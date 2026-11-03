import { useEffect, useState } from "react";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

export default function App() {

    const [slide, setSlide] = useState(0);

    useEffect(() => {

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }

                });
            },
            { threshold: 0.12 }
        );

        document.querySelectorAll(".reveal").forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();

    }, []);

    return (
        <>
            <Header />

            <Hero
                slide={slide}
                setSlide={setSlide}
            />

            <Sections />

            <Footer />
        </>
    );
}