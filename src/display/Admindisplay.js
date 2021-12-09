import React from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";
import Allpermisions from '../components/Allpermisions';
const Admindisplay = () => {

//    axios.get('http://localhost:5000/getpermissions/fetch').then((response)=>{
//        console.log(response);
//    })

    return (
        <div>
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
              </div>          */}
            <Allpermisions/>
        </div>
    )
}

export default Admindisplay
