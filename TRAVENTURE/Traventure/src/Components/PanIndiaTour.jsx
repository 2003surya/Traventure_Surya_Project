import React from 'react';
import '../Styles/PanIndiaTour.css';

const PanIndiaTour = () => {
  const itinerary = [
    {
      day: 1,
      location: "Kanyakumari",
      highlights: "Sunrise at Vivekananda Rock, Thiruvalluvar Statue, Kanyakumari Beach",
      accommodation: "Beach View Resort",
      image: "https://images.unsplash.com/photo-1527705381526-469031509a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D"
    },
    {
      day: 2,
      location: "Rameswaram",
      highlights: "Ramanathaswamy Temple, Dhanushkodi, Agni Theertham",
      accommodation: "Temple View Hotel",
      image: "https://images.unsplash.com/photo-1621338615866-4e6bc5cf5762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFtZXNod2FyYW18ZW58MHx8MHx8fDA%3D"
    },
    {
      day: 3,
      location: "Madurai",
      highlights: "Meenakshi Amman Temple, Thirumalai Nayakkar Palace, Gandhi Museum",
      accommodation: "Heritage Grand",
      image: "https://images.unsplash.com/photo-1572146462570-2129a547e6dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkdXJhaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      day: 4,
      location: "Chennai",
      highlights: "Marina Beach, Kapaleeshwarar Temple, Fort St. George",
      accommodation: "Beachfront Hotel",
      image: "https://images.unsplash.com/photo-1661366698983-3cb843219300?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZW5uYWl8ZW58MHx8MHx8fDA%3D"
    },
    {
      day: 5,
      location: "Puri",
      highlights: "Jagannath Temple, Puri Beach, Konark Sun Temple",
      accommodation: "Temple Side Resort",
      image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVyaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      day: 6,
      location: "Kolkata",
      highlights: "Victoria Memorial, Howrah Bridge, Dakshineswar Kali Temple",
      accommodation: "City Central Hotel",
      image: "https://images.unsplash.com/photo-1647102208648-5f3175091dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      day: 7,
      location: "Varanasi",
      highlights: "Ganga Aarti, Kashi Vishwanath Temple, Sarnath",
      accommodation: "Ganges View Guesthouse",
      image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D"
    },
    {
      day: 8,
      location: "Agra",
      highlights: "Taj Mahal, Agra Fort, Fatehpur Sikri",
      accommodation: "Taj View Hotel",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdyYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      day: 9,
      location: "Delhi",
      highlights: "Red Fort, Qutub Minar, India Gate",
      accommodation: "Capital Grand",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaGl8ZW58MHx8MHx8fDA%3D"
    },
    {
      day: 10,
      location: "Amritsar",
      highlights: "Golden Temple, Wagah Border, Jallianwala Bagh",
      accommodation: "Gurudwara Guesthouse",
      image: "https://images.unsplash.com/photo-1583821017783-4333717df070?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      day: 11,
      location: "Shimla",
      highlights: "Mall Road, Jakhu Temple, Toy Train Ride",
      accommodation: "Mountain Retreat",
      image: "https://images.unsplash.com/photo-1489933504786-389c51eb1b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      day: 12,
      location: "Srinagar",
      highlights: "Dal Lake, Shalimar Bagh, Gulmarg",
      accommodation: "Houseboat Stay",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3JpbmFnYXJ8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="pan-india-tour">
      <header className="tour-header">
        <h1>The Ultimate India Tour</h1>
        <p className="subtitle">From Kanyakumari to Kashmir - A Journey Through Incredible India</p>
        <div className="tour-highlights">
          <span><i className="fas fa-map-marked-alt"></i> 12 Destinations</span>
          <span><i className="fas fa-clock"></i> 12 Days</span>
          <span><i className="fas fa-rupee-sign"></i> Starting from ₹1,25,000</span>
        </div>
      </header>


      <div className="itinerary-container">
        <h2 className="section-title">Detailed Itinerary</h2>
        
        <div className="timeline">
          {itinerary.map((day) => (
            <div key={day.day} className="timeline-item">
              <div className="timeline-day">Day {day.day}</div>
              <div className="timeline-content">
                <div className="location-image" style={{ backgroundImage: `url(${day.image})` }}></div>
                <div className="location-info">
                  <h3>{day.location}</h3>
                  <div className="location-highlights">
                    <h4>Highlights:</h4>
                    <p>{day.highlights}</p>
                  </div>
                  <div className="location-accommodation">
                    <h4>Accommodation:</h4>
                    <p>{day.accommodation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tour-summary">
        <h2 className="section-title">Tour Summary</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <i className="fas fa-route"></i>
            <h3>Route</h3>
            <p>Kanyakumari → Rameswaram → Madurai → Chennai → Puri → Kolkata → Varanasi → Agra → Delhi → Amritsar → Shimla → Srinagar</p>
          </div>
          <div className="summary-card">
            <i className="fas fa-calendar-alt"></i>
            <h3>Duration</h3>
            <p>12 Days / 11 Nights</p>
          </div>
          <div className="summary-card">
            <i className="fas fa-hotel"></i>
            <h3>Accommodation</h3>
            <p>3-4 Star Hotels & Special Stays (Houseboat, Heritage Properties)</p>
          </div>
          <div className="summary-card">
            <i className="fas fa-bus"></i>
            <h3>Transport</h3>
            <p>AC Coach, Flights for Long Distances, Local Transport</p>
          </div>
          <div className="summary-card">
            <i className="fas fa-users"></i>
            <h3>Special Offer for Group Package</h3>
            <p>upto 15% Discount on Bulk Bookings</p>
          </div>
          <div className="summary-card">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Insurance Coverage</h3>
            <p>This Plan includes Insurance Coverage upto Rs.50,000 incase of any accident</p>
          </div>
          
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready for the Journey of a Lifetime?</h2>
        <p>Limited seats available for this exclusive pan-India experience</p>
        <button className="cta-button">Book Your India Tour Now</button>
      </div>
    </div>
  );
};



export default PanIndiaTour;