import React from 'react'
import { useUserContext } from '../User'
import { toast } from 'react-toastify';
import axios from 'axios';
import { url } from '../springboot';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const {displayUser} = useUserContext();
  const navigate = useNavigate();
  if(displayUser !== "Register/Login"){

    var handlelogout = async (event) => {
      event.preventDefault();
      try{
        const user = {
          id:displayUser.id.toString(),
          username: displayUser.username
        }
        console.log(user);
        const response = await axios.post(url+"/patient",user, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data)
        
        if(response.status === 200){
          toast('Logout Successfully')
          navigate('/')
        }
        

      }catch(e){
        toast('User Not Found')
      }
    }
  }
  return (
    <div>
        <h2>Thankyou For Using Our Services! </h2>
        <p>As you log out, we extend our heartfelt thanks for choosing us. Take a moment for yourself, prioritize self-care, and stay connected. Your well-being matters, and we're here whenever you need us again.</p>
        <p>Feel free to share any feedback. Wishing you health and happiness!</p>
        <p>Take care!</p>
        <button className='bye-bye' onClick={handlelogout}>Logout</button>
    </div>
  )
}
