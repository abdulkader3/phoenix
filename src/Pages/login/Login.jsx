import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

  // ===Use state for validation 
  const [name , setname] = useState('')
  const [nameErorr , setnameErorr] = useState('')
  const [email , setemail] = useState('')
  const [emailErorr , setemailErorr] = useState('')
  const [password , setpassword] = useState('')
  const [passwordErorr , setpasswordErorr] = useState('')
  const [confirm , setconfirm] = useState('')
  const [confirmErorr , setconfirmErorr] = useState('')


  // Enhancing performance

  const nameOnchang = (e)=>{
    setname(e.target.value)
    setnameErorr('')
  }
  const emailOnchang = (e)=>{
    setemail(e.target.value)
    setemailErorr('')

  }
  const passwordOnchang = (e)=>{
    setpassword(e.target.value)
    setpasswordErorr('')

  }
  const confirmOnchang = (e)=>{
    setconfirm(e.target.value)
    setconfirmErorr('')

  }



  // ===submit form Validation logic 
  const submit = (e)=>{
    e.preventDefault()

    if(!name){
      setnameErorr('Please enter your name')
    }
    else
    if(!email){
      setemailErorr('Please enter your email')
    }
    else
    if(!password){
      setpasswordErorr('Please enter your password')
    }
    else
    if(!confirm){
      setconfirmErorr('Please confirm your password')
    }
    else{
      if(password !== confirm ){
        console.log('not ok')
      }
      else{
        console.log('ok')
      }
    }
  }
  return (
    <>

    <div className="registrationPage ">

        <h1 className=' my-[30px] font-bold text-4xl text-white '> Login </h1>


        <form onSubmit={submit} className='registrationForm w-full  px-[10px] flex flex-col items-center '>

        
          
          
          <div className=" w-full mt-10 mb-4 ">
          <p>Email</p>
          <input onChange={emailOnchang} className='w-full bg-transparent outline-none h-[40px] border-[3px] rounded-xl my-3 pl-[20px] ' type="email" name="" id="" placeholder='user email' />
          </div>

          <div className=" w-full text-red-400">
            <p> {emailErorr} </p>
          </div>
          
          
          <div className=" w-full mb-5 ">
          <p>Password</p>
          <input onChange={passwordOnchang} className='w-full bg-transparent outline-none h-[40px] border-[3px] rounded-xl my-3 pl-[20px] ' type="password" name="" id="" placeholder='password' />
          </div>

          <div className=" w-full text-red-400">
            <p>{passwordErorr} </p>
          </div>
          
          
          
          <br/>

          <button className='w-full bg-transparent h-[40px] border-[3px] rounded-xl my-3 pl-[20px] hover:scale-95 active:scale-100 transition-all '> Login  </button>


           <Link className='mb-5 mt-10' to='/registration'> Don't have an account ? Register  </Link> 
          
          
        </form>
    </div>
      
    </>
  )
}

export default Login