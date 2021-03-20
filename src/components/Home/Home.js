import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Frame from '../../images/Frame.png'
import Frame1 from '../../images/Frame-1.png'
import Frame2 from '../../images/Frame-2.png'
import Group from '../../images/Group.png'

const Home = () => {
    return (
        <div className="home-bg-img">
            <Header></Header>
            <div className="container">
                <div className="card">
                    <div className="card-img">
                        <img src={Frame} alt="" />
                    </div>
                    <div className="card-img">
                        <img src={Frame1} alt="" />
                    </div>
                    <div className="card-img">
                        <img src={Frame2} alt="" />
                    </div>
                    <div className="card-img">
                        <img src={Group} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;