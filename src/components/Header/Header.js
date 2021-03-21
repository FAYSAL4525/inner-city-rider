import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light container pl-0 pe-0 ">
                <div class="container-fluid p-0">
                    <a class="navbar-brand nav-brand" href="#">Inner-City Rider</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto nav-link">
                        <Link to="/home">Home</Link>
                        <Link to="/destination">Destination</Link>
                        <Link to="blog">Blog</Link>
                        <Link to="/contact">contact</Link>
                        {/* {props.newUser?  <Link className="active" to="/login">Login</Link>:<p>{props.user}</p>} */}

                        {props.success ? <h4 style={{ display: "inline-block" }}>{props.userName}</h4> : <Link className="active" to="/login">Login</Link>}
                        </div>
                    </div>
                </div>
            </nav>





        </div>
    );
};

export default Header;