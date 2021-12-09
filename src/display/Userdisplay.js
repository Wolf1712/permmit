import React, { useContext, useEffect, useRef, useState } from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import left from "../left.svg";
import right from "../right.svg";
import'./userdisplay.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './cards.css';
const Userdisplay = () => {
  const host = "http://localhost:5000"
  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ year: "", section: "",caption: "", message: ""})
  const handleClick = (e)=>{ 
    // editNote(note.id, note.etitle, note.edescription, note.etag)
    ref.current.click();
}
const onsend = async (e) => {
  e.preventDefault();
  // TODO: API Call
  // API Call 
  const {year,section,caption,message}=note
  const response = await fetch(`${host}/addmessage`, {
  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im11a2VzaCIsImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTYzODg3ODk2OX0.rD4Y6T-F55WVNnVIFlhidhSoKx8OiFB4qdtruQxm5JM"
    },
    body: JSON.stringify({year,section,caption,message})
  });

  const m = await response.json();
         console.log(m);  
  // setNote(notes.concat(note))
}
const onChange = (e)=>{
  setNote({...note, [e.target.name]: e.target.value})
}
    return (
        <>
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ask permission</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{padding : "0 1rem"}}>
                            <form className="my-3">
                                
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Year</label>
                                    <input type="text" className="form-control" id="year" name="year" value={note.year} onChange={onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Section</label>
                                    <input type="text" className="form-control" id="section" name="section" value={note.section} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Caption</label>
                                    <input type="text" className="form-control" id="caption" name="caption" value={note.caption} aria-describedby="emailHelp" onChange={onChange} minLength={4} required/>
                                </div>
                                    <div class="mb-3">
                                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                        <textarea type="text" class="form-control" id="message" name="message" value={note.message} onChange={onChange} rows="3"></textarea>
                                        <Button style={{margin : "1rem 0"}} variant="contained" endIcon={<SendIcon />} onClick={onsend}>Send</Button>
                                                 </div>
                              
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            {/* <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button> */}
                        </div>
                    </div>
                </div>
            </div>
        <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 " style={{ color: "white" }}></span>
        </div>
      </nav>
    
          <div className="two" >
            <div className="row">
            <div className="col">
                <div className="card"  style={{ width: "18rem" ,margin : "90px"}} onClick={handleClick}>
                  <img src={left} className="card-img-top" height="200px" />
                  <div className="card-body">
                    <h5 className="card-title mx-1 ">Ask for permisssion <i class="fa fa-plus-square" aria-hidden="true"></i> </h5>
{/*                     
                    <p className="card-text">
                   

                      This app is used to give permission to allocate attandance
                    </p> */}
                  </div>
                </div>
              </div>
              {/* <div className="col">
                <div class="flipy">
                  <div class="card">
                    <div class="face front">
                      <img src="https://tse1.mm.bing.net/th?id=OIP.NVfDpDmOz6bKrHC5YS2BfwAAAA&pid=Api&P=0&w=300&h=300" />
                    </div>
                    <div class="face back">
                      <img src="https://images.designtrends.com/wp-content/uploads/2017/04/Vector-Welcome-Banner.jpg" height="300px" width="350px" />
                    </div>
                  </div>
                </div>
              </div> */}
              
              <div className="col">
                <a href='/mydetail' > <div className="card"  style={{ width: "18rem",margin : "90px"}} >
                  <img src={right} className="card-img-top" height="200px" style={{padding : "10px"}} />
                  <div className="card-body">
                    <h5 className="card-title">View My Permission <i class="fa fa-folder-open" aria-hidden="true"></i></h5>
                    {/* <p className="card-text">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p> */}
                    
                  </div>
                </div> </a>
               
              </div>
            </div>
          </div>
        </>
      );
}

export default Userdisplay
