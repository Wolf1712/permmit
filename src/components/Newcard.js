import React, { useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import axios from "axios";


const Newcard = ({ name, message, caption, id,status}) => {

const onaccept=async ()=>{
  // e.preventDefault();
  window.location.reload();
  
    try {
      // console.log("asdas");
      const result = await axios({
        url: `http://localhost:5000/getpermissions/update/${id}`,
        method: "PUT",
      });
      // const getdata = await result.json();
      console.log(result.data);

      // setinfo(result.data);
    } catch (error) {
      console.log(error);
    }
  

}

const ondelete=async ()=>{
  // e.preventDefault();
  window.location.reload();
  
    try {
      // console.log("asdas");
      const result = await axios({
        url: `http://localhost:5000/getpermissions/false/${id}`,
        method: "PUT",
      });
      // const getdata = await result.json();
      console.log(result.data);

      // setinfo(result.data);
    } catch (error) {
      console.log(error);
    }
  

}
  
  return (
    <div className="toscroll">
      <div className="container 2">
        {/* {console.log({status})} */}
        {
          (status==='null')?
        <div className="card" style={{width:"720px"}}> 
          <div className="contentBx">
            <h5>{name}</h5>
            <p>{caption} </p>
            <a >
              <span onClick={onaccept}>Accept</span>
            </a>

            <a >
              <span onClick={ondelete}>decline</span>
            </a>
            <Link to={`/${id}`} >
            
              <span>readmore</span>
           
            </Link>
          </div>
        </div>: (status==='true')? <div className="card" style={{background : "#9efd9e"}}> 
          <div className="contentBx">
            <h5>{name}</h5>
            <p style={{color : "black"}}>Permission Accepted </p>
            <Link to={`/${id}`} >
              <span style={{color : "black"}} >readmore</span>
            </Link>
          </div>
        </div>:<div className="card" style={{background : "#ff6060"}}> 
          <div className="contentBx">
            <h5>{name}</h5>
            <p style={{color : "black"}}>Permission Declined </p>
            <Link to={`/${id}`} >
              <span style={{color : "black"}}>readmore</span>
            </Link>
          </div>
        </div>
 } 
       
      </div>
    </div>
  );
};

export default Newcard;
