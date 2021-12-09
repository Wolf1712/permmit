import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Logins.css'
import avatar from '../img/avatar.svg';
import bg from '../img/bg.svg';
import wave from '../img/wave.png';

const Login = () => {
    const [credentials, setCredentials] = useState({username: "", password: ""}) 
       const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: credentials.username, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
            localStorage.setItem('data', JSON.stringify(json.data)); 
            history("/");  
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    return (
        <div>
           <img className="wave" src={wave} alt={wave}/>
	<div className="godgrace">
		<div className="img" >
			<img src={bg} alt={bg}/>
		</div>
		<div className="login-content">
			<form action="index.html">
				<img src={avatar} alt={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		{/* <h5></h5> */}
           		   		<input type="text" placeholder="Username" name="username" value={credentials.username} onChange={onChange} className="input" />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	{/* <h5></h5> */}
           		    	<input type="password" placeholder="Password" name="password"value={credentials.password} onChange={onChange} className="input" />
            	   </div>
            	</div>
            	{/* <a href="#">Forgot Password?</a> */}
            	<input type="submit" className="button"  onClick={handleSubmit}  value="Login"/>
            </form>
        </div>
    </div>
    
        </div>
    )
}

export default Login
