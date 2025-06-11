import React, { useContext, useState , useEffect} from 'react';
import EmailContext from "../context/EmailContext";
import "../Styles/registerForm.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import axios from 'axios';

const RegisterForm = () => {
  const { email } = useContext(EmailContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (email === "") {
      navigate('/');
    }
  }, [email, navigate]);
  

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", 
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", 
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", 
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
    "Malta", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", 
    "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", 
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino", 
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", 
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", 
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", 
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
    
  const[selectedCountry,setSelectedCountry] = useState("")
  
  const[firstName,setFirstName] = useState("")
  const[secondName,setSecondName] = useState("")
  const[mobileNumber,setMobileNumber] = useState("")

  // const[isButtonDisabled,setIsButtonDisabled] = useState(true)

  // useEffect(() => {
  //   if (email && firstName.trim() && mobileNumber.trim()) {
  //     setIsButtonDisabled(false);
  //   } else {
  //     setIsButtonDisabled(true);
  //   }
  // }, [email, firstName, mobileNumber]);



  const banners = [
    {
      title: "We Trust us....",
      subtitle: "over 4m+ people around earth trusts us",
      text: "At the heart of our mission lies trust — built over years of delivering reliable, innovative solutions.Millions of users around the world depend on us for safety, speed, and seamless experiences.We believe in putting people first, empowering them with the best in technology.Our global footprint is a testament to our consistent commitment to excellence.From urban cities to remote regions, our solutions have made a mark.We don’t just promise innovation — we earn trust by delivering it daily."
    },
    {
      title: "We Work on Future",
      subtitle: "Integrating Artificial Intelligence on Vehicles",
      text: "The future of mobility is intelligent, and we’re building it today.By integrating AI into vehicles, we enhance safety, navigation, and efficiency.Our technology adapts in real-time, making smarter decisions on every journey.We’re shaping the next generation of transportation — autonomous, connected, and aware.Innovation drives us to push boundaries in automotive intelligence.The road ahead is smarter — and we’re engineering that future now."
    },
    {
      title: "High speed Transportation",
      subtitle: "Ignoring the relation between Time & Distance",
      text: "We’re redefining the way the world moves — faster, smarter, and farther.Our high-speed transport systems challenge the traditional limits of time and space.Advanced engineering and optimized networks make ultra-fast travel possible.Whether across cities or continents, our tech ensures efficiency and reliability.We envision a world where distance is no longer a barrier to opportunity.Speed isn't just a goal — it's a foundation for the future of connectivity."
    },
    {
      title: "Sustainable Innovation",
      subtitle: "Driving the Green Revolution in Transportation",
      text: "We believe the future must be both fast and sustainable. Our eco-friendly transport solutions prioritize the planet without compromising performance. From electric mobility to carbon-neutral logistics, we're paving the way for a cleaner tomorrow. Every innovation we introduce is designed with the environment in mind. Join us in transforming how we move — responsibly and powerfully."
    },
    {
      title: "Global Connectivity",
      subtitle: "Bridging Borders Through Smart Infrastructure",
      text: "Our vision extends beyond vehicles — we build smart ecosystems that connect people, places, and possibilities. Through intelligent infrastructure, we’re breaking down geographic and digital barriers. Our systems integrate seamlessly across regions, creating a unified network of mobility. Whether you're in a city hub or rural outpost, our technology keeps you connected to the world."
    },
    {
      title: "Precision Engineering",
      subtitle: "Crafted for Safety, Designed for Excellence",
      text: "Every component we design reflects a commitment to precision and reliability. From concept to deployment, our engineering process ensures maximum safety and performance. We combine advanced materials with cutting-edge tech to create durable, responsive systems. With every innovation, we reinforce our promise: excellence in every detail, safety in every journey."
    },
    {
      title: "Smart Cities Ahead",
      subtitle: "Technology that Powers Urban Mobility",
      text: "As cities grow, so does the need for smarter mobility. We integrate intelligent systems into urban infrastructures, enhancing traffic flow, safety, and public transit efficiency. Our solutions support real-time decision-making, reduce congestion, and improve quality of life. Urban transformation begins with connected mobility — and we’re at the forefront of that change."
    },
    {
      title: "Unmatched Reliability",
      subtitle: "Because Every Second Counts",
      text: "In a fast-paced world, reliability isn't optional — it's essential. Our systems are built to perform under pressure, with uptime and precision at their core. Whether it’s logistics, navigation, or real-time alerts, we deliver consistently. Because when lives and livelihoods depend on it, we show up — every time."
    },
    {
      title: "AI-Driven Insights",
      subtitle: "Harnessing Data to Drive Mobility Intelligence",
      text: "We transform raw data into actionable intelligence. Our AI-powered analytics platforms continuously learn and adapt, improving operations in real time. From predictive maintenance to traffic pattern analysis, we help organizations stay ahead. Insight fuels innovation — and our systems are designed to keep learning and evolving."
    },
    {
      title: "Next-Gen Logistics",
      subtitle: "Reimagining Delivery Through Automation",
      text: "The future of logistics is autonomous, optimized, and lightning fast. Our integrated systems redefine how goods move — reducing delays, cutting costs, and ensuring safety. From drones to automated fleets, we’re reshaping the supply chain. Logistics isn't just a service — it's a strategic edge, and we're making it smarter than ever."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };


  const handleSaveUser = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`http://localhost:8080/api/user/addUser`, null, {
        params: {
          mailId: email,
          firstName,
          secondName,
          mobileNumber,
          country: selectedCountry
        }
      });
  
      alert(response.data);
      setFirstName("");
      setSecondName("");
      setMobileNumber("");
      setSelectedCountry("");
      
      
      navigate('/Home');
      
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("User with this email already exists.");
        navigate('/Home');
      } else {
        alert("Registration failed. Please try again.");
      }
      console.error("Error:", error);
    }
  }
  
  return (
    <div className="container register">
      <div className="left-side">
      <img src={logo} alt="logo" />
      <div className="banners-wrapper">
        <div
          className="banners"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div className="banner" key={index}>
              <h1>{banner.title}</h1>
              <h4>{banner.subtitle}</h4>
              <p>{banner.text}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={handlePrev}><BiSolidLeftArrow /></button>
          <button onClick={handleNext}><BiSolidRightArrow /></button>
        </div>
      </div>
      
    </div>
      <div className="right-side">
        <h1>Register Here</h1>
        <form onSubmit={ handleSaveUser }>
          <input type="email" id='email' value={email} disabled readOnly/>
          
          <input type="text" placeholder="First Name" 
          onChange={ (e)=>{ setFirstName(e.target.value.toUpperCase())} }
          value={ firstName }
          required 
          />
          
          <input type="text" placeholder="Second Name" 
          value={secondName}
          onChange={ (e)=>{setSecondName(e.target.value.toUpperCase())}}
          />

          <input type="tel" placeholder='Mobile Number'
          value={mobileNumber}
          onChange={(e)=>{setMobileNumber(e.target.value)}} required
          />

          <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value) }>
            <option value="" disabled hidden>Select your country</option>
            {
              countries.map(
                (country,index)=>{
                  return(
                  <option key={index} value={country}>{country}</option>
                  )
                }
              )
            }
          </select>
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
