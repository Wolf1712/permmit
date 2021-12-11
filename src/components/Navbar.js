import React from 'react'
import { Link, useLocation,useHistory} from "react-router-dom";
import ppic from "../img/wave.png"
import './Navstyle.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Permit</a>
    <button className="navbar-toggler" type="button" data-bs-togmgle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/allpermissions">All permission <i class="fa fa-globe" aria-hidden="true"></i></a>
        </li>
      </ul>
      <div className="nav-right">
                {/* <div className="search-box">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search"/>
                </div> */}
                <div className="nav-user-icon online" style={{
                  position:"absolute",
                  right:"30px",
                  top:"10px"
                }}>
                  <div className="dicon"> <i className="fas fa-user" style={{}}></i></div>
               
                </div>
            </div>
      <form className="d-flex">
        {/* <div className="seperate-button"> */}
        {/* <Link className="btn btn-primary mx-1 " to="/login" role="button">Logout</Link> */}
      
        {/* </div> */}
        </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
