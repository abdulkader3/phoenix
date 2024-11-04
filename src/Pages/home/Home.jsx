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
      <div className=" optionPart w-full  flex mt-2 p-5 flex-wrap gap-9 ">
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
        <Link className='flex flex-col items-center' to='#'> <img className=' w-[30px] overflow-hidden rounded-xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s" alt="option" /> Bkash </Link>
      </div>
      {/* option part */}


      {/* history */}
      <div className=" w-full h-[250px] md:h-[300px] bg-white overflow-y-scroll History py-5 px-2 md:px-5 lg:px-10  flex flex-wrap gap-5  ">


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
      <button className=' bg-white absolute w-full h-[40px] rounded-lg mt-4 bottom-2 md:bottom-3 lg:bottom-10 hover:scale-95 active:scale-100 '> Add Money </button>
       {/* add money button */}

    </div>
      
    </>
  )
}

export default Home
