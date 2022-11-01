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
            UserType: "USER"
        }
        axios
        .post(url,data)
        .then((result=> {
            const data = result.data;
            if(data.statusCode === 200){
                setData(data.listRegistration);
            }
        })
        .catch((error) => {
            console.log(error);
        })
        )
    }
    return (

    <span>test</span>
    
    )
}