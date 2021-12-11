import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Readmore = () => {
 
  // const data = await axios.put(`http://localhost:5000/api/products/${id}`);
  // console.log(data);

  const [userId, setUserId] = useState(window.location.href.split("/")[3]);
  const [info, setinfo] = useState([]);
  useEffect(async () => {
    try {
      // console.log("asdas");
    
      const result = await axios({
        url: `http://localhost:5000/getpermissions/${userId}`,
        method: "PUT",
      });
      // const getdata = await result.json();
      console.log(result.data);

      setinfo(result.data);
      console.log(info)
    } catch (error) {
      console.log(error);
    }
  }, []);
 
  return (
    
    <div className="toscroll">
      <div className="container 2">
        <div className="card" style={{marginTop : "155px"}}>
          <div className="contentBx">
            <h5>{info.name}</h5>
            <hr />
            <p style={{color : "black"}}>
             {info.message}
            </p>

            <Link to={`/`} >
            
              <span style={{color : "black"}}>GoBack</span>
           
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
