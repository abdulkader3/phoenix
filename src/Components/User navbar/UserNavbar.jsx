import React from 'react'

const UserNavbar = () => {
  return (
    <>

     {/* top */}
     <div className=" homeNav w-full h-[60px] md:h-[100px] bg-white flex items-center justify-between p-5 md:p-10 lg:p-20 ">
        <div className=" border py-2 px-4 rounded-full ">00.00TK</div>
        <h2> Name Clint</h2>
        <img className='w-[30px] md:w-[70px] lg:w-[100px] overflow-hidden rounded-full ' src="https://img.freepik.com/premium-photo/round-circle-with-mans-head-circle-with-circle-middle_807814-680.jpg" alt="profile" />
      </div>
      {/* top */}
      
    </>
  )
}

export default UserNavbar
