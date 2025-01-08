import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({login}) => {
  const loginStatus =()=>{
        const token =localStorage.getItem("jwt");
        console.log(token);
        if(login || token){
          return[
            <>
             <Link to='/profile'><li>Profile</li></Link>
             <Link to='/createpost'><li>Create Post</li></Link>
            </>
          ]
        }
        else{
          return[
            <>
                   <Link to='/signup'><li>SignUp</li></Link>
            <Link to='/signin'><li>SignIn</li></Link>
            </>
          ]
        }
        
  };
 
  return (
    <div className='flex justify-around items-center  bg-gray-200 h-20 shadow-xl'>
          <div>
            <img src="https://images.vexels.com/content/137201/preview/instagram-silhouette-stroke-logo-1c9d17.png" alt=""  className='w-40 object-contain	'/>
        </div>
         <ul className='flex items-center space-x-4 text-lg'>
        { loginStatus()}
         </ul>
    </div>
  )
}

export default Navbar
