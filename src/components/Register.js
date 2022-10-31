import React , {useState} from 'react';
import axios from "axios";

function Register(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const handleSave = (e) => {
        e.preventDefault();
        console.log(name,email,password,phoneNo)
        const url = 'https://localhost:7249/api/Registration/Registration';
        const data = {
          Name: name,
          Email: email,
          Password: password,
          PhoneNo: phoneNo,
        }

        axios.post(url, data)
        .then((result) => {
          clear();
          const dt = result.data;
          alert(dt.statusMessage)
        })
        .catch((error) => {
          console.log(error);
        })
    }

    const handleLogin = (e) => {
        window.location.url = "/login"
    }
const clear = () =>{
  setName('');
  setEmail('');
  setPassword('');
  setPhoneNo('');
}
    
return (
    // sectionbackground
<section className="h-100 bg-dark">
    {/* container for registration card */}
  <div className="container py-5 h-100">
    {/* create row the entire height of container align and justify to center */}
    <div className="row d-flex justify-content-center align-items-center h-100">
        {/* create column with no restritcions so it takes up entire parent container  */}
      <div className="col">
        {/* create card */}
        <div className="card card-registration my-4">
            {/* on card create row */}
          <div className="row g-0">
            {/* create two columns unless below screen size xl*/}
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" className="img-fluid registration-pic"
                />
            </div>
            {/* create column that take up half of grid width for registration info*/}
            <div id='form' className="col-xl-6">
                {/* create info card */}
              <div className="card-body p-md-5 text-black">
                {/* create heading */}
                <h3 className="mb-5 text-uppercase">Registration form</h3>

                    {/* one column with margin on bottom of 4px*/}
                  <div className="col-md-6 mb-4">
                    {/* create form */}
                    <div className="form-outline">
                      <input value={name} type="text" id="Name" className="form-control form-control-lg" 
                      onChange={(e) => setName(e.target.value)}/>
                      <label className="form-label" htmlFor="Name">Name</label>
                    </div>
                  </div>

                    {/* one column with margin on bottom of 4px*/}
                    <div className="col-md-6 mb-4">
                    {/* create form */}
                    <div className="form-outline">
                      <input value={email} type="text" id="Email" onChange={(e) => setEmail(e.target.value)}
                       className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="Email">Email</label>
                    </div>
                  </div>

                    {/* one column with margin on bottom of 4px*/}
                    <div className="col-md-6 mb-4">
                    {/* create form */}
                    <div className="form-outline">
                      <input value={phoneNo} type="text" id="PhoneNo" className="form-control form-control-lg"
                     
                      onChange={(e) => setPhoneNo(e.target.value)} />
                      <label className="form-label" htmlFor="PhoneNo">Phone Number</label>
                    </div>
                  </div>

                    {/* one column with margin on bottom of 4px*/}
                    <div className="col-md-6 mb-4">
                    {/* create form */}
                    <div className="form-outline">
                      <input value={password} type="text" id="Password" className="form-control form-control-lg"
                      
                      onChange={(e) => setPassword(e.target.value)} />
                      <label className="form-label" htmlFor="Password">Password</label>
                    </div>
                  </div>



                {/* flex container that is justified so that it is always at the end with padding on top of 3px */}
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg" onClick={clear} >Reset all</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2"
                  onClick={(e)=> handleSave(e)}>Submit form</button>
                                    <button type="button" className="btn btn-warning btn-lg ms-2"
                  onClick={(e)=> handleLogin(e)}>Login</button>
                </div>
                


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


)
}

export default Register;
