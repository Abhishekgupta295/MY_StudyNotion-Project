import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const SingUp = ({setIsLoggedIn}) => {

  console.log("we are inside singup mode")
  return (
    <div>
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="SignUp"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default SingUp