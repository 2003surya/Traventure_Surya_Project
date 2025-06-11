import React, { useState, useEffect, useContext } from 'react';
import logo from "../assets/logo.png";
import axios from 'axios';
import "../Styles/CruiseShipPage.css"
import { IoCloseCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import EmailContext from '../context/EmailContext';
import traventureCruiseLogo from "../assets/traventure_cruise_logo2.png"
import exploraCruisesLogo from "../assets/explora_cruises.png"

const CruiseShipPage = () => {
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
    
    const cruizData = [
  {
    id: 1,
    logoUrl: `${exploraCruisesLogo}`,
    CruiseName: "Explora Cruises",
    days: 3,
    nights: 2,
    from: "Mumbai",
    slot1: "Mon - Wed",
    slot2: "Fri - Sun",
    description: `
      🌅 Day 1: Departure from Mumbai at 5:00 PM. Welcome drinks, poolside DJ night, and buffet dinner.
      🏖️ Day 2: Shore excursion to Alibaug Beach, onboard games, and cultural dance evening.
      🎉 Day 3: Brunch buffet, karaoke contest, and return to Mumbai by 3:00 PM.
    `,
    pricePerPerson: "14000",
    pricePerChildren: "8500",
    backgroundVideourl : "https://cdn.pixabay.com/video/2023/08/13/175923-854230287_tiny.mp4"
  },
  {
    id: 2,
    logoUrl: "https://images.cordeliacruises.com/cordelia_v2/public/assets/cordelia-new-logo.svg",
    CruiseName: "Cordelia Cruises",
    days: 4,
    nights: 3,
    from: "Chennai",
    slot1: "Mon - Wed",
    slot2: "Fri - Sun",
    description: `
      🚢 Day 1: Departure from Chennai at 4:00 PM. Live music & welcome dinner.
      🏝️ Day 2: Explore Sri Lanka’s Colombo port. Onboard spa and movie night.
      🧘 Day 3: Yoga at sunrise, cooking workshop, and Gala Dinner.
      ⚓ Day 4: Return to Chennai with souvenir shopping and farewell tea.
    `,
    pricePerPerson: "36,000",
    pricePerChildren: "20,000",
    backgroundVideourl : "https://videos.pexels.com/video-files/855189/855189-sd_640_360_30fps.mp4"
  },
  {
    id: 3,
    logoUrl: `${traventureCruiseLogo}`,
    CruiseName: "Traventure Cruise",
    days: 4,
    nights: 3,
    from: "Goa",
    slot1: "Mon - Wed",
    slot2: "Fri - Sun",
    description: `
      🍹 Day 1: Set sail from Goa with cocktails and sunset cruise party.
      🐬 Day 2: Dolphin-watching tour & water sports at Lakshadweep island.
      🎭 Day 3: Onboard theater show, art workshops, and themed dinner night.
      🌊 Day 4: Relaxation morning, captain’s meet-up, and return to Goa.
    `,
    pricePerPerson: "36,000",
    pricePerChildren: "20,000",
    backgroundVideourl : "https://videos.pexels.com/video-files/854976/854976-sd_640_360_30fps.mp4"
  },
  {
  id: 4,
  logoUrl: "https://assets.dm.rccl.com/is/content/RoyalCaribbeanCruises/celebrity-cruises-logo-blue-lg-1?fmt=png-alpha",
  CruiseName: "Celebrity Horizon",
  days: 5,
  nights: 4,
  from: "Kochi",
  slot1: "Tue - Sat",
  slot2: "Sat - Wed",
  description: `
    🚢 Day 1: Departure from Kochi with traditional Kerala welcome and dinner buffet.
    🏝️ Day 2: Stop at Maldives for snorkeling and beach exploration.
    🧘 Day 3: Onboard yoga and sunset spa treatments.
    🎭 Day 4: Themed masquerade night with live jazz and casino games.
    🛳️ Day 5: Cruise back to Kochi with farewell ceremony and souvenir shopping.
  `,
  pricePerPerson: "52,000",
  pricePerChildren: "30,000",
  backgroundVideourl: "https://cdn.pixabay.com/video/2020/10/12/52185-478214404_tiny.mp4"
},
{
  id: 5,
  logoUrl: "https://www.msccruises.com/int/-/media/uk/logo-bue.svg",
  CruiseName: "MSC Majesty",
  days: 6,
  nights: 5,
  from: "Vizag",
  slot1: "Mon - Sat",
  slot2: "Wed - Mon",
  description: `
    🛥️ Day 1: Departure from Vizag Port with welcome buffet and live orchestra.
    ⛱️ Day 2: Shore excursion to Andaman Islands – beach picnic and snorkeling.
    🎨 Day 3: Art classes and cooking demo by celebrity chefs.
    🥂 Day 4: Cocktail party, dance competition, and luxury shopping onboard.
    🎤 Day 5: Karaoke and cultural talent show.
    ⚓ Day 6: Return to Vizag with closing brunch and feedback ceremony.
  `,
  pricePerPerson: "60,000",
  pricePerChildren: "35,000",
  backgroundVideourl: "https://cdn.pixabay.com/video/2022/08/18/128284-740892796_tiny.mp4"
},
{
  id: 6,
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Royal_Caribbean_logo_%282024%29.svg/2560px-Royal_Caribbean_logo_%282024%29.svg.png",
  CruiseName: "Royal Caribbean Star",
  days: 7,
  nights: 6,
  from: "Mangalore",
  slot1: "Fri - Thu",
  slot2: "Sun - Sat",
  description: `
    🛳️ Day 1: Departure from Mangalore with welcome dance and deluxe dinner.
    🏝️ Day 2: Stop at Lakshadweep – kayaking and island exploration.
    🎮 Day 3: Game zone, treasure hunt, and cooking show.
    🌅 Day 4: Sunrise yoga, cocktail workshop, and stargazing.
    🎭 Day 5: Theater play, masquerade ball, and chef’s table experience.
    🧘 Day 6: Relaxation day with spa treatments and poolside party.
    🛬 Day 7: Return to Mangalore with farewell group photo and gift hampers.
  `,
  pricePerPerson: "85,000",
  pricePerChildren: "48,000",
  backgroundVideourl: "https://cdn.pixabay.com/video/2021/10/26/93413-639359118_tiny.mp4"
}

];

    return (
    <div className='cruisePage'>
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
                    <li><a href="">Educational Trips</a></li>
                    <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
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
                    <li><a href="">Educational Trips</a></li>
                    <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
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
            {cruizData.map((cruizData) => (
                <div className="cruizPlan" key={cruizData.id}>
                  <video autoPlay loop muted playsInline>
                      <source src={cruizData.backgroundVideourl} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  <img src={cruizData.logoUrl} alt={cruizData.CruiseName} /> 
                  <h1>{cruizData.CruiseName}</h1>

                <div className="seperate">
                    <div className="left">
                    <p>{cruizData.description}</p>
                    </div>

                    <div className="right">
                    <p>{cruizData.days} Days | {cruizData.nights} Nights</p>
                    <p>Starts from {cruizData.from}</p>
                    <p>Slot 1 : {cruizData.slot1}</p>
                    <p>Slot 2 : {cruizData.slot2}</p>
                    <p>{cruizData.pricePerPerson} / per-person</p>
                    <p>{cruizData.pricePerChildren} / children below age of 12</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default CruiseShipPage