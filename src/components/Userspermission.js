import React,{useEffect, useState} from 'react'
import Newcard from './Newcard';
import UserAllCards from './UserAllCards';
import NavbarUI from './NavbarUI';

const Userspermission = () => {
    const [messages, setmessages] = useState([]);

    const getmessages = async ()=>{
        const data= await fetch("http://localhost:5000/getpermissions/fetch");
        const getdata = await data.json(); 
        
         setmessages(getdata);

    };
    useEffect(() => {
        getmessages();
      }, []);
return (<div>
    <NavbarUI/>
           <div>
     <div className="container class">
                     
                     <div className="row">
                     {messages.map((element) => {
                        return <div className="col-md-4" key={element.name}>
                            <UserAllCards name={element.name ? element.name : ""} message={element.message ? element.message : ""} caption={element.caption} status={element.status}  />
                        </div>
                    })}
     </div>
                </div> 
    </div>
    </div>
)
}

export default Userspermission
