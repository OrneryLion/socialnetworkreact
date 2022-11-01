import React, {Fragment, useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";

export default function UserHeader(){
    const history = useNavigate();

    const [username, setUserName] = useState("");

    useEffect(() => {
        setUserName(localStorage.getItem("username"));
    }, []);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("username");
        history.push("/");
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
                                Welcome <span className="sr-only"></span>
                                Admin
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/registrationlist" className="nav-link">
                                Registration Management
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="articlelist" className="nav-link">
                                Article Management
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="newslist" className="nav-link">
                                News Management
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="stafflist" className="nav-link">
                                staff Management
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}