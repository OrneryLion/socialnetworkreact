import React, {useState} from "react";
import './Login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    
    const url = `https://localhost:7249/api/Registration/Login`;
    const data = {
      
      Email: email,
      Password: password,
      
    }
    
    axios.post(url, data)
    .then((result) => {
      
      const dt = result.data;
      if (dt.statusCode === 200) {
        if(email === "admin" && password === "admin") {
          localStorage.setItem("username", email);
          navigate("/admindashboard");
        } else{
          localStorage.setItem("loggedEmail", email);
          localStorage.setItem("username", email );
          if(dt.registration.userType === "STAFF"){
            navigate({to: "/staffdashboard"});
          }
          
          else{
            navigate("/userdashboard");
          }
          alert(dt.statusMessage);
        }
      }
      else{
        alert(dt.statusMessage);
      }
    })
    .catch((error) => {
      console.log(error);
    })
}


    return(
      // <!-- Section: Design Block -->
      <section className="text-center text-lg-start">
        {/* <!-- Jumbotron --> */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right login-card" >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Login</h2>
                  <form>
      
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" 
                      onChange={(e) => setEmail(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>
      
                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" 
                      onChange={(e) => setPassword(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>
      
      
                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4"
                    onClick={(e)=> handleLogin(e)}>
                      Login
                    </button>

                  </form>
                </div>
              </div>
            </div>
      
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4"
                alt="" />
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      // <!-- Section: Design Block -->
    )
}

export default Login;