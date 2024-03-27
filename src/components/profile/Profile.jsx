import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.scss';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:1337/api/profile', { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleUpdateProfile = async () => {
    try {
      await axios.put(`http://localhost:1337/api/${user._id}`, { firstName, lastName});
      alert('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to update profile');
    }
  };

  return (
    <div className='main-login'>
          <div className="login-contain">
                 <div className="left-side">
                         <div className="img-class1">
                              <h1>Profile</h1>
                          </div>
                 
                        <form onSubmit={handleUpdateProfile}>
        
                            <input placeholder={user.firstName} type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} id="fname"/>
                            <input placeholder={user.lastName} type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} id="lname"/>
                            <input placeholder={user.email} type="email" id="emil1"/>

                            
                            <button type="submit" id="sub_butt1">Update Profile</button>
                         </form>

                 </div>
                 </div>

    </div>
  );
};

export default Profile;
