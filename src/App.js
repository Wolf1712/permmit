import React from 'react'
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login';
import Myperm from './components/Myperm';
import Readmore from './components/Readmore';
import Userspermission from './components/Userspermission';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
    <Route  exact path="/my/:name" element={<Myperm/>}/>

      
       <Route  exact path="/:id" element={<Readmore/>}/>
      
        
      <Route path="/allpermissions" element={<Userspermission />}>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
