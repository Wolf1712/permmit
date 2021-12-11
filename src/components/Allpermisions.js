
import React,{useEffect, useState} from 'react'
import Newcard from './Newcard';
// import './Style.css'

const Allpermisions = () => {
    const [messages, setmessages] = useState([]);

        const getmessages = async ()=>{
            const data= await fetch("http://localhost:5000/getpermissions/fetch");
            const getdata = await data.json(); 
             setmessages(getdata);

        };
        useEffect(() => {
            getmessages();
          }, []);
    return (
               <div>
         <div className="container class" >
                         
                         <div className="row">
                         {messages.map((element) => {
                            return <div className="col-md-4" key={element.name}>
                                <Newcard name={element.name ? element.name : ""} message={element.message ? element.message : ""} caption={element.caption} id={element._id} status={element.status}/>
                            </div>
                        })}
         </div>
                    </div> 
        </div>
    )
}


export default Allpermisions
