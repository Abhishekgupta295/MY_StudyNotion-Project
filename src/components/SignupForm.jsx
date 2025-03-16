import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai"
import { useNavigate } from'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    
  })

  const [showPassword , setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler (event){
    setFormData((prevData) => 
      ({...prevData,
      [event.target.name] : event.target.value}
    ));
  }

  // console.log("setIsLoggedIn prop:", setIsLoggedIn);

  
  function submitHandler (event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("password doesn't match");
      return; // 
    }
    setIsLoggedIn(true);
    toast.success("Account created successfully");
     const accountData = {
            ...formData
        };

    const finalData = {
            ...accountData,
            accountType
        }

    console.log("printing Final account data ");
    console.log(finalData);
    navigate('/Dashboard');
    
  }

  return (
    <div >
          {/* {student & instructor tab} */}
          <div
            className='flex bg-orange-500 text-yellow-300 p-1 gap-x-1 my-6 rounded-full max-w-max'
          >
            <button
              className={`${accountType === "student" 
                ?
                  "bg-red-950 text-white"
                :"bg-transparent text-richblack-200"} 
                py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("student")}
            >
              Student
              </button>
            <button
             className={`${accountType === "instructor" 
              ?
                "bg-red-950 text-white"
              :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
              onClick={() => setAccountType("instructor")}
            >
              Instructor</button>
          </div>


          <form onSubmit={submitHandler}>

          {/* {first name & last name} */}
          
          <div className='flex gap-x-4 mt-[20px]'>
          <label  className='w-full'>
              <p
               className='text-[0.875rem]  text-yellow-300 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'
              >*</sup></p>
              <input 
                type="text"
                name="firstName"
                required
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              />
            </label>

            <label className='w-full'>
              <p className='text-[0.875rem]  text-yellow-300 mb-1 leading-[1.375rem]'>Last Name <sup>*</sup></p>
              <input 
              type="text"
              name="lastName"
              required
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              />
            </label>

          </div>

          {/* {email} */}
          <div className='mt-[20px]'>
              <label className='w-full mt-[20px]'>
                  <p className='text-[0.875rem]  text-yellow-300 mb-1 leading-[1.375rem]'>Email Address 
                    <sup className='text-pink-200'>*</sup></p>
                  <input 
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your Email Address"
                  value={formData.email}
                  onChange={changeHandler}
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                  />
              </label>
          </div>
          

          {/* {password & confirm password} */}
 
            <div className='w-full flex gap-x-4 mt-[20px]'>
                  <label className='w-full relative'>
                        <p className='text-[0.875rem]  text-yellow-300 mb-1 leading-[1.375rem]'>
                          Enter Password <sup className='text-pink-200'>*</sup></p>
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
                          onClick={() => ( setShowPassword((prev) => !prev))} >
                          {
                            showPassword? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                          }
                          
                        </span>

                  </label> 

                  <label className='w-full relative'>
                        <p className='text-[0.875rem]  text-yellow-300 text-richblack-5 mb-1 leading-[1.375rem]'>
                          Confirm Password <sup className='text-pink-200'>*</sup></p>
                        <input
                          required
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder='confirmPassword'
                          name='confirmPassword'
                          value={formData.confirmPassword}
                          onChange={changeHandler}
                          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span 
                          className='absolute right-3 top-[38px] cursor-pointer'
                          onClick={() => (setShowConfirmPassword((prev) => !prev))} >
                          {
                            showPassword? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                          }
                          
                        </span>

                  </label>  
            </div>

          {/* { create account button }   */}

          <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
          >Create Account
          </button>


        
      </form>
    </div>
  )
}

export default SignupForm