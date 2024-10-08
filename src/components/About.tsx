import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";
import { AppContext } from '../context/AppContext';

const About: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const context = useContext(AppContext);

    if (!context) {
        throw new Error('About must be used within an AppProvider');
    }


    return (
        <div id="about" className="about-container">
            <div className="about-photo" data-aos="fade-up">
                <img src="/images/background/3uNjMGZ71TU.jpg" alt="Anton Khadzko" />
            </div>
            <div className="about-content" data-aos="fade-up">
                <h2 className="about-header">
                    PERSONAL TRAINING WITH{" "}
                    <span className="trainer-name">ANTON KHADZKO</span>
                </h2>
                <div className="about-description" data-aos-delay="300">
                    <ul className="achievements-list">
                        <li>Personal Trainer with over 10 years of experience</li>
                        <li>International Master of Sports in Powerlifting WRPF</li>
                        <li>Two-time World Champion WRPF</li>
                        <li>8-time Absolute Record Holder of the Republic of Belarus</li>
                        <li>World Cup Winner</li>
                    </ul>
                    <p className="about-text">
                        A personal trainer is a fitness professional who helps people to
                        identify their personal health and fitness goals, designs exercise
                        and fitness programs, and educates and motivates people to help
                        them to safely and effectively reach their health and fitness
                        goals. My goal is to help people realize their dreams, become the
                        best version of themselves, and stay healthy throughout their
                        lives.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
