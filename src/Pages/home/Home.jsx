import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <div className=" homePage ">

      {/* top */}
      <div className=" homeNav w-full h-[60px] md:h-[100px] bg-white flex items-center justify-between p-5 md:p-10 lg:p-20 ">
        <div className=" border py-2 px-4 rounded-full ">00.00TK</div>
        <h2> Name Clint</h2>
        <img className='w-[30px] md:w-[70px] lg:w-[100px] overflow-hidden rounded-full ' src="https://img.freepik.com/premium-photo/round-circle-with-mans-head-circle-with-circle-middle_807814-680.jpg" alt="profile" />
      </div>
      {/* top */}


      {/* option part */}
      <div className=" optionPart w-full  flex mt-2 p-5 flex-wrap gap-8 text-[10px] ">
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash send money </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://downloadr2.apkmirror.com/wp-content/uploads/2020/07/10/5f094774bdb14-384x384.png" alt="option" /> Nagad </Link>
                <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://pngtom.com/files/preview/960x960/317020431739wsqe06kdzz8abbcj9ubb1txjumovorxogdiwsxfdahjy5lxcole5zugbetwsrclps4hvvlt84nfffvkb7aeykoiptprmrlpzsux.png" alt="option" /> Rocket </Link>
                <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://play-lh.googleusercontent.com/ArowgQs3NWtBgXbtJT67dHR9gMvNq6IZyssJCDKtxh-_qsKQlRrmBQy3Fq2Pdw0RSkE" alt="option" /> Opay </Link>
                <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://zarss-bibm.s3-ap-southeast-1.amazonaws.com/bibm_org/members_photo/U8Q06e47ryjD2Pehh6dkTcCdloyqwyklpEQxbtd9.jpeg" alt="option" /> Dutch.Bangla</Link>
                <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo=" alt="option" /> Balance.recharge </Link>
                <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://cdn.pixabay.com/photo/2023/12/26/04/55/bank-8469480_960_720.png" alt="option" /> Bank transfer </Link>
                <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo=" alt="option" /> Minute.recharge </Link>

        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="photos/mdrcharge.png" alt="option" /> MB Recharge </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://play-lh.googleusercontent.com/HMzdrJUMVF1ssfIjsX5kDZ2zQmTJCeyHEZVASXC6aAMZsp-WX2AXP6RECh1x_L44-eI" alt="option" /> IBBL iSmart </Link>

      </div>
      {/* option part */}


      {/* history */}
      <div className=" w-full h-[250px] md:h-[300px]  overflow-y-scroll History py-5 px-2 md:px-5 lg:px-10  flex flex-wrap gap-5  ">


        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        <div className="w-full text-[12px] md:text-[18px] h-[40px] bg-green-400 flex items-center justify-between p-3 rounded-xl ">
          <p> 019XXXXXXXXX </p>
          <p> 112200.88 TK </p>
          <p>31/12/2024</p>
        </div>
        
       
      </div>
      {/* history */}


       {/* add money button */}
      <button className=' bg-white absolute w-full h-[40px] transition-all rounded-lg mt-4 bottom-2 md:bottom-3 lg:bottom-10 hover:scale-95 active:scale-100 '> Add Money </button>
       {/* add money button */}

    </div>
      
    </>
  )
}

export default Home
