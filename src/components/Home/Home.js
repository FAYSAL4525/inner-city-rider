import React, { useContext } from 'react';
import './Home.css'
import Header from '../Header/Header';
import Frame from '../../images/Frame.png'
import Frame1 from '../../images/Frame-1.png'
import Frame2 from '../../images/Frame-2.png'
import Group from '../../images/Group.png'
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const Home = () => {
    const [loggedInUser, setLoggedInUser, vehicaleData] = useContext(UserContext);
    const history = useHistory();
    const handleChange = () => {
        history.push("/destination")
        //console.log("clicked");
    }
    console.log(vehicaleData);
    return (
        <div className="home-bg-img">
            <Header userName={loggedInUser.name} success={loggedInUser.success}></Header>
            <div className="container">
                <div className="card">
                        {
                        vehicaleData.map(vehicaleData =>
                          <div onClick={handleChange} className="card-img">
                                <img src={vehicaleData.img} alt="" />
                            </div>)
                        }
                </div>
            </div>
        </div >
    );
};

export default Home;