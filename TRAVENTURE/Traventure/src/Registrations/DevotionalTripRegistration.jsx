import React, { useEffect, useState } from 'react';
import "../Styles/DevotionalTripRegistration.css";
import axios from 'axios';

const DevotionalTripRegistration = () => {
  // Add state for selected religion
  const[templeName,setTempleName] = useState()
  const[location,setLocation] = useState();
  const [selectedReligion, setSelectedReligion] = useState('');
  const[aboutTemple,setAboutTemple] = useState()
  const[imgUrl1,setImgUrl1] = useState()
  const[imgUrl2,setImgUrl2] = useState()
  const[imgUrl3,setImgUrl3] = useState()
  const[imgUrl4,setImgUrl4] = useState()
  const[isInIndia,setIsInIndia] = useState(false);
  const[isInTamilnadu,setIsInTamilnadu] = useState(false);
  const[days,setDays] = useState(1)
  const[nights,setNights] = useState(0)
  
  // Add this in your head or create a CSS file that's included in your index.html
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);    
  }, []);

  const handleReligionClick = (religion) => {
    setSelectedReligion(religion);
  };

  const handleSaveTemplePlan = async (e)=>{
    e.preventDefault();

    const payload = {
        templeName : templeName,
        location : location,
        religion : selectedReligion,
        aboutTemple : aboutTemple,
        imgUrl1 : imgUrl1,
        imgUrl2 : imgUrl2,
        imgUrl3 : imgUrl3,
        imgUrl4 : imgUrl4,
        isInIndia : isInIndia,
        isInTamilnadu : isInTamilnadu,
        days : days,
        nights : nights
    }

    try{
        const response = await axios.post("http://localhost:8080/temple/addTemplePlan" ,payload);
        handleAlert("👍 A New Plan Created Successfully 💥",false);
        clearForm()
    }catch{
        handleAlert("something went wrong",true)
    }
    
  }

  const clearForm = ()=>{
    setTempleName("")
    setLocation("")
    setSelectedReligion("")
    setAboutTemple("")
    setImgUrl1("")
    setImgUrl2("")
    setImgUrl3("")
    setImgUrl4("")
    setDays(1)
    setNights(0)
    setIsInIndia(false)
    setIsInTamilnadu(false)
  }

  const[isErrorMessage,setIsErrorMessage] = useState(false)
    const[isAlertNeeded,setIsAlertNeeded] = useState(false)
    const[alertMessage,setAlertMessage] = useState("")
  
      const handleAlert = (message,isError)=>{
              setAlertMessage(message);
              setIsAlertNeeded(true)
              setIsErrorMessage(isError)
  
              setTimeout( ()=>{
                  setAlertMessage("")
                  setIsAlertNeeded(false)
              },5000);
      }
  return (
    <div className='overAll'>
        <div className="heading">
            <h1>Devotional Plans Registrations</h1>
        </div>

        <div className="clearForm">
            <button onClick={ clearForm}>Clear Form</button>
        </div>
        <div className='templeFormContainer'>
            <form onSubmit={handleSaveTemplePlan}>
                <div className="templeName">
                    <label htmlFor="templeName">Temple Name</label>
                    <input type="text" id="templeName" value={templeName} onChange={(e)=>{setTempleName(e.target.value)}} required/>
                </div>
                <div className="location">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="state" value={location} onChange={(e)=>{setLocation(e.target.value)}} required/>
                </div>

                <h1 className='head'>Belongs to</h1>
                <div className="checkBoxs">
                    {['Hinduism', 'Islam', 'Christianity', 'Sikhism', 'Buddhism', 'Jainism'].map(religion => (
                        <p 
                            key={religion}
                            className={selectedReligion === religion ? 'active' : ''}
                            onClick={() => handleReligionClick(religion)
                            }
                        >
                            {religion}
                        </p>
                    ))}
                </div>

                <div className="aboutTemple">
                    <label htmlFor="aboutTemple">Special About Temple</label>
                    <textarea id="aboutTemple" name="aboutTemple" value={aboutTemple} onChange={(e)=>{setAboutTemple(e.target.value)}} required></textarea>
                </div>

                <h1 className='head'>Image Url's</h1>
                <div className="templeImageUrls">
                    <div className="row">
                        <div className="left">
                            <label htmlFor="url1">URL 1</label>
                            <input type="text" id="url1"  value={imgUrl1} onChange={(e)=>{setImgUrl1(e.target.value)}} required />
                        </div>
                        <div className="right">
                            <label htmlFor="url2">URL 2</label>
                            <input type="text" id="url2" value={imgUrl2} onChange={(e)=>{setImgUrl2(e.target.value)}} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <label htmlFor="url3">URL 3</label>
                            <input type="text" id="url3" value={imgUrl3} onChange={(e)=>{setImgUrl3(e.target.value)}} required />
                        </div>
                        <div className="right">
                            <label htmlFor="url4">URL 4</label>
                            <input type="text" id="url4" value={imgUrl4} onChange={(e)=>{setImgUrl4(e.target.value)}} required />
                        </div>
                    </div>

                    <h1 className='head'>Selected Images</h1>

                    <div className="row-img">
                        <img src={imgUrl1} alt="" width={"100px"} />
                        <img src={imgUrl2} alt="" width={"100px"} />
                        <img src={imgUrl3} alt="" width={"100px"} />
                        <img src={imgUrl4} alt="" width={"100px"} />    
                    </div>
                </div>

                <div className="days_nights">
                    <div className="days">
                        <label htmlFor="">Days</label>
                        <input type="number" value={days} onChange={(e)=>{setDays(e.target.value) , setNights(e.target.value-1)}}/>
                    </div>
                    <div className="nights">
                        <label htmlFor="">Nights</label>
                        <input type="number"  value={nights} disabled readOnly/>
                    </div>
                </div>

                <h1 className='head'>Any Special ?</h1>
                <div className="checkBoxs">
                    <p onClick={()=>{setIsInIndia(!isInIndia)}}
                        style={ isInIndia ? {backgroundImage : "linear-gradient(135deg,orange,orangeRed)"} : {background : "white"}}>Is In India</p>
                    <p onClick={()=>{setIsInTamilnadu(!isInTamilnadu) , setIsInIndia(true)}}
                        style={ isInTamilnadu ? {backgroundImage : "linear-gradient(135deg,orange,orangeRed)"} : {background : "white"}}>Is In Tamilnadu</p>
                </div>
                <div className="submitBtn">
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>

        {
            
            isAlertNeeded &&
            <div className="RegistrationAlert">
                <p style={{backgroundColor : isErrorMessage ? "Red" :"#feb47b"}}>{alertMessage}</p>
            </div>

            }
    </div>
  )
}

export default DevotionalTripRegistration;