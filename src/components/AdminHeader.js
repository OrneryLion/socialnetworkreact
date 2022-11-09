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
            {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg bg-secondary navbar-dark ">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">

    {/* <!-- Navbar brand --> */}
    <a class="navbar-brand" href="#">Social Network</a>

    {/* <!-- Toggle button --> */}
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        {/* <!-- Greeting --> */}
        <h5>Welcome {username}</h5>
        {/* <!-- Dropdown --> */}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            Management
          </a>
          {/* <!-- Dropdown menu --> */}
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
                <a class="dropdown-item" href="/registrationlist">Registration Management</a>
            </li>
            <li>
              <a class="dropdown-item" href="/articlelist">Article Management</a>
            </li>
            <li>
              <a class="dropdown-item" href="/newslist">News Management</a>
            </li>
            <li>
              <a class="dropdown-item" href="/stafflist">Staff Management</a>
            </li>
          </ul>
        </li>
      </ul>
      {/* <!-- Icons --> */}
      <ul class="navbar-nav d-flex flex-row me-1">
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="#"><i class="fa-solid fa-right-from-bracket"></i></a>
        </li>
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="https://github.com/OrneryLion"><i class="fab fa-github"></i></a>
        </li>
      </ul>

      {/* <!-- Search --> */}
      <form class="w-auto">
        <input type="search" class="form-control" placeholder="Type query" aria-label="Search"/>
      </form>

    </div>
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}
        </Fragment>
    )
}