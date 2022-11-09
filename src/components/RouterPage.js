import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";
import Register from "./Register";
import UserDashboard from "./UserDashboard";
import RegistrationList from "./RegistrationList";
import ArticleList from "./ArticleList";
import NewsList from "./NewsList";
import StaffList from "./StaffList";



export default function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/registration" element={<Register/>}/>
                <Route path="/userdashboard" element={<UserDashboard/>}/>
                <Route path="/adminDashboard" element={<AdminDashboard/>}/>
                <Route path="/registrationlist" element={<RegistrationList/>}/>
                <Route path="/articlelist" element={<ArticleList/>}/>
                <Route path="/newslist" element={<NewsList/>}/>
                <Route path="/stafflist" element={<StaffList/>}/>
            </Routes>
        </Router>
    )
}