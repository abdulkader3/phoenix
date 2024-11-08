import React, { useState } from "react";
import "./Transfer.css";
import UserNavbar from "../../Components/User navbar/UserNavbar";
import { Link } from "react-router-dom";
import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";

const Transfer = () => {

  // data of current user from redux
  const ClintData = useSelector((state)=>state.info.userdata)

  // manage state
  const [category ] = useState('Bkash')
  const [categoryPhoto ] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s')
  const [paisa , setTaka]                 = useState('')
  const [money , setMoney]                 = useState('')

  
  // Taka of input
  const Taka = (e)=>{
    
    setTaka(e.target.value)
  }

  // Send money of cash out
  const Money = (e)=>{
    
    setMoney(e.target.id)
  }



  // real time Clock
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  console.log(formatAMPM(new Date));
  // real time Clock



  // firebase
  const db = getDatabase();

  const BkashSetData = ()=>{
    set(push((ref(db, 'ListOfRequest/'))), {
      time: formatAMPM(new Date),
      clintId: ClintData.uid,
      clintName: ClintData.displayName,
      clintPhoto: ClintData.photoURL,
      methodOf: category,
      photoOfmethod: categoryPhoto,
      type : money,
      amount : paisa,
    });
  }
  return (
    <>
      <div className=" transferMain text-white ">
        <UserNavbar />
        <div className="px-2 md:px-[100px]">
          <div className="w-full flex justify-between items-center mt-10 px-3 ">
            <div className="w-[150px] relative  ">
              <input
                onChange={Taka}
                className=" outline-none text-purple-700 border amount pl-5 w-[150px]  h-full rounded-md "
                type="number"
                placeholder="Amount"
              />
              <p className=" absolute top-0 right-5 text-[#32323288] ">TK</p>
            </div>

            <Link className=" flex flex-col items-center ml-4 " to="#">
              {" "}
              <img
                className=" w-[30px] overflow-hidden rounded-xl "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s"
                alt="option"
              />{" "}
              Bkash{" "}
            </Link>
          </div>

          <div className=" text-white font-bold flex flex-col w-full items-end gap-2 mt-5 ">
            {/* cash in cash out option */}
            <div className=" optionManu">
              <label htmlFor="SendMoney">Send Money</label>{" "}
              <input onChange={Money} name="option" id="SendMoney" type="radio" />
            </div>

            <div className=" optionManu">
              <label htmlFor="CashOut">Cash out</label>{" "}
              <input onChange={Money} name="option" id="CashOut" type="radio" />
            </div>
            {/* cash in cash out option */}
          </div>

          <div className="w-full mt-5 px-5 relative ">
            <input
              className=" border outline-none text-purple-700 amount pl-5 w-full h-[50px]  rounded-md "
              type="number"
              placeholder="Number"
            />
            <p className=" absolute top-3 right-10 text-[#32323288] ">
              {" "}
              Bkash{" "}
            </p>
          </div>

          {/* AAgent or personal*/}
          <div className=" w-full flex gap-10 mt-4 justify-center  ">

          <div className=" optionManuor">
              <label htmlFor="agent">Agent </label>{" "}
              <input name="or" id="agent" type="radio" />
            </div>

            <div className=" optionManuor">
              <label htmlFor="personal">Personal</label>{" "}
              <input name="or" id="personal" type="radio" />
            </div>
          </div>
          {/* AAgent or personal*/}

          <div className=" w-full mt-4 ">
          <input
              className=" pinPlace border outline-none text-purple-700 amount pl-5 w-full h-[50px] text-[45px]  rounded-md "
              type="number"
              placeholder="  *    *    *    *   "
            />
          </div>

          <button onClick={BkashSetData} className=" w-full bg-white text-blue-700 mt-10 rounded-lg font-bold hover:scale-95 active:scale-100 transition-all py-4 ">
            {" "}
            Send{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Transfer;
