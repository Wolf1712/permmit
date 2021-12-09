import React from 'react'
import './Style.css'

const Newcard = ({name,message,caption}) => 
    {
        return (
        <div className="toscroll">
           <div className="container 2">
 <div className="card">
 <div className="contentBx">
 <h5>Name : {name}</h5>
 <p>{caption}</p>
 <a href=""><span mx-1>Accept</span></a>

 <a href=""><span>decline</span></a>
 <a href=""><span>readmore</span></a>
 </div>
</div>
 
        </div>
        </div>
    )
}

export default Newcard
