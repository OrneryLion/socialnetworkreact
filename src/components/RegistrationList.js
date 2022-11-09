import React , {Fragment, useEffect, useState} from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import "./RegistrationList.css";

export default function RegistrationList(){
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData= ()=>{
        const url = "https://localhost:7249/api/Registration/RegistrationList";
        const data ={
            UserType: 'USER'
        }
        axios
        .post(url,data)
        .then((result)=> {
            const data = result.data;
            if (data.statusCode === 200) {
                setData(data.listRegistration);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const handleApproved = (e, id) => {
        e.preventDefault();
        const data = {
            Id:id
        };
        const url = "https://localhost:7249/api/Registration/UserApproval";
        axios
        .post(url, data)
        .then((result) => {
            const dt = result.data;
            if (dt.statusCode === 200) {
                alert("Approved")
                getData();
            }
        })
        .catch((error) => {
            console.log(error)
        });

    }
    
    return (
<Fragment>
    <AdminHeader/>
    <section className="text-center text-lg-start">
        {/* <!-- Jumbotron --> */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div >
            {data ? (
    <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">PhoneNo</th>
        <th scope="col">IsApproved</th>
 
      </tr>
    </thead>
    <tbody>
        {
            data.map((value, index) => {
                return(
                    <tr >
                        <th scope="row">{index+1}</th>
                        <td><span>{value.name}</span></td>
                        <td><span>{value.email}</span></td>
                        <td><span>{value.phoneNo}</span></td>
                        <td>
                            {value.isApproved ===  0 ?
                            <button className="btn btn-primary" onClick={(e) => handleApproved(e, value.id)}>
                                Mark Approved
                            </button>
                            :
                            "Already Approved"
                            }
                        </td>
                    </tr>
                )
            })
        }
    </tbody>
  </table> 
  ): ("No data found")}
            </div>
    
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>

      <section className="text-center text-lg-start">
        {/* <!-- Jumbotron --> */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div >
            {data ? ( 
                <table class="table align-middle mb-0 bg-white">
                <thead class="bg-light">
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Is Approved</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                {
            data.map((value, index) => {
                return(
                    <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            
                            class="rounded-circle profile-pic"
                            />
                        <div class="ms-3">
                          <p class="fw-bold mb-1">{value.name}</p>
                          <p class="text-muted mb-0">{value.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="fw-normal mb-1">Software engineer</p>
                      <p class="text-muted mb-0">IT department</p>
                    </td>
                    <td>
                      <span class="badge badge-success rounded-pill d-inline">{value.isApproved}</span>
                    </td>
                    
                    <td>
                            {value.IsApproved ===  0 ?
                            <button className="btn btn-primary" onClick={(e) => handleApproved(e, value.id)}>
                                Mark Approved
                            </button>
                            :
                            "Already Approved"
                            }
                        </td>
                  </tr>
                )
            })
        }
 

                </tbody>
              </table>
             ): ("No data found")}
            </div>
    
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>


    

      
</Fragment>
   
    );
}