import React from 'react';
import './Poster.css';
import logo from './diremslogo.jpg'; // Uncomment and provide correct path

const Poster = () => {
    return (
        <div className="poster-outer-wrapper">
            <article className="academic-sheet">
                {/* TOP ARCHITECTURE: INSTITUTIONAL BRANDING */}
                <header className="poster-top-header">
                    <div className="institutional-branding">
                        {/* Remove this comment and use the <img> tag when you have a logo file
                        <img src={logo} alt="Institution Logo" className="college-logo" />
                        */}
                        <div className="college-logo-placeholder">LOGO</div>
                        <div className="college-name-box">
                            <span className="trust-micro-text">SUMAN EDUCATION TRUST'S</span>
                            <h2 className="inst-main-title">DILKAP RESEARCH INSTITUTE OF ENGINEERING AND MANAGEMENT STUDIES</h2>
                        </div>
                    </div>

                    <div className="header-divider"></div>

                    {/* PROJECT IDENTITY */}
                    <div className="project-identity">
                        <div className="meta-tags">
                            <span className="tag-group">GROUP 03</span>
                            <span className="tag-team">TEAM FLEXION</span>
                        </div>
                        <h1 className="hero-title">FLEXON</h1>
                        <p className="hero-subtitle">BIO-MIMETIC ROBOTIC INTERFACE SYSTEM</p>
                    </div>
                </header>

                {/* PERSONNEL DATA STRIPE */}
                <div className="personnel-data-bar">
                    <div className="investigator-block">
                        <span className="data-label">CHIEF INVESTIGATORS</span>
                        <p className="names">Shreyas Chetan Dalvi • Rudra • Shivam • Atharva • Khali</p>
                    </div>
                    <div className="guide-block">
                        <span className="data-label">PROJECT ADVISOR</span>
                        <p className="guide-placeholder">__________________________________</p>
                    </div>
                </div>

                {/* THE CORE GRID */}
                <main className="research-grid">
                    
                    {/* LEFT: THEORETICAL BASIS */}
                    <section className="grid-col side-col">
                        <div className="content-block">
                            <h3 className="grid-label">Project Abstract</h3>
                            <p>
                                Conventional robotic interfaces rely on rigid binary inputs, limiting degrees of freedom. 
                                <strong> FLEXON</strong> utilizes high-fidelity flex sensing to translate human biological intent 
                                into 1:1 mechanical actuation, bridging the gap between human dexterity and robotic execution.
                            </p>
                        </div>

                        <div className="content-block hardware-spec">
                            <h3 className="grid-label">Hardware Stack</h3>
                            <ul className="spec-list">
                                <li><span className="spec-id">MCU</span> Arduino Uno Rev3</li>
                                <li><span className="spec-id">SNS</span> Resistive Flex Sensors</li>
                                <li><span className="spec-id">ACT</span> High-Torque Servo Motors</li>
                                <li><span className="spec-id">PWR</span> 5V Regulated Bus</li>
                                <li><span className="spec-id">LOG</span> 1KΩ Precision Resistors</li>
                            </ul>
                        </div>

                        <div className="content-block safety-quote">
                            <blockquote className="hinton-quote">
                                “Hinton estimates there is a 10% to 20% chance that AI could eventually threaten human survival.”
                            </blockquote>
                            <cite className="quote-cite">— Geoffrey Hinton</cite>
                        </div>
                    </section>

                    {/* CENTER: SCHEMATIC & VISUALS */}
                    <section className="grid-col center-col">
                        <div className="hero-visual-frame">
                            <div className="img-placeholder">
                                <span className="frame-text">PRIMARY PROTOTYPE ASSEMBLY</span>
                            </div>
                            <span className="fig-tag">FIGURE 1.0</span>
                        </div>

                        <div className="technical-logic-box">
                            <h3 className="grid-label accent">Solution Logic</h3>
                            <p>
                                <strong>Voltage Division & Mapping:</strong> Mechanical strain on sensors alters variable 
                                resistance, creating a measurable analog voltage drop. This is digitized and mapped 
                                to a 180° arc, ensuring real-time mimicry of human finger movement.
                            </p>
                        </div>

                        <div className="secondary-visuals">
                            <div className="sub-visual">
                                <div className="img-placeholder small">CIRCUIT</div>
                                <span className="fig-tag">FIG 1.1</span>
                            </div>
                            <div className="sub-visual">
                                <div className="img-placeholder small">LOGIC</div>
                                <span className="fig-tag">FIG 1.2</span>
                            </div>
                        </div>
                    </section>

                    {/* RIGHT: DEPLOYMENT & FUTURE */}
                    <section className="grid-col side-col">
                        <div className="content-block">
                            <h3 className="grid-label">Practical Utility</h3>
                            <div className="util-tags">
                                <span className="util-tag">Defense (EOD)</span>
                                <span className="util-tag">Tele-Surgery</span>
                                <span className="util-tag">Deep Sea EVA</span>
                                <span className="util-tag">Space Research</span>
                                <span className="util-tag">Hazardous Material</span>
                            </div>
                        </div>

                        <div className="content-block">
                            <h3 className="grid-label">Key Advantages</h3>
                            <ul className="impact-list">
                                <li><strong>Safety:</strong> Eliminates human presence in lethal zones.</li>
                                <li><strong>Precision:</strong> Intuitive control via natural hand gestures.</li>
                                <li><strong>Scalability:</strong> Modular design for multi-digit expansion.</li>
                            </ul>
                        </div>

                        <div className="content-block conclusion-card">
                            <h3 className="grid-label">Conclusion</h3>
                            <p>
                                The FLEXON prototype demonstrates that intuitive human motion can be successfully 
                                digitized, offering a robust solution for high-risk manual operations globally.
                            </p>
                        </div>

                        <footer className="scientific-footer">
                            <span className="footer-line">RESEARCH PROTOTYPE 2026</span>
                            <h4 className="acknowledgment">THANK YOU</h4>
                        </footer>
                    </section>
                </main>
            </article>
        </div>
    );
};

export default Poster;