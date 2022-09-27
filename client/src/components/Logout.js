import React, {useEffect} from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate()
useEffect(()=>{
    

    localStorage.removeItem("token");
    console.log("IN");
 //   <Navigate to="/signin" replace />
   navigate("/signin")
    console.log("OUT")
},[])



}

export default Logout