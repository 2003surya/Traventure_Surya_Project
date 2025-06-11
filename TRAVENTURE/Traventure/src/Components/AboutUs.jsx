import React, { useState, useEffect, useContext } from 'react';
import "../Styles/AboutUs.css";
import logo from "../assets/logo.png";
import axios from 'axios';
import { IoCloseCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import EmailContext from '../context/EmailContext';

import Surya_img from '../assets/Surya_img_2.png';

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const AboutUs = () => {
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

    const [isSubscribeInputEnabled, setIsSubscribeInputEnabled] = useState(false);
    const [isSubButtonDisabled, setIsSubButtonDisabled] = useState(true);
    const [emailInput, setEmailInput] = useState('');

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };


    const[confirmationMessageOnSubs,setconfirmationMessageOnSubs] = useState()

    const handleAddSubscription =  async(e) =>{
        e.preventDefault();

        try{
        const response = await axios.post(`http://localhost:8080/Addsubscription`, null, {
            params: { emailId: emailInput },
            })
            if(response.data === "Already a user"){
            // alert("🤞 Your Mail id has been alrady a subscribed user Thankyou for your continuous interese 😍")
            setconfirmationMessageOnSubs(`🤞  Dear " ${emailInput} " You're Already a subscriber...😍 Keep Support `)
            }
            if(response.data === "subscription added successfully"){
            setconfirmationMessageOnSubs(`😎  Dear " ${emailInput} " Subscription Added Successfully 💝`)
            }
        }
        catch{
            setconfirmationMessageOnSubs("something went wrong")
        }
    }

   const [mileStones, setMileStones] = useState([
    {
        id: 1,
        year: "2025",
        title: "Initial Days of TRAVENTURE",
        content: "Traventure began as a simple college project with a big vision. Focused on making travel easier and smarter, it started with regional tours. The idea quickly gained interest due to its unique tech-based approach. As students passionate about travel and innovation, the founders built an MVP. Word-of-mouth spread quickly among college communities. It gradually attracted local travelers looking for affordable and organized tours. This humble beginning laid the foundation for what would become a global travel solution.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 2,
        year: "2027",
        title: "Business Over INDIA",
        content: "Traventure expanded its footprint across the Indian subcontinent. From educational tours for schools to honeymoon packages and devotional pilgrimages, it diversified offerings. The platform added multilingual support and regional pricing. Its strong backend technology allowed easy booking and secure payments. Customer satisfaction grew with prompt support and customized packages. Collaborations with local guides and agencies boosted local economies. Traventure quickly became a trusted name in Indian tourism.",
        imageUrl: "https://images.unsplash.com/photo-1713311484542-be70812788d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGluZGlhJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 3,
        year: "2032",
        title: "Best Tour Organizer Award",
        content: "Traventure’s innovation and customer-first approach earned national recognition. In 2032, it was honored by the Ministry of Tourism as the 'Best Tourist Organizer'. The platform's safety, convenience, and transparency were standout features. It had one of the highest customer retention rates in the travel sector. Advanced planning tools, AI recommendations, and real-time tracking impressed officials. The award brought nationwide media attention and new partnerships. This milestone solidified Traventure’s reputation in the tourism ecosystem.",
        imageUrl: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 4,
        year: "2035",
        title: "Stepping into an International Business",
        content: "2035 marked a new era as Traventure entered the international market. With carefully curated international packages, it began operations in Asia, Europe, and the Middle East. Each destination had localized support, cultural inclusivity, and multilingual guides. Strategic alliances with foreign tourism boards enhanced authenticity. The mobile app offered real-time translations, currency converters, and safety tips. International clients praised the transparency and efficiency. This leap transformed Traventure from a national favorite to a global player.",
        imageUrl: "https://images.unsplash.com/photo-1525852472390-9b774301077c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGludGVybmF0aW9uYWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 5,
        year: "2047",
        title: "crossed 1M+ seccessfull Travels Across the Globe",
        content: "By 2047, Traventure had surpassed 1 million trips worldwide. It became a symbol of smart, sustainable, and personalized travel. AI-driven planning and virtual tour previews were popular features. The app enabled one-click bookings, itinerary syncing, and emergency assistance. Feedback-driven updates ensured the platform evolved constantly. With data from millions of travelers, Traventure set new benchmarks in predictive travel planning. Celebrations were held globally to mark this historic achievement and customer trust.",
        imageUrl: "https://img.freepik.com/free-photo/hot-air-balloon-realistic-dreamscape_23-2151763027.jpg?uid=R49514756&ga=GA1.1.2031067859.1732676727&semt=ais_items_boosted&w=740"
    }
]);


const [currentIndex, setCurrentIndex] = useState(0);
const [animate, setAnimate] = useState(true);
const [direction, setDirection] = useState("next");

    const handlePrevious = () => {
        setAnimate(false);
        setDirection("prev");
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? mileStones.length - 1 : prevIndex - 1
            );
            setAnimate(true);
        }, 10);
    };

    const handleNext = () => {
        setAnimate(false);
        setDirection("next");
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === mileStones.length - 1 ? 0 : prevIndex + 1
            );
            setAnimate(true);
        }, 10);
    };

    
    return (
        <div>
            <div className="header">
                <a href=""><FaSquareInstagram /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><IoMdMail /></a>
            </div>

            <div className={`navbar ${isSticky ? 'sticky-active' : ''}`}>
                <div className="col1">
                    <img src={logo} alt='siteLogo' />
                    <p>Explore Unreachable</p>
                </div>
                <div className="col2">
                    <ul>
                        <li><a onClick={() => { navigate("/") }}>Home</a></li>
                        <li><a onClick={()=>{navigate("/PopularPacks")}}>Popular Plans</a></li>
                        <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>
                        <li><a onClick={()=>{navigate("/DevotionalPlans")}}>Devotionals</a></li>
                        <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
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
                        <li><a onClick={()=>{navigate("/PopularPacks")}}>Popular Plans</a></li>
                      <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>

                        <li><a onClick={()=>{navigate("/DevotionalPlans")}}>Devotionals</a></li>
                        <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
                        <li><a href="/SupportPage" target='_blank'>Support</a></li>
                        </ul>
                        <div className="cancel">
                            <button onClick={closeBar}><IoCloseCircle /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="start">

                <div className="story-head head">
                    <p>Traventure</p>
                    <p><li></li></p>
                    <p>HiStory</p>
                </div>
                <div className="story-content">
                    <h1>🌍 The History Behind TRAVENTURE ✈️</h1>
                    <h4>(A Journey from Project to Global Brand)</h4>
                    <p>
                        In 2025, during my interview preparation period, I started working on a project close to my heart — Traventure, a tour operator application built to help people explore the world more easily and confidently. What began as a simple idea soon evolved into something much more impactful.

                        As the concept gained momentum, Traventure became part of a larger vision under the banner of Surya Group of Technologies. With dedication, strategic planning, and a deep understanding of what travelers truly need, we transformed Traventure into a global travel platform.

                        Today, Traventure has crossed over 1 million bookings worldwide and is trusted by a community of more than 8 million followers from across the globe. We are proud to say our services now span multiple countries, helping travelers everywhere plan their dream journeys with ease.

                        From a personal project to a worldwide travel brand, Traventure is a testament to how passion, purpose, and perseverance can lead to extraordinary growth.
                    </p>
                </div>

                <div className="ceoMsg-head head">
                    <p>Traventure</p>
                    <p><li></li></p>
                    <p>CEO Say's</p>
                </div>
                <div className="start-content">
                    <div className="imgSection">
                        <img src={Surya_img} alt="CEO IMAGE" />
                    </div>
                    <div className="ceo-note">
                        <h1>CEO's NOTE</h1>
                        <p>
                            Set your sights on the world, let your dreams take flight,
                            With Traventure as your guide, every step feels right.
                            We’re more than a service — we’re your travel friend,
                            From planning to exploring, support till the end.
                            Curating journeys both near and far,
                            From mountain trails to oceans under the stars.

                            Tailored tours and handpicked stays,
                            Smooth travels with memorable days.
                            Whether solo, with friends, or family in tow,
                            Traventure makes your wanderlust grow.
                            Trust us to turn trips into lifelong treasure,
                            With passion, care, and travel done with pleasure.
                        </p>
                        <div className="ceoName">
                            <h2>~ Surya Prasath</h2>
                            <h4>Founder & CEO</h4>
                            <h6>Surya Group of Technologies</h6>
                        </div>
                    </div>
                </div>

            

                

                



                <div className="milestone-head head">
                    <p>Traventure</p>
                    <p><li></li></p>
                    <p>Milestone</p>
                </div>
                <div className="milestone-container">
                    
                    <div className={`mileStone ${animate ? (direction === "next" ? "animate-next" : "animate-prev") : ""}`}>
                        <div className="left">
                            <h1>{">>>>  "}{mileStones[currentIndex].year}</h1> 
                            <h1>{mileStones[currentIndex].title}</h1>
                            <p>{mileStones[currentIndex].content}</p>
                        </div>
                        <div className="right">
                            <img src={mileStones[currentIndex].imageUrl} alt="milestone" />
                        </div>
                    </div>
                
                    <div className="moveButtons">
                        <button onClick={handlePrevious}>
                            <FcPrevious />
                        </button>
                        <button onClick={handleNext}>
                            <FcNext />
                        </button>
                    </div>
                </div>
                
            </div>



            <div className="subscription-input">
                    <a onClick={() => { setIsSubscribeInputEnabled(true) }}>Click here to Join a vibrant Community</a>
                    {isSubscribeInputEnabled && (
                        <form onSubmit={handleAddSubscription}>
                            <input
                                type="email"
                                placeholder="Your Email Id"
                                value={emailInput}
                                onChange={(e) => {
                                    const email = e.target.value;
                                    setEmailInput(email);
                                    setIsSubButtonDisabled(!validateEmail(email));
                                }}
                            />
                            <button
                            disabled={isSubButtonDisabled}
                            style={{ cursor: isSubButtonDisabled ? "not-allowed" : "default" }}>
                                Join
                            </button>
                        </form>
                    )}
                    {confirmationMessageOnSubs!==null && <p>{ confirmationMessageOnSubs }</p>}
                </div>
            <div className="footer">
                        
                        <div className="row2">
                            <div className="col1">
                                <p>
                                    Important Links
                                </p>
            
                                <ul>
                                    <li><a href="">about</a></li>
                                    <li><a href="">Important Links</a></li>
                                    <li><a href="">Devotional Tours</a></li>
                                    <li><a href="">Group Tours</a></li>
                                </ul>
                            </div>
                            <div className="col2">
                                <p>Head Office</p>
                                <h1>121,Madurai-625009</h1>
            
                                <p>Branch Office</p>
                                <h1>124,Chennai-600028</h1>
                            </div>
                            <div className="col3">
                                <p>Follow us on</p>
            
                                <ul>
                                    <li><a href=""><FaSquareInstagram /></a></li>
                                    <li><a href=""><FaFacebook /></a></li>
                                    <li><a href=""><FaSquareXTwitter /></a></li>
                                    <li><a href=""><FaYoutube /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </div>

        
    );
};

export default AboutUs;
