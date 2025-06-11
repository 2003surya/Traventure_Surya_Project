    import React, { useState } from 'react'
    import "../Styles/TourDetailsRegistration.css"
    import axios from 'axios';

    const TourDetailsRegistration = () => {
    
        const[place,setPlace] = useState();
        const[days,setDays] = useState();
        const[nights,setNights] = useState();
        const[aboutLoc,setAboutLoc] = useState();
        const[url1,setUrl1] = useState();
        const[url2,setUrl2] = useState();
        const[url3,setUrl3] = useState();
        const[url4,setUrl4] = useState();
        const[url5,setUrl5] = useState();
        const[url6,setUrl6] = useState();
        const[isPremium,setIsPremium] = useState(false)
        const[isPopular,setIsPopular] = useState(false)
        const[isInIndia,setIsInIndia] = useState(false)
        const[isInTn,setIsInTn] = useState(false)

        const handleSubmit = async (e) => {
            e.preventDefault();

            
            const payload = {
                placeName: place,
                numOfDays: days,
                numOfNights: nights,
                aboutLocation: aboutLoc,
                imgUrl1: url1,
                imgUrl2: url2,
                imgUrl3: url3,
                imgUrl4: url4,
                imgUrl5: url5,
                imgUrl6: url6,
                premium: isPremium,       
                inIndia: isInIndia,      
                popular: isPopular,      
                inTn: isInTn            // Try without "is" prefix
            };
            console.log(payload)
        try {
        const response = await axios.post("http://localhost:8080/TourService/savePLan", payload);
        handleAlert("👍 A New Plan Created Successfully 💥",false);
        setPlace('');
        setDays('');
        setNights('');
        setAboutLoc('');
        setUrl1('');
        setUrl2('');
        setUrl3('');
        setUrl4('');
        setUrl5('');
        setUrl6('');
        setIsPremium(false);
        setIsPopular(false);
        setIsInIndia(false);
        setIsInTn(false);
        } catch (error) {
        handleAlert("Something went wrong. Please Try Again After Sometime.",true);
        }
    };
    
    const[isErrorMessage,setIsErrorMessage] = useState(false)
    const[isAlertNeeded,setIsAlertNeeded] = useState(false)
    const[alertMessage,setAlertMessage] = useState("Hello this is alert")

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
        <div className='registrationContainer'>
            <div className="formSection">
        
                <h1> Create New Tour Plan</h1>
        
                <div className="clearBtn">
                    <button onClick={()=>{setPlace('');
                                setDays('');
                                setNights('');
                                setAboutLoc('');
                                setUrl1('');
                                setUrl2('');
                                setUrl3('');
                                setUrl4('');
                                setUrl5('');
                                setUrl6('');
                                setIsPremium(false);
                                setIsPopular(false);
                                setIsInIndia(false);
                                setIsInTn(false);}}>Clear Form</button>
                </div>
                
                <div className="registrationSection">
                    <form onSubmit={handleSubmit}>
                        <div className="placeName">
                            <label htmlFor="">Name of the Location</label>
                            <input type="text" value={place} onChange={(e)=>{setPlace(e.target.value)}} required/>
                        </div>
                        <div className="daysNights">
                            <div className="days">
                                <label htmlFor="">Days</label>
                                <input type="number" value={days} onChange={(e) => {
                                    const value = e.target.value;
                                    const newDays = parseInt(value, 10);

                                    if (!isNaN(newDays)) {
                                        setDays(newDays);
                                        setNights(newDays - 1);
                                    } else {
                                        setDays('');
                                        setNights('');
                                    }
                                    }} required/>
                            </div>
                            <div className="nights">
                                <label htmlFor="">Nights</label>
                                <input type="number" value={nights}   disabled  required/>
                            </div>
                            
                        </div>
                        <div className="aboutPlace">
                                <label htmlFor="">Special About Location</label>
                                <textarea name="" id=""  value={aboutLoc} onChange={(e)=>{setAboutLoc(e.target.value)}} required></textarea>
                            </div>

                            <div className="urlLinks">
                                <div className="row">
                                    <div className="left">
                                        <label htmlFor="">URL 1</label>
                                        <input type="text" value={url1} onChange={(e)=>{setUrl1(e.target.value)}} required/>
                                    </div>
                                    <div className="right">
                                        <label htmlFor="">URL 2</label>
                                        <input type="text" value={url2} onChange={(e)=>{setUrl2(e.target.value)}} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="left">
                                        <label htmlFor="">URL 3</label>
                                        <input type="text" value={url3} onChange={(e)=>{setUrl3(e.target.value)}} required/>
                                    </div>
                                    <div className="right">
                                        <label htmlFor="">URL 4</label>
                                        <input type="text"  value={url4} onChange={(e)=>{setUrl4(e.target.value)}} required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="left">
                                        <label htmlFor="">URL 5</label>
                                        <input type="text" value={url5} onChange={(e)=>{setUrl5(e.target.value)}} required/>
                                    </div>
                                    <div className="right">
                                        <label htmlFor="">URL 6</label>
                                        <input type="text"  value={url6} onChange={(e)=>{setUrl6(e.target.value)}} required/>
                                    </div>
                                </div>
                            </div>

                            <div className="miniImages" style={{display : "flex" , justifyContent : "space-around" ,flexWrap :"wrap"}}>
                                {url1 !== null && <img src={url1}  width={"100px"} height={"60px"} />}
                                {url2 !== null && <img src={url2}  width={"100px"} height={"60px"} />}
                                {url3 !== null && <img src={url3}  width={"100px"} height={"60px"} />}
                                {url4 !== null && <img src={url4}  width={"100px"} height={"60px"} />}
                                {url5 !== null && <img src={url5}  width={"100px"} height={"60px"} />}
                                {url6 !== null && <img src={url6}  width={"100px"} height={"60px"} />}
                                
                            </div>

                        <div className="specials">
                            <div className="box">
                                <input type="checkbox"  checked={isPremium} onChange={(e)=>{setIsPremium(e.target.checked)}}/>
                                <p>isPremium</p>
                            </div>
                            <div className="box">
                                <input type="checkbox"  checked={isPopular} onChange={(e)=>{setIsPopular(e.target.checked)}}/>
                                <p>isPopular</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" checked = {isInIndia} onChange={ (e)=>{setIsInIndia(e.target.checked)} } />
                                <p>is-In-India</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" checked = {isInTn} onChange={(e) => {setIsInTn(e.target.checked)}}/>
                                <p>is-In-Tamilnadu</p>
                            </div>
                        
                        </div>


                        <p>Please Confirm Before Submitting</p>
                        <div className="confirmationSection">
                            <div className="row">
                                <h4>Name : <strong>{place}</strong></h4>
                                
                            </div>
                            <div className="row">
                                <h4>Days : {days}</h4>
                                
                            </div>
                            <div className="row">
                                <h4>Nights : {nights}</h4>
                                
                            </div>
                            
                            <div className="row">
                                <h4>{isPremium ? "Premium Package" : "Ordinary Package"}</h4>
                            </div>
                            <div className="row">
                                <h4>{isPopular ? "Popular Package" : "Not a Popular one"}</h4>
                            </div>
                            
                            
                            <div className="row">
                                <h4>{isInIndia ? `Place ${place !== null ? `${place}` : ``} is in INDIA` : `Place ${place !== null ? `${place}` : ``} is not in INDIA`}</h4>
                            </div>
                            
                            <div className="row">
                                <h4>{isInTn ? `Place ${place !== null ? `${place}` : ``} is in Tamilnadu` : `Place ${place !== null ? `${place}` : ``} is not in Tamilnadu`}</h4>
                            </div>
                        </div>
                        <button>Create</button>
                    </form>
                </div>
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

    export default TourDetailsRegistration