import React from 'react'
import Admindisplay from '../display/Admindisplay'
import Userdisplay from '../display/Userdisplay'
import NavbarUI from './NavbarUI'
import Navbar from './Navbar'
import {useNavigate} from "react-router-dom"

const Home = () => {
    try{
        const role = JSON.parse(localStorage.getItem("data")).role;
        return (
            <>
                   <NavbarUI/>
               
                {
                    (role==="student") ?
                  
                    <Userdisplay/> :
                    (role=="admin")?
                    <Admindisplay/>:""
                }
               
               </>
        )
    }catch{
        window.location.href = "http://localhost:3000/login";
    }
}

export default Home
