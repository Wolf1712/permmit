import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import PermissionCard from './PermissionCard';

const Myperm = () => {
  
   const [gens, setgens] = useState(window.location.href.split("/")[4]);
  //  const [info, setinfo] = useState([])
  // console.log(userId)
  // useEffect(async () => {
  //   try {
  //     // console.log("asdas");
  //     const result = await axios({
  //       url: `http://localhost:5000/own/${gens}`,
  //       method: "GET",
  //     });
  //     // const getdata = await result.json();
  //   //  const data = JSON.parse(result)
  //   // const Adata = await result.json();
  //   // setdata(Adata.statewise[0]);
  //   const mark=result.data;
  //     // console.log(mark[0].name);
  //    setinfo(mark[0])
     
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  const [info, setinfo] = useState([]);

        const getmessages = async ()=>{
            const data= await fetch( `http://localhost:5000/own/${gens}`);
            const getdata = await data.json(); 
             setinfo(getdata);

        };
        useEffect(() => {
            getmessages();
          }, []);
  console.log(info);
  // useEffect(() => {
  //   setinfo(result);
  //   return () => {
  //     console.log(info);
  //   }
  // }, [info])
    return (
      
        <>
            <Navbar/>
                         
                     
                         {info.map((element) => {
                            return (
                                <PermissionCard name={element.name ? element.name : ""} message={element.message ? element.message : ""} caption={element.caption} id={element._id} status={element.status}/>
                            )
                        })}
        
                    
{/*             
             <Card hoverable>
                  <Alert
                    message="Pending"
                    description={info.message}
                    type="warning"
                    showIcon
                  />
                  <hr />
                  <Meta title={info.name} />
                </Card> */}
                {/* <Card hoverable>
                  <Alert
                    message="Accepted"
                    description="Detailed description and advice about successful copywriting."
                    type="success"
                    showIcon
                  />
                  <hr />
                  <Meta title="Deepesh Dragoneel" />
                </Card> */}
                {/* <Card hoverable>
                  <Alert
                    message="Declined"
                    description="Detailed description and advice about successful copywriting."
                    type="error"
                    showIcon
                  />
                  <hr />
                  <Meta title="Deepesh Dragoneel" />
                </Card> */}
        </>
    )
}

export default Myperm
