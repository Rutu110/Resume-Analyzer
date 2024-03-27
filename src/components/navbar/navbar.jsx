import React,{ useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';



const Navbar = () => {

  const auth=localStorage.getItem('token');
  // const auth1=localStorage.getItem('user1');
  // const myname=JSON.parse(auth);

  
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const navigate=useNavigate();
 
  const logout=()=>{

     localStorage.clear();
     navigate('/register');
  }
  

  



  return (
    <div className='ra__navbar'>
      <div className='ra__navbar-links'>
        <div className='ra__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='ra__navbar-links_container'>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='cr'>Create Resume</Link></p>
          <p><Link to='rapython'>Analyse Resume</Link></p>
          <p><Link to='pythoncs'>Course Search</Link></p>
          <p><Link to='pythonhr'>Find Match</Link></p>
        </div>
      </div>
      
      { auth ? <div className='ra__navbar-sign'>
        <p><Link to='profile'>Profile</Link></p>
        <button type='button'><Link onClick={logout} to='register'>Logout</Link></button>
      </div> :
       <div className='ra__navbar-sign'>
        <p><Link to='login'>Sign in</Link></p>
        <button type='button'><Link to='register'>Sign up</Link></button>
      </div>}
         
     
       
      
      
      <div className='ra__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
        <div className="ra__navbar-menu_container scale-up-center">
          <div className="ra__navbar-menu_container-links">
          <p><a href='#home'>Home</a></p>
          <p><a href='#wra'>About This Tool</a></p>
          <p><a href='#possibility'>Create Resume</a></p>
          <p><a href='#features'>Analyse Resume</a></p>
          </div>
          <div className="ra__navbar-menu_container-links-sign">
            <p><Link to='login'>Sign in</Link></p>
            <button type="button"><Link to='register'>Sign up</Link></button>
          </div>
        </div>
        )}

      </div>
    </div> 
  )
}



export default Navbar;
 
