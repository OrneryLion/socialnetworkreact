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
        const url = "https://localhost:7249/api/Article/ArticleList";
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
        const url = "https://localhost:7249/api/Article/ArticleApproval";
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
                    <tr >
                        <th scope="row">{index+1}</th>
                        <td><span>{value.title}</span></td>
                        <td><span>{value.content}</span></td>
                        <td><span>{value.email}</span></td>
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


    

      
</Fragment>
   
    );
}