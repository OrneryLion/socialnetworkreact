import React , {Fragment, useEffect, useState} from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";

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
    <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNo</th>
            <th scope="col">IsApproved</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((val, index) => {
                    return(
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{val.Name}</td>
                            <td>{val.Email}</td>
                            <td>{val.PhoneNo}</td>
                            <td>{val.IsApproved}</td>
                            <td>
                                {val.IsApproved ===  0 ?
                                <button className="btn btn-primary" onClick={(e) => handleApproved(e, val.id)}>
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
      
</Fragment>


    
    )
}