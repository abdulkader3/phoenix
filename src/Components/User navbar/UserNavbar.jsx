import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './UserNavbar.css'
import { IoChevronBackOutline } from 'react-icons/io5'
import { LuLogOut } from 'react-icons/lu'

const UserNavbar = () => {
   // rudux 
   const clintInfo = useSelector((state)=>state.info.userdata)


   const [one , tow ] = useState(false)

   const ProfileNext = ()=>{
    tow(!one)
   }


   const logout = ()=>{
    localStorage.clear()
    location.reload()
   }


   
  return (
    <>

     <div className="w-full relative">
      {/* top */}
     <div onClick={ProfileNext} className=" homeNav w-full h-[60px] md:h-[100px] bg-white flex items-center justify-between p-5 md:p-10 lg:p-20 ">
        <div className=" border py-2 px-4 rounded-full ">00.00TK</div>
        <h2>{clintInfo?.displayName} </h2>
        <img className='w-[30px] md:w-[70px] lg:w-[100px] overflow-hidden rounded-full ' src={clintInfo?.photoURL} alt="profile" />
      </div>
      {/* top */}

      {
        one && <div className="w-full h-screen bg-transparent ProfilePage absolute z-10 ">
          <div className="w-full text-[30px] ">
            <IoChevronBackOutline onClick={ProfileNext} />
          </div>

          <div onClick={logout} className=" flex items-center gap-1 ">
          <LuLogOut className=' rotate-180' /> <button>  LOgOut </button>
          </div>

        </div>
      }
     </div>
      
    </>
  )
}

export default UserNavbar
