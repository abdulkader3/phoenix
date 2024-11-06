import React from 'react'
import { useSelector } from 'react-redux'

const UserNavbar = () => {
   // rudux 
   const clintInfo = useSelector((state)=>state.info.userdata)


   
  return (
    <>

     {/* top */}
     <div className=" homeNav w-full h-[60px] md:h-[100px] bg-white flex items-center justify-between p-5 md:p-10 lg:p-20 ">
        <div className=" border py-2 px-4 rounded-full ">00.00TK</div>
        <h2>{clintInfo?.displayName} </h2>
        <img className='w-[30px] md:w-[70px] lg:w-[100px] overflow-hidden rounded-full ' src={clintInfo?.photoURL} alt="profile" />
      </div>
      {/* top */}
      
    </>
  )
}

export default UserNavbar
