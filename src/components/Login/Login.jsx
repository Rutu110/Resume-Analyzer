import React, { useState,useEffect } from 'react';
import './login.scss';
import {Link,useNavigate} from 'react-router-dom';
import welcomeimg from './welcomeback.svg';
import axios from 'axios';


const Login = () => {

  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error, setError] = useState('');
  const navigate=useNavigate()

  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth)
    {
      navigate('/')
    }

  })
  
  async function loginUser(event){
    event.preventDefault();

   
    try {
      const response = await axios.post('http://localhost:1337/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = "/";
    } catch (error) {
      setError(error.response.data.message);
    }

   

		// const data = await response.json()

    // const { token } = await response.json();

		// if (data.token) {
		// 	localStorage.setItem('token', res.data.token);
		// 	alert('Login successful')
		// 	window.location.href = '/'
		// } else {
		// 	alert('Please check your username and password')
		// }
     
    
  }

  return (
    <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                         <div className="img-class">
                              <h1>Login</h1>
                          </div>
                          {error && <p>{error}</p>}
                        <form onSubmit={loginUser}>
        
                            <input placeholder="Enter your email..." type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="emil1"/>
                        
                            <input placeholder="Enter password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="false" id="pwd1"/>
                            <button type="submit" id="sub_butt">Login</button>
                         </form>

                         <div className="footer">
                             <h4>Don't have an Account ? <Link className='link' to='/register'>Register Now</Link></h4>
                         </div>

                 </div>
                  <div className="right-side">
                    <div className="welcomeNote">
                        <h1>Welcome Back!</h1>
                    </div>
                    <div className="welcomeImg">
                        <img src={welcomeimg} id='wel-img-id' alt=""  />
                    </div>
                  </div>

                </div>
        </div>
  )
}

export default Login
