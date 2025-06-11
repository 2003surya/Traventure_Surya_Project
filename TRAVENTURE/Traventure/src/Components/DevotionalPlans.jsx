import React, { useState, useEffect, useContext } from 'react';
import "../Styles/DevotionalPlans.css";
import logo from "../assets/logo.png";
import axios from 'axios';
import { IoCloseCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import EmailContext from '../context/EmailContext';

import CustomDropdown from './CustomDropdown';


const DevotionalPlans = () => {
    const { email } = useContext(EmailContext);
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);
    const [devotionalPacks, setDevotionalPacks] = useState([]);
    const [expandedCards, setExpandedCards] = useState({});
    const[isAboutClicked,setIsAboutClicked] = useState(false)

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

    const fetchAllDevotionalPacks = () => {
        axios.get('http://localhost:8080/get/getAllDevotionalPlans')
            .then(response => {
                setDevotionalPacks(response.data);
                setIsFilterApplied(false)
            })
            .catch(error => {
                console.error("There was an error fetching the popular packs!", error);
            });
    };

    useEffect(() => {
        fetchAllDevotionalPacks();
    }, []);




    const [selectedValue, setSelectedValue] = useState('');
    const[isFilterApplied,setIsFilterApplied] = useState(false)

    const handleSelection = async (value) => {
        setSelectedValue(value);
        setIsFilterApplied(true);
        console.log("You selected:", value);

        try {
            const response = await axios.get("http://localhost:8080/get/getSpecificPlan", {
            params: { religion: value }
            });
            setDevotionalPacks(response.data);
        } catch (error) {
        console.error("Error fetching filtered popular packs", error);
    }
};



    return (
        <div className='devotionalPlans'>
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
                        <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>
                        <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
                        <li><a onClick={() => { navigate("/aboutUs") }}>About us</a></li>
                        <li><a href="/SupportPage" target='_blank'>Support</a></li>
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
                                              <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>

                            <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
                            <li><a onClick={() => { navigate("/aboutUs") }}>About us</a></li>
                            <li><a href="/SupportPage" target='_blank'>Support</a></li>
                        </ul>
                        <div className="cancel">
                            <button onClick={closeBar}><IoCloseCircle /></button>
                        </div>
                    </div>
                </div>
            </div>

        <div className='dropDown' style={{margin : "10px"}}>
            <h2>Select Results for</h2>
            <CustomDropdown
            options={["Hinduism", "Islam", "Christianity","Sikhism","Jainism","Buddhism"]}
            placeholder="Select"
            onSelect={handleSelection}
            />
            {isFilterApplied && <a onClick={fetchAllDevotionalPacks} className='clearFilterAnchor'>Clear Filter</a>}
        </div>

      {isFilterApplied ? <h1 className='filterHead'>~ Showing  {devotionalPacks.length} Result for {selectedValue} ~</h1> : <h1 className='filterHead'>~ Showing All {devotionalPacks.length} Popular Packs ~</h1>}


            {/* Card Section */}
            <div className="cardContainer">
                {
                    devotionalPacks.map((pack, index) => (
                        <div
                            className={`card ${expandedCards[index] ? "expanded" : ""}`}
                            key={index}
                            style={{ height: expandedCards[index] ? "max-content" : "300px" }}
                        >
                            <div className="imgSection">
                                <img src={pack.imgUrl1} alt="Temple" />
                                <img src={pack.imgUrl2} alt="Temple" />
                                <img src={pack.imgUrl3} alt="Temple" />
                            </div>
                            <div className="contentSection">
                                <h3>{pack.templeName}</h3>
                                <h4>{pack.location}</h4>
                                <h5>
                                    {pack.religion === "Islam" && "☪️"}
                                    {pack.religion === "Christianity" && "✝️"}
                                    {pack.religion === "Hinduism" && "🕉️"}
                                    {pack.religion === "Sikhism" && "🪯"}
                                    {pack.religion === "Jainism" && "🕊️"}
                                    {pack.religion === "Buddhism" && "☸️"}
                                    {" " + pack.religion}
                                </h5>
                                <div className="downContent">
                                    <p>{pack.days} {pack.days > 1 ? "days" : "day"} | {pack.nights} {pack.nights > 1 ? "nights" : "night"}</p>
                                    <h6 onClick={() => { setIsAboutClicked(true)
                                        setExpandedCards(prev => ({
                                            ...prev,
                                            [index]: !prev[index]
                                            
                                        } ))
                                    }}>
                                       
                                        More info
                                    </h6>
                                </div>

                                {expandedCards[index] && (
                                    <div className="aboutTempleSection">
                                        <p>{pack.aboutTemple}</p>
                                    </div>
                                )}
                            </div>
                        </div> //card end here                        
                    ))
                }
            </div>
        </div>
    )
}

export default DevotionalPlans;
