import React, { useState, useEffect, useContext } from 'react';
import "../Styles/PopularPacks.css";
import logo from "../assets/logo.png";
import axios from 'axios';
import { IoCloseCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import EmailContext from '../context/EmailContext';

import CustomDropdown from './CustomDropdown';



const PopularPacks = () => {

  const [packs, setPacks] = useState([]);
  const { email } = useContext(EmailContext);
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  
  const [selectedValue, setSelectedValue] = useState('');



  const[isFilterApplied,setIsFilterApplied] = useState(false)

   const fetchAllPopularPacks = () => {
    
    axios.get('http://localhost:8080/get/popularPacks')
      .then(response => {
        setPacks(response.data);
        setIsFilterApplied(false); // Clear filter flag
        setSelectedValue('');
      })
      .catch(error => {
        console.error("There was an error fetching the popular packs!", error);
        setTimeout(fetchAllPopularPacks,5000)
      });
  };

  useEffect(() => {
    fetchAllPopularPacks();
  }, []);

  const handleSelection = async (value) => {
    setSelectedValue(value);
    setIsFilterApplied(true);
    console.log("You selected:", value);

    try {
      let url = "";

      if (value === "Tamilnadu") url = "http://localhost:8080/get/getPopularInTn";
      else if (value === "India") url = "http://localhost:8080/get/getPopularInIndia";
      else if (value === "Foreign") url = "http://localhost:8080/get/getPopularInForeign";
      else if (value === "Premium") url = "http://localhost:8080/get/getPopularPremiumPackage";

      if (url) {
        const response = await axios.get(url);
        setPacks(response.data);
      }
    } catch (error) {
      console.error("Error fetching filtered popular packs", error);
    }
  };

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

  const[isCardClicked,setIsCardClicked] = useState(false)

  const[particularFetchedData,setParticularFetchedData] = useState([]);
 
  const handleFetchParticularData = async (id) => {
  setIsCardClicked(true);
  try {
    const response = await axios.get("http://localhost:8080/get/getParticularData", {
      params: { id: id }
    });
    setParticularFetchedData(response.data);
    setMainImageDisplayingUrl(response.data.imgUrl1)
  } catch (e) {
    console.error("Error fetching particular data:", e);
  }
};

const[mainImageDisplayingUrl,setMainImageDisplayingUrl] = useState(particularFetchedData.imgUrl1)
  

const handleContact = ()=>{
  
  navigate("/SignUp")
  
}
return (
    <>
    
    <div className='EntirePage'>
      
      <div className="header">
          <a><FaSquareInstagram /></a>
          <a><FaFacebook /></a>
          <a><IoMdMail /></a>
      </div>
      
      <div className={`navbar ${isSticky ? 'sticky-active' : ''}`}>
          <div className="col1">
              <img src={logo} alt='siteLogo' />
              <p>Explore Unreachable</p>
          </div>
          <div className="col2">
              <ul>
                  <li><a onClick={() => { navigate("/") }}>Home</a></li>
                                    <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>
                  <li><a onClick={()=>{navigate("/DevotionalPlans")}}>Devotionals</a></li>
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
                                      <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>
                    <li><a onClick={()=>{navigate("/DevotionalPlans")}}>Devotionals</a></li>
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
        <h2>Select popular in</h2>
        <CustomDropdown
          options={["India", "Tamilnadu", "Foreign","Premium"]}
          placeholder="Select"
          onSelect={handleSelection}
        />
        {isFilterApplied && <a onClick={fetchAllPopularPacks} className='clearFilterAnchor'>Clear Filter</a>}
      
    
      </div>
      
    <div className="heading">
  
    </div>

      {isFilterApplied ? <h1 className='filterHead'>~ Showing  {packs.length} Result for {selectedValue} ~</h1> : <h1 className='filterHead'>~ Showing All {packs.length} Popular Packs ~</h1>}
      
      <div className="PopularCards">
        
        {
          packs.map((pack, index) => (

            <div className="card" key={index} onClick={()=>handleFetchParticularData(pack.id)} style={{ '--delay': `${index * 100}ms` }}>
              {/* <h4>{pack.id}</h4> */}
              <div className="imgSection">
                <img src={pack.imgUrl1}/>
              </div>
              <div className="contentSection">
                <h1>{pack.placeName}</h1>
                <div className="data">
                  <p>{pack.numOfDays}  {pack.numOfDays > 1 ? "Days" : "Day"} <strong>||</strong> {pack.numOfNights} {pack.numOfNights > 1 ? "Nights" : "Night"}</p>
                </div>
              </div>

              {
                pack.inIndia && 
                <img src='https://img.icons8.com/?size=100&id=esGVrxg9VCJ1&format=png&color=000000' width={'40px'} className='indiaImage'/>
              }
              
            </div>
          ))
        }
      </div>
  {
    isCardClicked && (
      <div className="viewPlanContainer">
        <div className="imgSec">
          <div className="mainImage">
            <img
              src={mainImageDisplayingUrl || '/default-image.png'}
              alt={particularFetchedData.placeName || 'Place Image'}
            />
          </div>
          <div className="subImage">
            {[1,2,3,4,5,6].map(i => {
              const imgKey = `imgUrl${i}`;
              const imgSrc = particularFetchedData[imgKey];
              return imgSrc ? (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`${particularFetchedData.placeName} thumbnail ${i}`}
                  onClick={() => setMainImageDisplayingUrl(imgSrc)}
                  style={imgSrc === mainImageDisplayingUrl ? {border : "2px solid black" , width :"90px"}:{border : "none"}}
                  className="thumbnail"
                />
              ) : null;
            })}
          </div>
          {particularFetchedData.isInIndia &&
          <img src="https://img.icons8.com/?size=100&id=ulwAzQmud0ql&format=png&color=000000" width={"50px"} height={"40px"} className='indFlag' />
          }
        </div>
        <div className="contentSec">
          <h1>{particularFetchedData.placeName?.toUpperCase() || 'No Title'}</h1>
          <p>{particularFetchedData.numOfDays}  {particularFetchedData.numOfDays > 1 ? "Days" : "Day"} & {particularFetchedData.numOfNights} {particularFetchedData.numOfNights > 1 ? "Nights" : "Night"}</p>
          <p>{particularFetchedData.aboutLocation}</p>
          <button>I'm Interested</button>
          <button onClick={handleContact}>Contact</button>
        </div>
            <div className="close">
              <button type='button' onClick={()=>{setIsCardClicked(false)}} className='closeBtnForViewPlan'><strong>X</strong></button>
            </div>
      </div>
    )
  }
 
    </div>
    </>
  )
}

export default PopularPacks;
