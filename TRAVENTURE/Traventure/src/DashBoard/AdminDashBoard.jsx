import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styles/AdminDashboard.css";

const AdminDashBoard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('tours'); // 'tours' or 'devotional'
    
    // Tour states
    const [tourDetails, setTourDetails] = useState([]);
    const [tourId, setTourId] = useState('');
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('');
    const [nights, setNights] = useState('');
    const [aboutLoc, setAboutLoc] = useState('');
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const [url3, setUrl3] = useState('');
    const [url4, setUrl4] = useState('');
    const [url5, setUrl5] = useState('');
    const [url6, setUrl6] = useState('');
    const [isPremium, setIsPremium] = useState(false);
    const [isPopular, setIsPopular] = useState(false);
    const [isInIndia, setIsInIndia] = useState(false);
    const [isInTn, setIsInTn] = useState(false);

    // Devotional trip states
    const [devotionalTrips, setDevotionalTrips] = useState([]);
    const [tripId, setTripId] = useState('');
    const [templeName, setTempleName] = useState('');
    const [location, setLocation] = useState('');
    const [selectedReligion, setSelectedReligion] = useState('');
    const [aboutTemple, setAboutTemple] = useState('');
    const [tripImgUrl1, setTripImgUrl1] = useState('');
    const [tripImgUrl2, setTripImgUrl2] = useState('');
    const [tripImgUrl3, setTripImgUrl3] = useState('');
    const [tripImgUrl4, setTripImgUrl4] = useState('');
    const [tripIsInIndia, setTripIsInIndia] = useState(false);
    const [tripIsInTamilnadu, setTripIsInTamilnadu] = useState(false);
    const [tripDays, setTripDays] = useState('');
    const [tripNights, setTripNights] = useState('');

    // Fetch all tours
    const handleGetAllTourReports = () => {
        axios.get('http://localhost:8080/dashboard/getAllTourReport')
            .then(response => {
                setTourDetails(response.data);
                setActiveTab('tours');
            })
            .catch(error => {
                console.error("Error fetching tour reports:", error);
            });
    }

    // Fetch all devotional trips
    const handleGetAllDevotionalTrips = () => {
        axios.get('http://localhost:8080/dashboard/getAllDevotionalTrips')
            .then(response => {
                setDevotionalTrips(response.data);
                setActiveTab('devotional');
            })
            .catch(error => {
                console.error("Error fetching devotional trips:", error);
            });
    }

    // Fetch single tour
    const handleFetchTourData = async (id) => {
        try {
            const response = await axios.get("http://localhost:8080/dashboard/getTourById", { params: { id } });
            const data = response.data;
            setTourId(data.id);
            setPlace(data.placeName);
            setDays(data.numOfDays);
            setNights(data.numOfNights);
            setAboutLoc(data.aboutLocation);
            setUrl1(data.imgUrl1);
            setUrl2(data.imgUrl2);
            setUrl3(data.imgUrl3);
            setUrl4(data.imgUrl4);
            setUrl5(data.imgUrl5);
            setUrl6(data.imgUrl6);
            setIsPremium(data.isPremium);
            setIsPopular(data.isPopular);
            setIsInIndia(data.isInIndia);
            setIsInTn(data.isInTn);
        } catch (e) {
            console.error("Error fetching tour data:", e);
        }
    };

    // Fetch single devotional trip
    const handleFetchDevotionalTripData = async (id) => {
        try {
            const response = await axios.get("http://localhost:8080/dashboard/getDevotionalTripById", { params: { id } });
            const data = response.data;
            setTripId(data.id);
            setTempleName(data.templeName);
            setLocation(data.location);
            setSelectedReligion(data.religion);
            setAboutTemple(data.aboutTemple);
            setTripImgUrl1(data.imgUrl1);
            setTripImgUrl2(data.imgUrl2);
            setTripImgUrl3(data.imgUrl3);
            setTripImgUrl4(data.imgUrl4);
            setTripIsInIndia(data.isInIndia);
            setTripIsInTamilnadu(data.isInTamilnadu);
            setTripDays(data.days);
            setTripNights(data.nights);
        } catch (e) {
            console.error("Error fetching devotional trip data:", e);
        }
    };

    // Update tour
    const handleUpdateTour = async (e) => {
        e.preventDefault();
        try {
            const updatedTour = {
                id: tourId,
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
                isPremium,
                isPopular,
                isInIndia,
                isInTn
            };

            await axios.put('http://localhost:8080/dashboard/updateTour', updatedTour);
            alert('Tour updated successfully!');
            handleGetAllTourReports();
        } catch (error) {
            console.error("Error updating tour:", error);
            alert('Failed to update tour');
        }
    };

    // Update devotional trip
    const handleUpdateDevotionalTrip = async (e) => {
        e.preventDefault();
        try {
            const updatedTrip = {
                id: tripId,
                templeName,
                location,
                religion: selectedReligion,
                aboutTemple,
                imgUrl1: tripImgUrl1,
                imgUrl2: tripImgUrl2,
                imgUrl3: tripImgUrl3,
                imgUrl4: tripImgUrl4,
                isInIndia: tripIsInIndia,
                isInTamilnadu: tripIsInTamilnadu,
                days: tripDays,
                nights: tripNights
            };

            await axios.put('http://localhost:8080/dashboard/updateDevotionalTrip', updatedTrip);
            alert('Devotional trip updated successfully!');
            handleGetAllDevotionalTrips();
        } catch (error) {
            console.error("Error updating devotional trip:", error);
            alert('Failed to update devotional trip');
        }
    };

    // Delete tour
    const handleDeleteTour = async (id) => {
        if (window.confirm('Are you sure you want to delete this tour?')) {
            try {
                await axios.delete('http://localhost:8080/dashboard/deleteTour', { params: { id } });
                alert('Tour deleted successfully!');
                handleGetAllTourReports();
            } catch (error) {
                console.error("Error deleting tour:", error);
                alert('Failed to delete tour');
            }
        }
    };

    // Delete devotional trip
    const handleDeleteDevotionalTrip = async (id) => {
        if (window.confirm('Are you sure you want to delete this devotional trip?')) {
            try {
                await axios.delete('http://localhost:8080/dashboard/deleteDevotionalTrip', { params: { id } });
                alert('Devotional trip deleted successfully!');
                handleGetAllDevotionalTrips();
            } catch (error) {
                console.error("Error deleting devotional trip:", error);
                alert('Failed to delete devotional trip');
            }
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="logoImg">
                <img src={logo} width={"50%"} alt="Company Logo" />
            </div>

            <div className="services">
                <div className="Registration">
                    <div className="heads">Registration Service</div>
                    <div className="tags">
                        <p onClick={() => navigate("/tourDetailsRegistration")}>Register Tours</p>
                        <p onClick={() => navigate("/devotionalTripRegistration")}>Register Devotional Trips</p>
                    </div>
                </div>
                <div className="Reports">
                    <div className="heads">Report Services</div>
                    <div className="tags">
                        <p onClick={handleGetAllTourReports}>Get all Tour Reports</p>
                        <p onClick={handleGetAllDevotionalTrips}>Get all Devotional Trips</p>
                    </div>
                </div>
            </div>

            {/* Tours Section */}
            {activeTab === 'tours' && tourDetails.length > 0 && (
                <div className="reports-container">
                    <div className="data-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Place Name</th>
                                    <th>Days</th>
                                    <th>Nights</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tourDetails.map((detail) => (
                                    <tr key={detail.id}>
                                        <td>{detail.id}</td>
                                        <td>{detail.placeName}</td>
                                        <td>{detail.numOfDays}</td>
                                        <td>{detail.numOfNights}</td>
                                        <td><img src={detail.imgUrl1} alt={detail.placeName} width={"100px"}/></td>
                                        <td>
                                            <button onClick={() => handleFetchTourData(detail.id)}>Edit</button>
                                        </td>
                                        <td>
                                            <button className="delete-btn" onClick={() => handleDeleteTour(detail.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="edit-form">
                        <h3>Edit Tour</h3>
                        <form onSubmit={handleUpdateTour} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            
                            <label>id</label>
                            <input 
                                type="text" 
                                value={tourId}  // Changed from id to tourId
                                readOnly
                                style={{ padding: '8px' }}
                                disabled
                            />
                            
                            <label>Place Name</label>
                            <input 
                                type="text" 
                                value={place} 
                                onChange={(e) => setPlace(e.target.value)}
                                style={{ padding: '8px' }}
                                required
                            />
                            
                            <label>Days</label>
                            <input 
                                type="text" 
                                value={days} 
                                onChange={(e) => setDays(e.target.value)}
                                style={{ padding: '8px' }}
                                required
                            />
                            
                            <label>Nights</label>
                            <input 
                                type="text" 
                                value={nights} 
                                onChange={(e) => setNights(e.target.value)}
                                style={{ padding: '8px' }}
                                required
                            />
                            
                            <label>Image URL 1</label>
                            <input 
                                type="text" 
                                value={url1} 
                                onChange={(e) => setUrl1(e.target.value)}
                                style={{ padding: '8px' }}
                                required
                            />
                            
                            <label>Image URL 2</label>
                            <input 
                                type="text" 
                                value={url2} 
                                onChange={(e) => setUrl2(e.target.value)}
                                style={{ padding: '8px' }}
                            />
                            
                            <label>Image URL 3</label>
                            <input 
                                type="text" 
                                value={url3} 
                                onChange={(e) => setUrl3(e.target.value)}
                                style={{ padding: '8px' }}
                            />
                            
                            <label>Image URL 4</label>
                            <input 
                                type="text" 
                                value={url4} 
                                onChange={(e) => setUrl4(e.target.value)}
                                style={{ padding: '8px' }}
                            />
                            
                            <label>Image URL 5</label>
                            <input 
                                type="text" 
                                value={url5} 
                                onChange={(e) => setUrl5(e.target.value)}
                                style={{ padding: '8px' }}
                            />
                            
                            <label>Image URL 6</label>
                            <input 
                                type="text" 
                                value={url6} 
                                onChange={(e) => setUrl6(e.target.value)}
                                style={{ padding: '8px' }}
                            />

                            <div className="aboutPlace">
                                <label>Special About Location</label>
                                <textarea 
                                    value={aboutLoc} 
                                    onChange={(e) => setAboutLoc(e.target.value)} 
                                    required
                                    style={{ padding: '8px', minHeight: '100px' }}
                                ></textarea>
                            </div>
                            
                            <div className="specials" style={{ display: 'flex', gap: '20px', margin: '10px 0' }}>
                                <div className="box" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={isPremium} 
                                        onChange={(e) => setIsPremium(e.target.checked)}
                                        style={{ marginRight: '5px' }}
                                    />
                                    <p>isPremium</p>
                                </div>
                                <div className="box" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={isPopular} 
                                        onChange={(e) => setIsPopular(e.target.checked)}
                                        style={{ marginRight: '5px' }}
                                    />
                                    <p>isPopular</p>
                                </div>
                                <div className="box" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={isInIndia} 
                                        onChange={(e) => setIsInIndia(e.target.checked)}
                                        style={{ marginRight: '5px' }}
                                    />
                                    <p>is-In-India</p>
                                </div>
                                <div className="box" style={{ display: 'flex', alignItems: 'center' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={isInTn} 
                                        onChange={(e) => setIsInTn(e.target.checked)}
                                        style={{ marginRight: '5px' }}
                                    />
                                    <p>is-In-Tamilnadu</p>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                style={{ 
                                    padding: '10px', 
                                    backgroundColor: '#4CAF50', 
                                    color: 'white', 
                                    border: 'none', 
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}
                            >
                                Update Tour
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Devotional Trips Section */}
            {activeTab === 'devotional' && devotionalTrips.length > 0 && (
                <div className="reports-container">
                    <div className="data-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Temple</th>
                                    
                                    <th>Religion</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {devotionalTrips.map((trip) => (
                                    <tr key={trip.id}>
                                        <td>{trip.id}</td>
                                        <td>{trip.templeName}</td>
                                        {/* <td>{trip.location}</td> */}
                                        <td>{trip.religion}</td>
                                        <td><img src={trip.imgUrl1} alt={trip.templeName} width={"100px"}/></td>
                                        <td>
                                            <button onClick={() => handleFetchDevotionalTripData(trip.id)}>Edit</button>
                                        </td>
                                        <td>
                                            <button className="delete-btn" onClick={() => handleDeleteDevotionalTrip(trip.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="edit-form">
                        <h3>Edit Devotional Trip</h3>
                        <form onSubmit={handleUpdateDevotionalTrip}>
                            <label>ID</label>
                            <input type="text" value={tripId} readOnly disabled/>

                            <label>Temple Name</label>
                            <input type="text" value={templeName} onChange={(e) => setTempleName(e.target.value)} required />

                            <label>Location</label>
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                            
                            <label htmlFor="">Religion</label>
                            <input type="text" value={selectedReligion} name="" id="" readOnly required/>

                            <label>Religion</label>
                            <select value={selectedReligion} onChange={(e) => setSelectedReligion(e.target.value)}>
                                <option value="">Select Religion</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Christian">Christian</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Other">Other</option>
                            </select>

                            <label>About Temple</label>
                            <textarea value={aboutTemple} onChange={(e) => setAboutTemple(e.target.value)} required></textarea>

                            <label>Image URL 1</label>
                            <input type="text" value={tripImgUrl1}  onChange={(e) => setTripImgUrl1(e.target.value)} required />

                            <label>Image URL 2</label>
                            <input type="text" value={tripImgUrl2} onChange={(e) => setTripImgUrl2(e.target.value)} />

                            <label>Image URL 3</label>
                            <input type="text" value={tripImgUrl3} onChange={(e) => setTripImgUrl3(e.target.value)} />

                            <label>Image URL 4</label>
                            <input type="text" value={tripImgUrl4} onChange={(e) => setTripImgUrl4(e.target.value)} />

                            <div className="checkbox-group">
                                <label>
                                    <input type="checkbox" checked={tripIsInIndia} onChange={(e) => setTripIsInIndia(e.target.checked)} />
                                    Is in India
                                </label>
                                <label>
                                    <input type="checkbox" checked={tripIsInTamilnadu} onChange={(e) => setTripIsInTamilnadu(e.target.checked)} />
                                    Is in Tamilnadu
                                </label>
                            </div>

                            <label>Days</label>
                            <input type="number" value={tripDays} onChange={(e) => setTripDays(e.target.value)} required />

                            <label>Nights</label>
                            <input type="number" value={tripNights} onChange={(e) => setTripNights(e.target.value)} required />

                            <button type="submit">Update Devotional Trip</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashBoard;