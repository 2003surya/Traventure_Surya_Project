import React, { useState, useEffect,useRef } from 'react';

// logo file
import logo from "../assets/logo.png";

//css file
import "../Styles/Home.css";

//rect icon files
import { IoCloseCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


//react router dom
import { data, useNavigate } from 'react-router-dom';
import EmailContext from "../context/EmailContext";
import { useContext } from 'react';
import axios from 'axios';






const Home = () => {
  const navigate = useNavigate();
  const {email} = useContext(EmailContext);

  const [isSticky, setIsSticky] = useState(false);

      useEffect(() => {
          const handleScroll = () => {
              setIsSticky(window.scrollY > 0);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function openBar(){
        let bar = document.getElementById('barList')

        bar.style.left ='0';
    }

    function closeBar(){
        let bar = document.getElementById('barList')

        bar.style.left ='-100%';
    }



    const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const backgroundImages = [
    'url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    'url(https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    'url(https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    'url(https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
  ];

  const contents = [
    {
      title: 'Travel',
      text: 'Travel broadens our perspectives and transforms us in ways that few other experiences can. Each journey offers new lessons, new stories, and new ways of understanding the world and ourselves. Happy exploring! 🌍✈️',
    },
    {
      title: 'Adventure',
      text: `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover." — Mark Twain 🌍✈️`,
    },
    {
      title: 'Wander',
      text: 'Every place tells its own story, every soul sings its own song. The beauty of travel is found not just in the landscapes we see, but in the people we meet, the cultures we experience, and the stories we carry home. 🌍✈️',
    },
  ];

  // Change background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextContent = () => {
    setCurrentContentIndex((prev) => (prev + 1) % contents.length);
  };

  const prevContent = () => {
    setCurrentContentIndex((prev) => (prev - 1 + contents.length) % contents.length);
  };



  const travelPacks = [
  {
    country: "Australia",
    image: "https://images.pexels.com/photos/2434267/pexels-photo-2434267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A land of striking contrasts, from the Outback to the Great Barrier Reef. Known for its unique wildlife, friendly locals, and laid-back lifestyle..."
  },
  {
    country: "America",
    image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "The United States is a melting pot of cultures, famed for its diversity and innovation. From the skyscrapers of New York to the natural beauty..."
  },
  {
    country: "Alaska",
    image: "https://images.pexels.com/photos/2024881/pexels-photo-2024881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A state of rugged wilderness, famed for its breathtaking landscapes and abundant wildlife. Home to Denali, North America's highest peak..."
  },
  {
    country: "Japan",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An island nation blending ancient traditions with cutting-edge technology. Famed for its temples, cherry blossoms, and bustling cities like Tokyo..."
  },
  {
    country: "China",
    image: "https://images.pexels.com/photos/1423580/pexels-photo-1423580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "A country with a long history and diverse landscapes, from the Great Wall to modern cities like Beijing and Shanghai..."
  },
  {
    country: "Sri Lanka",
    image: "https://images.pexels.com/photos/319892/pexels-photo-319892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "An island nation known for its stunning beaches, tea plantations, and ancient ruins. Rich in biodiversity and historic cities..."
  }
];


    const [popularCardIndex, setPopularCardIndex] = useState(0);

  const nextCard = () => {
    setPopularCardIndex((prevIndex) => (prevIndex + 1) % travelPacks.length);
  };

  const prevCard = () => {
    setPopularCardIndex((prevIndex) =>
      (prevIndex - 1 + travelPacks.length) % travelPacks.length
    );
  };

    const imageUrls = [
  'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1886&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1535&auto=format&fit=crop',
  'https://images.pexels.com/photos/3367459/pexels-photo-3367459.jpeg',
  'https://images.pexels.com/photos/1007431/pexels-photo-1007431.jpeg',
  'https://images.pexels.com/photos/2730218/pexels-photo-2730218.jpeg',
  'https://images.pexels.com/photos/1065753/pexels-photo-1065753.jpeg',
  'https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg',
  'https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg',
  'https://images.pexels.com/photos/2349168/pexels-photo-2349168.jpeg',
  'https://images.pexels.com/photos/3367460/pexels-photo-3367460.jpeg',
  'https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg',
  'https://images.pexels.com/photos/29214791/pexels-photo-29214791/free-photo-of-breathtaking-view-of-snowcapped-sonamarg-mountains.jpeg',
  'https://images.pexels.com/photos/18299071/pexels-photo-18299071/free-photo-of-a-man-with-face-paint-and-a-yellow-body.jpeg',
  'https://images.pexels.com/photos/25903941/pexels-photo-25903941/free-photo-of-traditional-building-and-benches-in-the-park.jpeg',
  'https://images.pexels.com/photos/6687168/pexels-photo-6687168.jpeg',
  'https://images.pexels.com/photos/28380912/pexels-photo-28380912/free-photo-of-sunflowers-in-a-field-with-a-windmill-in-the-background.jpeg',
  'https://images.pexels.com/photos/13226728/pexels-photo-13226728.jpeg',
  'https://images.pexels.com/photos/14422593/pexels-photo-14422593.jpeg',
  'https://images.pexels.com/photos/23914402/pexels-photo-23914402/free-photo-of-meenakshi-amman-temple.jpeg',
  'https://images.pexels.com/photos/10710416/pexels-photo-10710416.jpeg',
  'https://images.pexels.com/photos/4776145/pexels-photo-4776145.jpeg',
  'https://images.pexels.com/photos/20322321/pexels-photo-20322321/free-photo-of-man-on-boat-on-lake-with-towers-behind.jpeg'
];
    const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [popularCardInd, setPopularCardInd] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAutoScroll();
          observer.disconnect();
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setPopularCardInd(prevIndex => {
        const newIndex = (prevIndex + 1) % imageUrls.length;
        const container = containerRef.current;
        const images = container.querySelectorAll('img');

        if (images[newIndex]) {
          container.scrollTo({
            left: images[newIndex].offsetLeft,
            behavior: 'smooth',
          });
        }

        return newIndex;
      });
    }, 3000);
  };





    


  const cardsData = [
  {
    title: 'Munnar - Chill Stay',
    days: '4 days 3 nights',
    price: 6000,
    img: 'https://images.pexels.com/photos/14844301/pexels-photo-14844301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Kodaikanal',
    days: '3 days 2 nights',
    price: 4000,
    img: 'https://images.pexels.com/photos/12791178/pexels-photo-12791178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Kanyakumari',
    days: '3 days 2 nights',
    price: 3500,
    img: 'https://images.pexels.com/photos/25809063/pexels-photo-25809063/free-photo-of-vivekananda-rock-memorial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Ooty - Tea Capital',
    days: '3 days 2 nights',
    price: 4000,
    img: 'https://images.pexels.com/photos/8465212/pexels-photo-8465212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Rameshwaram',
    days: '2 days 1 nights',
    price: 2000,
    img: 'https://images.pexels.com/photos/15033309/pexels-photo-15033309/free-photo-of-pamban-railway-bridge-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Yercaud',
    days: '3 days 2 nights',
    price: 4000,
    img: 'https://img.freepik.com/free-photo/beautiful-ramboda-waterfall-sri-lanka-island_167946-169.jpg?t=st=1738327341~exp=1738330941~hmac=86dfbda679f9d7d6a2a69183871cdeb0041c6aef0b7697086575a6214f56d730&w=900',
  }
];
const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  };



  const[showEnquiryForm,setShowEnquiryForm] = useState(true)
  const[showEnquiryFormMessage,setShowEnquiryFormMessage] = useState(false)

  const[name,setName] = useState("");
  const[emailForEnquiry,setEmailForEnquiry] = useState("");
  const[whatsAppNumber,setWhatsAppNumber] = useState("");
  const [dreamJourney, setDreamJourney] = useState("");
  const[journeyDate,setJourneyDate] = useState("");
  const[noOfPersons,setNoOfPersons] = useState(1);

  const handleSubmitEnquiry = async (e) => {
    e.preventDefault();

    const enquiry = {
      name: name,
      emailId: emailForEnquiry,
      whatsAppNumber: whatsAppNumber,
      dreamJourney: dreamJourney,
      journeyDate: journeyDate,
      noOfPersons: noOfPersons,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/Enquiry/submitEnquiry",
        enquiry,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data === "Enquiry Added SuccessFully") {
        setShowEnquiryForm(false);
        setShowEnquiryFormMessage(true);
        handleAlertMsg(`💥 Dear "${name}" Your Request has been Submited our Authorized Team will Reach you Soon 🤞`)
      }
    } catch (error) {
      handleAlertMsg("Something went wrong. Please try again later.",true);
      console.error(error);
    }
  };

  const handleAddSubscription =  async(e) =>{
    e.preventDefault();

    try{
      const response = await axios.post(`http://localhost:8080/Addsubscription`, null, {
          params: { emailId: emailForEnquiry },
        })
        if(response.data === "Already a user"){
          // alert("🤞 Your Mail id has been alrady a subscribed user Thankyou for your continuous interese 😍")
          handleAlertMsg(`🤞  Dear " ${emailForEnquiry} " You're Already a subscriber...😍 Keep Support `,false)
        }
        if(response.data === "subscription added successfully"){
          handleAlertMsg(`😎  Dear " ${emailForEnquiry} " Subscription Added Successfully 💝`,false)
        }
    }catch{
      handleAlertMsg("something went wrong")
    }
  }


  const[showAlert,setShowAlert] = useState(false)
  const[alertMsgContent,setAlertMsgContent] = useState();
  const[isErrorMsg,setIsErrorMsg] = useState(false);

  const handleAlertMsg = (msgContent,isErrorMessage)=>{
  
    setAlertMsgContent(msgContent)
    setShowAlert(true)
    setIsErrorMsg(isErrorMessage)

    setTimeout( ()=>{
      setAlertMsgContent("")
      setShowAlert(false)
    },5000)
    
  }

  

  return(
    <div className='HomePage'>  
      <div className="pageContent">
        <div className="header">
            <a href=""><FaSquareInstagram /></a>
            <a href=""><FaFacebook /></a>
            <a href=""><IoMdMail /></a> 
        </div>
        <div className={`navbar ${isSticky ? 'sticky-active' : ''}`}>
            <div className="col1">
                <img src={ logo } />
                <p>Explore Unreachable</p>
            </div>
            <div className="col2">
                <ul>
                  <li><a onClick={()=>{navigate("/popularPacks")}}>Popular Plans</a></li>
                  <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>
                  <li><a onClick={()=>{navigate("/DevotionalPlans")}}>Devotionals</a></li>
                  <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
                  <li><a onClick={ ()=>{navigate("/aboutUs")}}>About</a></li>
                  <li><a onClick={()=>{navigate("/SupportPage")}}>Support</a></li>

                </ul>
            </div>
           
            <div className="col3">
                <div className="bar">
                    <button onClick={ openBar}><FaBars /></button>
                </div>
                <div className="barList" id="barList">
                    <ul>
                      <li><a onClick={()=>{navigate("/popularPacks")}}>Popular Plans</a></li>
                      <li><a onClick={()=>{navigate("/EducationalTrips")}}>Educational Plans</a></li>
                      <li><a onClick={()=>{navigate("/DevotionalPlans")}}>Devotionals</a></li>
                      <li><a onClick={()=>{navigate("/cruiseShipPacks")}}>Cruise</a></li>
                      <li><a onClick={ ()=>{navigate("/aboutUs")}}>About</a></li>
                      <li><a onClick={()=>{navigate("/SupportPage")}}>Support</a></li>
                    </ul>

                    <div className="cancel">
                        <button onClick={ closeBar }><IoCloseCircle /></button>
                    </div>
                </div>
            </div>
        </div>    



        <div
      className="banner"
        style={{
        backgroundImage: backgroundImages[currentImgIndex],
            backgroundPosition : "bottom",
    }}
    >
      <div className="contents">
        {contents.map((item, index) => (
          <div
            key={index}
            className={`content ${index === currentContentIndex ? 'active' : ''}`}
          >
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="nxtBtns">
        <button onClick={prevContent}>
          <GrCaretPrevious size={20} />
        </button>
        <button onClick={nextContent}>
          <GrCaretNext size={20} />
        </button>
      </div>
    </div>

    <div className="popularPacks">
      <div className="packHead">
        <h1>🗺️ Popular International Packs are Here ✈️</h1>
      </div>

      <div className="cards">
        {travelPacks.map((pack, index) => (
          <div
            key={index}
            className={`card ${index === popularCardIndex ? 'acti' : ''}`}
          >
            <div className="imgSection">
              <img src={pack.image} alt={pack.country} />
            </div>
            <div className="content">
              <h1>{pack.country}</h1>
              <p>{pack.description}</p>
              <a href="#">Explore Now</a>
            </div>
          </div>
        ))}

        <div className="cardBtns">
          <button onClick={prevCard}><GrPrevious /></button>
          <button onClick={nextCard}><GrNext /></button>
        </div>
      </div>

      <div className="more" >
        <a
          onClick={()=>{navigate("/popularPacks")}}>
          Explore More
        </a>
      </div>
    </div>



         <div className="incIndia">
      <div className="head">
        <h1>Incredible India  🛕 </h1>
      </div>
      <div className="content">
        <div className="col1" ref={containerRef}>
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`India ${index}`} />
          ))}
        </div>
        <div className="col2">
          <h1>Grab the All India Tour opportunity💥</h1>
          <p>
            Explore the historic landmarks of North India, including Delhi,
            Agra, and Jaipur. Discover the serene backwaters and beaches of
            Kerala in South India. Experience the spiritual ambiance of
            Varanasi and the scenic beauty of Darjeeling in East India. Enjoy
            the vibrant nightlife of Mumbai and the unique landscapes of the
            Rann of Kutch in West India. Witness the ancient temples of
            Khajuraho and the wildlife of Panna National Park in Central India.
            Embrace the natural wonders of Meghalaya and Arunachal Pradesh in
            Northeast India. Bask in the tropical beauty of the Andaman and
            Nicobar Islands. Traverse the deserts and palaces of Rajasthan, and
            savor the cultural richness of Tamil Nadu with its grand temples
            and classical arts. Relish the tea gardens of Assam and the
            architectural marvels of Karnataka. Marvel at the beaches and
            churches of Goa, explore the historic ruins of Hampi, and delve
            into the bustling life of Kolkata, the City of Joy.
          </p>
          <a href="/PanIndiaTour" target='_blank'>Explore More</a>
        </div>
      </div>
    </div>

        <div className="welcome">
            <div className="head">
                <h1>Welcome to Traventure</h1>
            </div>
            <div className="content">
                <p>Traventure is your go-to application for exploring the diverse and vibrant landscapes of India. Whether you're an adventure seeker, history buff, nature lover, or cultural enthusiast, Traventure has something for everyone. Experience the thrill of discovery as you uncover hidden gems and immerse yourself in rich cultural traditions. Our app provides curated itineraries, personalized recommendations, and detailed guides to help you navigate through India's vast and varied experiences. With Traventure, you're not just traveling—you're embarking on an adventure of a lifetime. Enjoy seamless travel planning with expert insights, explore the natural beauty and architectural wonders of India, and indulge in local flavors and festivities. Traventure ensures that every journey is memorable and filled with wonder. Let us be your trusted companion, guiding you through new experiences and unforgettable moments. Embrace the adventure with Traventure and make the most of every journey.</p>
            </div>
            <div className="imgSection">
                <img src={logo} alt="" />
            </div>
            <div className="more">
                <a onClick={()=>{navigate("/aboutUs")}}>Explore More about us </a>
            </div>
        </div>
        
        <div className="premium">
            <div className="head">
                <h1>Luxury Packs Group Packs</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="content">
                        <h1>South Africa Group Tour</h1>
                        <p>4 Days 3 nights</p>

                    </div>

                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSection">
                        <img src="https://cdn.pixabay.com/photo/2019/12/03/13/25/yipeng-4670044_1280.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h1>Thailand <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>

                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSection">
                        <img src="https://cdn.pixabay.com/photo/2020/01/31/07/27/temple-4807321_1280.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h1>Japan <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>

                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSection">
                        <img src="https://cdn.pixabay.com/photo/2019/10/10/22/15/norway-4540666_1280.jpg" alt=""/>
                    </div>
                    <div className="content">
                        <h1>Scandinavia <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>

                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/2340478/pexels-photo-2340478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="content">
                        <h1>Vietnam <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/372490/pexels-photo-372490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="content">
                        <h1>United Kingdom <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/3214994/pexels-photo-3214994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="content">
                        <h1>Turkey <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>            
                <div className="card">
                    <div className="imgSection">
                        <img src="https://cdn.pixabay.com/photo/2017/01/05/12/00/abu-simbel-1954923_1280.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h1>Abu Dhabi <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>            
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="content">
                        <h1>Europe <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>  
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    </div>
                    <div className="content">
                        <h1>Bali <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>          
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/30409252/pexels-photo-30409252/free-photo-of-bulgarian-festival-participant-in-traditional-costume.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="content">
                        <h1>Eastern Europe <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>          
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/33571/tutankhamun-death-mask-pharaonic-egypt.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="content">
                        <h1>Egypt <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div> 
                <div className="card">
                    <div className="imgSection">
                        <img src="https://images.pexels.com/photos/2804038/pexels-photo-2804038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="content">
                        <h1>Singapore <br/>Group Tour</h1>
                        <p>4 Days 3 nights</p>
                    </div>
                    <div className="watermark">
                        <p>Luxary Premium</p>
                    </div>
                    <div className="foot">
                        <p>*Limited Members allowed</p>
                    </div>
                </div>         

            
            </div>

            <div className="more">
                <a href="">Explore more</a>
            </div>
        </div>


         <div className="tn">
      <div className="head">
        <h1>Popular in Tamilnadu</h1>
      </div>

      <div className="cards">
        <div className="nxtBtn">
          <button onClick={prevSlide}>
            <GrFormPrevious />
          </button>
          <button onClick={nextSlide}>
            <MdOutlineNavigateNext />
          </button>

        </div>

        {cardsData.map((card, index) => (
          <div key={index} className={`card ${index === currentIndex ? 'active' : ''}`} >
            <div className="imgSection">
              <img src={card.img} alt={card.title} />
              <div className="best">Best Deal</div>
            </div>
            <div className="content">
              <h1>{card.title}</h1>
              <div className="col">
                <p>{card.days}</p>
                <p>&#8377;<span>{card.price}</span>/Person</p>
              </div>
              <a>View more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
        

        <div className="enquirySection">
            <div className="col1">
                <h1>Make Your Dream Jouney Real with</h1>
                <img src={logo} alt="" />

                <p>Get Connected with us</p>
                <p>
                    <FaPhoneVolume />
                    +91 6379227084
                </p>
                <p>
                    <IoLogoWhatsapp />
                    +91 9500323956
                </p>
            </div>
            <div className="col2 home-enquiry-form">

              {showEnquiryForm && 
                <form onSubmit={handleSubmitEnquiry}>
                    <h1>Book your Dream Journey Today</h1>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>

                    <label htmlFor="mail">Email Id</label>
                    <input type="email" id="mail" value={ emailForEnquiry } onChange={ (e)=>{setEmailForEnquiry(e.target.value)} } required/>
                    
                    <label htmlFor="">Whatsapp Number</label>
                    <input type="text" value={whatsAppNumber} onChange={(e)=>{setWhatsAppNumber(e.target.value)}} required/>
                    
                    <label htmlFor="">Dream Journey</label>
                    <input type="text" value={dreamJourney} onChange={(e)=>{setDreamJourney(e.target.value)}} required/>

                    <label htmlFor="">Jouney Date</label>
                    <input type="date" value={journeyDate} onChange={(e)=>{setJourneyDate(e.target.value)}} />
                    
                    <label htmlFor="">No of Persons</label>
                    <input type="number" value={noOfPersons} onChange={(e)=>{setNoOfPersons(e.target.value)}} />
                    

                    <button>Enquire</button>
                </form>
              }
              {showEnquiryFormMessage &&
                <div className="EnquiryMsg">
                  <h4>Your Enquiry Request was Submitted Successfully 😍</h4>
                  <h3>Our Service team will reach You Soon</h3>
                  <button onClick={ ()=>{ setShowEnquiryForm(true); 
                    setName("");
                    setWhatsAppNumber("")
                    setDreamJourney("")
                    setJourneyDate("")
                    setNoOfPersons(1)
                    setShowEnquiryFormMessage(false)}} >Another Enquiry</button>
                </div>
              }

            </div>
        </div>

        <div className="footer">
            <div className="row1">
                <h1>Get Latest Updates</h1>

                <form onSubmit={handleAddSubscription}>
                    <input type="email" placeholder="Your Email"  value={emailForEnquiry} onChange={ (e)=>{setEmailForEnquiry(e.target.value)}}/>
                    <button>Submit</button>
                </form>
            </div>
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
      
      {
        showAlert && 
        <div className="alert">
          <p style={{backgroundColor : isErrorMsg ? "Red" : "Yellow"}}>{alertMsgContent}</p>
        </div>
      }
      
    </div>
  )
}

export default Home