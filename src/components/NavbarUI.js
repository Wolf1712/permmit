import React from 'react'
import Alert from './Alert'

const NavbarUI = () => {
    return (
        <div>
          <Alert/>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >Permit</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">Home  <i class="fa fa-home" aria-hidden="true"></i></a> 
      </li>
        <li className="nav-item">
        
          <a className="nav-link active" aria-current="page" href="/allpermissions">All Permisions  <i className="fa fa-globe" aria-hidden="true"></i></a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
        </li>
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
      <div className="nav-right">
      <div className="nav-user-icon online" style={{
                  position:"absolute",
                  right:"300px",
                  top:"15px"
                }}>
                  <div className="dicon"> <i className="fas fa-user" style={{}}></i></div>
               
                </div>
                <div className='buttons'>
                <a href="/login">
                <button type="button" className="btn btn-outline-dark">Logout</button>
                </a>
                </div>
                </div>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
       
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavbarUI
