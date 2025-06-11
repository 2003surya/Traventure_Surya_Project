import React, { useState, useEffect, useContext } from 'react';
import logo from "../assets/logo.png";
import "../Styles/EducationalTrips.css"
import { IoCloseCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import EmailContext from '../context/EmailContext';

const EducationalTrips = () => {
    const { email } = useContext(EmailContext);
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const openBar = () => {
        document.getElementById('barList').style.left = '0';
    };

    const closeBar = () => {
        document.getElementById('barList').style.left = '-100%';
    };
    
    const eduTripData = [
        {
            id: 1,
            tripName: "Historical Wonders of Delhi",
            duration: "2 Days",
            for: "Grades 6-12",
            highlights: [
                "Visit to Red Fort and Qutub Minar",
                "Interactive session at National Museum",
                "Heritage walk in Chandni Chowk",
                "Workshop on Mughal architecture"
            ],
            learningOutcomes: [
                "Understanding of medieval Indian history",
                "Appreciation of architectural styles",
                "Cultural awareness of Delhi's heritage"
            ],
            pricePerStudent: "₹2,500",
            includes: ["Transport", "Entry fees", "Guide", "Lunch"]
        },
        {
            id: 2,
            tripName: "Science Exploration in Bangalore",
            duration: "1 Day",
            for: "Grades 4-10",
            highlights: [
                "Visits to Visvesvaraya Industrial & Technological Museum",
                "Interactive science experiments",
                "Planetarium show",
                "Meet with scientists at ISRO"
            ],
            learningOutcomes: [
                "Hands-on experience with scientific principles",
                "Inspiration for STEM careers",
                "Understanding of space technology"
            ],
            pricePerStudent: "₹1,800",
            includes: ["Transport", "Museum entry", "Workshop materials", "Snacks"]
        },
        {
            id: 3,
            tripName: "Wildlife Conservation in Ranthambore",
            duration: "3 Days",
            for: "Grades 8-12",
            highlights: [
                "Safari in Ranthambore National Park",
                "Conservation workshop by forest officials",
                "Bird watching session",
                "Documentary screening and discussion"
            ],
            learningOutcomes: [
                "Understanding of ecosystem balance",
                "Awareness of conservation challenges",
                "Appreciation of biodiversity"
            ],
            pricePerStudent: "₹6,500",
            includes: ["Accommodation", "All meals", "Safari costs", "Expert guides"]
        },
        {
            id: 4,
            tripName: "Cultural Heritage of Rajasthan",
            duration: "5 Days",
            for: "Grades 9-12",
            highlights: [
                "Visit to Amer Fort and City Palace in Jaipur",
                "Traditional craft workshops",
                "Folk music and dance performances",
                "Desert ecology session in Jaisalmer"
            ],
            learningOutcomes: [
                "Understanding of Rajput history",
                "Appreciation of traditional arts",
                "Knowledge of desert ecosystems"
            ],
            pricePerStudent: "₹12,000",
            includes: ["Hotels", "All meals", "Entry fees", "Transport between cities"]
        },
        {
            id: 5,
            tripName: "Marine Biology in Andaman",
            duration: "6 Days",
            for: "Grades 10-12",
            highlights: [
                "Snorkeling in coral reefs",
                "Marine biology lectures",
                "Visit to Fisheries Museum",
                "Beach clean-up activity"
            ],
            learningOutcomes: [
                "Understanding of marine ecosystems",
                "Awareness of conservation issues",
                "Hands-on experience with marine life"
            ],
            pricePerStudent: "₹18,000",
            includes: ["Resort stay", "All meals", "Equipment rental", "Expert guides"]
        }
    ];

    return (
        <div className='eduTripPage'>
            {/* Header */}
            <div className="header">
                <a><FaSquareInstagram /></a>
                <a><FaFacebook /></a>
                <a><IoMdMail /></a>
            </div>

            {/* Navbar */}
            <div className={`navbar ${isSticky ? 'sticky-active' : ''}`}>
                <div className="col1">
                    <img src={logo} alt='siteLogo' />
                    <p>Explore Unreachable</p>
                </div>
                <div className="col2">
                    <ul>
                        <li><a onClick={() => { navigate("/") }}>Home</a></li>
                        <li><a onClick={() => { navigate("/popularPacks") }}>Popular Plans</a></li>
                        <li><a onClick={() => { navigate("/DevotionalPlans") }}>Devotionals</a></li>
                        <li><a onClick={() => { navigate("/cruiseShipPacks") }}>Cruise</a></li>
                        <li><a onClick={() => { navigate("/aboutUs") }}>About us</a></li>
                        <li><a href="/supportPage" target='_blank'>Support</a></li>
                    </ul>
                </div>
                
                <div className="col3">
                    <div className="bar">
                        <button onClick={openBar}><FaBars /></button>
                    </div>
                    <div className="barList" id="barList">
                        <ul>
                            <li><a onClick={() => { navigate("/") }}>Home</a></li>
                            <li><a onClick={() => { navigate("/popularPacks") }}>Popular Plans</a></li>
                            <li><a onClick={() => { navigate("/educationalTrips") }}>Educational Trips</a></li>
                            <li><a onClick={() => { navigate("/cruiseShipPacks") }}>Cruise</a></li>
                            <li><a onClick={() => { navigate("/aboutUs") }}>About us</a></li>
                            <li><a href="/supportPage" target='_blank'>Support</a></li>
                        </ul>
                        <div className="cancel">
                            <button onClick={closeBar}><IoCloseCircle /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contentStart">
                <h1 className='pageTitle'>Educational Trips</h1>
                <p className='pageSubtitle'>Learning Beyond Classroom Walls</p>
                
                {eduTripData.map((trip) => (
                    <div className="tripCard" key={trip.id}>
                        <div className="tripHeader">
                            <h2>{trip.tripName}</h2>
                            <div className="tripMeta">
                                <span>{trip.duration}</span>
                                <span>For: {trip.for}</span>
                            </div>
                        </div>
                        
                        <div className="tripContent">
                            <div className="tripColumn">
                                <h3>Highlights:</h3>
                                <ul>
                                    {trip.highlights.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="tripColumn">
                                <h3>Learning Outcomes:</h3>
                                <ul>
                                    {trip.learningOutcomes.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="tripColumn">
                                <h3>Package Details:</h3>
                                <p><strong>Price:</strong> {trip.pricePerStudent}</p>
                                <p><strong>Includes:</strong> {trip.includes.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationalTrips;