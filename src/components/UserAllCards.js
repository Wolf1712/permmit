import React, { useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
// import axios from "axios";

const UserAllCards = ({ name, message, caption, id,status}) => {
    return (
        <div className="toscroll">
        <div className="container 2">
          {/* {console.log({status})} */}
          {
            (status==='null')?
          <div className="card"> 
            <div className="contentBx">
              <h5>{name}</h5>
              <p style={{color : "black"}}>{caption} </p>
              <p style={{color : "black"}}>Permision Pending</p>
              <Link to={`/${id}`} >
              
                {/* <span></span> */}
             
              </Link>
            </div>
          </div>: (status==='true')? <div className="card" style={{background : "#9efd9e"}}> 
            <div className="contentBx">
          
              <h5>{name}</h5>
              <p style={{color : "black"}}>{caption} </p>
              <p style={{color : "black"}}>Permission Accepted </p>
              <Link to={`/${id}`} >
                {/* <span style={{color : "black"}} >readmore</span> */}
              </Link>
            </div>
          </div>:<div className="card" style={{background : "#ff3e3e"}}> 
            <div className="contentBx">
            
              <h5>{name}</h5>
              <p style={{color : "black"}}>{caption} </p>
              <p style={{color : "black"}}>Permission Declined </p>
              <Link to={`/${id}`} >
                {/* <span style={{color : "black"}}>readmore</span> */}
              </Link>
            </div>
          </div>
   } 
         
        </div>
      </div>
    );
    
}

export default UserAllCards



