import React from 'react'
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';



const Navbar = (props) => {
  
  let isLoggedIn = props.isLoggedIn
  let setIsLoggedIn = props.setIsLoggedIn

  return (
    <div className='flex bg-red-950 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to = "/">
       <img  src={logo} alt='logo' height={32} width={160} loading='lazy'/>
      </Link>

     
      <nav>
          <ul className='flex gap-x-6 text-yellow-300'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/">About</Link></li>
            <li><Link to = "/">Contact</Link></li>
          </ul>
      </nav>

      { //login - logout - singup - dashboard 
      }
       <div className='flex items-center gap-x-4 text-yellow-300'>

         { 
           !isLoggedIn &&
              <Link to="/Login">
                <button className='bg-red-900 text-yellow-300 py-[8px] 
                  px-[12px] rounded-[8px] border border-yellow-500' >
                  Login
                </button>
              </Link>
          
          }


          {
            !isLoggedIn &&
                <Link to="/SingUp"> 
                <button className='bg-red-900 text-yellow-300 py-[8px] 
                  px-[12px] rounded-[8px] border border-yellow-500'
                
                >SignUp</button>
                </Link>
          }

          {
            isLoggedIn &&
            <Link to = "/">
                <button 
                  onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                  }} 
                  className='bg-red-900 text-yellow-300 py-[8px] 
                  px-[12px] rounded-[8px] border border-yellow-500'
                >LogOut</button>
            </Link>
          }

         { 
          isLoggedIn &&
          <Link to = "/Dashboard">
            <button
               className='bg-red-900 text-yellow-300 py-[8px] 
                  px-[12px] rounded-[8px] border border-yellow-500'
            >
              Dashboard</button>
          </Link>
          }
       </div>
      
    </div>
  )
}

export default Navbar