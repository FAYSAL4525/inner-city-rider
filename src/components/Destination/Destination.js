import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Destination.css'
import Map from '../../images/Map.png';

const Destination = () => {
    const [loggedInUser, setLoggedInUser, vehicaleData] = useContext(UserContext);
    const [submitChange, setSubmitChange] = useState(true);
    console.log(vehicaleData);
    return (
        <div className="destination">
            <Header userName={loggedInUser.name} success={loggedInUser.success}></Header>
            <div className="container">
                <div className="destination-container">
                    <div className="pick-vehaicale">
                        <h3 className="city-rider-header">INNER-CITY RIDER</h3>
                        {
                            submitChange ? <form onClick={() => setSubmitChange(!submitChange)} className="form-container">
                                <h5>Pick From</h5>
                                <input type="text" name="" id="" placeholder="Mirpur 1" /><br />
                                <h5>Pick To</h5>
                                <input type="text" name="" id="" placeholder="Dhanmondi" /><br />
                                <input className="submit" type="submit" value="Search" />
                            </form>

                                : <div className="ticker-container">
                                    <div className="card-home">
                                        <div className="connector-head">
                                            <div className="connector-container">
                                                <div className="round"></div>
                                                <div className="round-connect"></div>
                                                <div className="round"></div>
                                            </div>
                                            <div className="connector-container">
                                                <h4>Mirpur1</h4>
                                                <br /><br />
                                                <h4>Dhanmondi</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        vehicaleData.map(vehicaleData => <div className="ticket-card ">
                                            <img src={vehicaleData.img} alt="" />
                                            <samp>{vehicaleData.name}</samp>
                                            <samp><img src={vehicaleData.img_man} alt="" /></samp>
                                            <samp className="man-count">{vehicaleData.passenger_count}</samp>
                                            <samp className="vehicale-price">${vehicaleData.price}</samp>
                                        </div>)
                                    }
                             
                                </div>
                        }

                    </div>
                    <div className="destination-map">
                        <img src={Map} alt=""/>
                    {/* <GoogleMaps></GoogleMaps> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;