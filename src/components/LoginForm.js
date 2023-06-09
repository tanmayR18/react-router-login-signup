import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      email:'',
      password:''
    })
    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
      setFormData((prev)=>({
        ...prev,
        [event.target.name]:event.target.value
      }
      ))
    }

    function submitHandler(event){
      event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged In")
      console.log(formData)
      navigate('/dashboard')
    }

  return (
      <form onSubmit={submitHandler}
      className='flex flex-col w-full gap-4 mt-6'>
        <label className='w-full'>
          <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className=' text-pink-200'>*</sup>
          </p>
          <input
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          required
          type='email'
          value={formData.email}
          name='email'
          placeholder='Enter email address'
          onChange={changeHandler}
          />
        </label>

        <label className='relative w-full'>
          <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password<sup className=' text-pink-200'>*</sup>
          </p>
          <input
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          required
          type={showPassword ? ("text"):("password")}
          value={formData.password}
          name='password'
          placeholder='Enter Password'
          onChange={changeHandler}
          />

          <span
          className='absolute right-3 top-[38px] cursor-pointer'
          onClick={()=>setShowPassword( prev => !prev)}>
            {
              showPassword ?
              (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
              (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
            }
          </span>
          <Link to="#">
            <p className='text-xs mt-1 text-blue-100 text-right'>
                Forgot Password
            </p>
          </Link>
        </label>
        
        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Sign In
        </button>

      </form>
    
  )
}
