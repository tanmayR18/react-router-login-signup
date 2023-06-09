import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';

export const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [accountType, setAccountType] = useState("student")

  function changeHandler(event){
    setFormData((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Passowrd do not match")
      return;
    }
    setIsLoggedIn(true);
    const accountData = {
      ...formData
    }
    const finalData = {
      ...accountData,
      accountType
    }
    toast.success("Signed Up")

    console.log(finalData)

    navigate('/dashboard')
  }

  return (
    <div>
    {/* Student - Instructoe buttons */}
    <div
    className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'
    >
      <button
        className={`${accountType === "student" ?
        "bg-richblack-900 text-richblack-5":
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("student")}
      >
        Student
      </button>
      <button
        className={`${accountType === "instructor" ?
        "bg-richblack-900 text-richblack-5":
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}      
        onClick={()=>setAccountType("instructor")}
      >
        Instructor
      </button>
    </div>

    <form onSubmit={submitHandler}>
    {/* First name and last name */}
      <div className='flex gap-x-4 mt-[20px]'>
        <label className='w-full'>
            <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name
              <sup className='text-pink-200'>*</sup>
            </p>
          <input
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            required
            type='text'
            name='firstName'
            onChange={changeHandler}
            placeholder='Enter First Name'
            value={formData.firstName}
          />
        </label>

        <label className='w-full'>
          <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Last Name
            <sup className='text-pink-200'>*</sup>
          </p>
          <input
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            required
            type='text'
            name='lastName'
            onChange={changeHandler}
            placeholder='Enter Last Name'
            value={formData.lastName}
          />
        </label>
      </div>
      {/* email Add */}
      <div className='mt-[20px]'>
      <label>
          <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Email Address
              <sup className='text-pink-200'>*</sup>
          </p>
          <input
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter email Address'
            value={formData.email}
          />
        </label>
      </div>

        {/* Create and confirm password */}

        <div className='flex w-full gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
            <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password
              <sup className='text-pink-200'>*</sup>
            </p>
            <input 
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
               required
               type={showPassword ? ("text"):("password")}
               name='password'
               value={formData.password}
               onChange={changeHandler}
               placeholder='Enter Password'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer' 
              onClick={() => setShowPassword((prev) => !prev)}>
              {
                showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
          </label>

          <label className='relative w-full'>
            <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password
              <sup className='text-pink-200'>*</sup>
            </p>
            <input 
               className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
               required
               type={showConfirmPassword ? ("text"):("password")}
               name='confirmPassword'
               value={formData.confirmPassword}
               onChange={changeHandler}
               placeholder='Confirm Password'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer' 
              onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {
                showConfirmPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
          </label>
        </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Create Account
        </button>          
    </form>
    </div>
  )
}

