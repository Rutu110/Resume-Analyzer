import React,{ useState } from 'react';
import './register.scss';
import welcomeimg from './registerPng.svg';
import { Link , useNavigate } from 'react-router-dom';


const Register = (props) => {
 
  
  
  const [firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate();

  

  async function registerUser(e){

    e.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
        lastName,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
      localStorage.setItem("user1",JSON.stringify(data))
      alert('register successful')
			navigate('/login')
		}
    
  }

  return (
    <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                         <div className="img-class">
                              <h1>Register</h1>
                          </div>
                 
                        <form onSubmit={registerUser}>
        
                            <input placeholder="Enter your first name..." type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} id="fname"/>
                            <input placeholder="Enter your last name..." type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} id="lname"/>
                            <input placeholder="Enter your email..." type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="emil1"/>
                        
                            <input placeholder="Enter password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete="false" id="pwd1"/>
                            
                            <button type="submit" id="sub_butt">Create Account</button>
                         </form>

                         <div className="footer">
                             <h4>Already have an Account ? <Link className='link' to='/login'>Login Now</Link></h4>
                         </div>

                 </div>
                  <div className="right-side">
                    <div className="welcomeNote">
                        <h1>Welcome !!!</h1>
                    </div>
                    <div className="welcomeImg">
                        <img src={welcomeimg} id='wel-img-id' alt=""  />
                    </div>
                  </div>

                </div>
        </div>
  )
}




export default Register;
