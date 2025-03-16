import React, { useState } from 'react'
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const LoginForm = (props) => {

  // console.log("we are inside sing IN mode")
  const setIsLoggedIn = props.setIsLoggedIn
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  })

  const [showPassword , setShowPassword] = useState(false)

  function changeHandler (event){
    setFormData((prevData) => 
      ({...prevData,
      [event.target.name] : event.target.value}
    ));
  }

  function submitHandler (event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Login Successfull");
    console.log("Printing the formData ");
    console.log(formData)
    navigate("/Dashboard");
  }
  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6"
    >

       <label className='w-full'>
        <p className='text-[0.875rem]  text-yellow-300 mb-1 leading-[1.375rem]'
        >Email Address<sup className='text-pink-200'>*</sup></p> 
        <input
          type='email'
          placeholder='Enter Email Address'
          name='email'
          value={formData.email}
          onChange={changeHandler}
          className= ' rounded-[0.5rem] w-full p-[12px]'
        />
       </label>
       <label className='w-full relative'> 
        <p className='text-[0.875rem]  text-yellow-300 mb-1 leading-[1.375rem]'>
          Password <sup className='text-pink-200'>*</sup></p>
        <input
          required
          type={showPassword ? "text" : "password"}
          placeholder='EnterPassword'
          name='password'
          value={formData.password}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        <span 
         className='absolute right-3 top-[38px] cursor-pointer'
         onClick={() => (setShowPassword((prev) => !prev))} >
          {
            showPassword?
            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
          }
          
        </span>

        <Link to="#">
          <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
            Forgot Password
          </p>
        </Link>

        <button className='bg-yellow-50 rounded-[8px] font-medium  text-red-950 px-[12px] py-[8px] mt-6' 
        >Sign In</button>
       </label>
    </form>
  )
}

export default LoginForm