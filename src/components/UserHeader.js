import React, {Fragment, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";

export default function UserHeader(){
    const navigate = useNavigate();

    const [username, setUserName] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("username"));
    }, []);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("username");
        navigate("/");
    };

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dar bg-dark">
                <a className="navbar-brand" href="#">
                    Social Network
                </a>
                <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">

                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                            Welcome {username} <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/userarticle" className="nav-link">
                                Add Article 
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}