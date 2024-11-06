import React from "react";
import "./Transfer.css";
import UserNavbar from "../../Components/User navbar/UserNavbar";
import { Link } from "react-router-dom";

const TransferMB = () => {
  return (
    <>
      <div className=" transferMain text-white ">
        <UserNavbar />
        <div className="px-2 md:px-[100px]">
          <div className="w-full flex justify-between items-center mt-10 px-3 ">
            <div className="w-[150px] relative  ">
            

            <div className=" text-white font-bold flex flex-col w-full items-end gap-2 mt-5 ">
            {/* cash in cash out option */}
            <div className=" optionManu">
              <label htmlFor="GrameenPhone">Grameenphone</label>{" "}
              <input name="option" id="GrameenPhone" type="radio" />
            </div>

            <div className=" optionManu">
              <label htmlFor="Banglalink">Banglalink</label>{" "}
              <input name="option" id="Banglalink" type="radio" />
            </div>
           
            <div className=" optionManu">
              <label htmlFor="Airtel">Airtel</label>{" "}
              <input name="option" id="Airtel" type="radio" />
            </div>


            <div className=" optionManu">
              <label htmlFor="Robi">Robi</label>{" "}
              <input name="option" id="Robi" type="radio" />
            </div>
            
            
            <div className=" optionManu">
              <label htmlFor="Teletalk">Teletalk</label>{" "}
              <input name="option" id="Teletalk" type="radio" />
            </div>
            {/* cash in cash out option */}
          </div>
             
            </div>

            <Link className=" flex flex-col items-center ml-4 " to="#">
              {" "}
              <img
                className=" w-[30px] overflow-hidden rounded-xl "
                src="https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo="
                alt="option"
              />{" "}
              MB
              {" "}
            </Link>
          </div>

          

          <div className="w-full mt-10 px-5 relative ">
            <input
              className=" border outline-none text-purple-700 amount pl-5 w-full h-[50px]  rounded-md "
              type="number"
              placeholder="Number"
            />
            <p className=" absolute top-3 right-10 text-[#32323288] ">
              {" "}
              GB
              {" "}
            </p>
          </div>

          {/* bundel updete by admin*/}

          <div className="w-full h-[200px] OfferList ">


            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Robi   90GB + 800min   7day   220Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Grameenphone   200GB   30day   850Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Airtel   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Teletalk   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Airtel   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>
            <div className="w-full bg-green-500 p-1 font-bold rounded-xl mt-3 pl-3 ">
              <p> Banglalink   100GB   30day   550Tk </p>
            </div>

            
          </div>
          
          {/* bundel updete by admin*/}

          <div className=" w-full mt-10">
          <input
              className=" pinPlace border outline-none text-purple-700 amount pl-5 w-full h-[50px] text-[45px]  rounded-md "
              type="number"
              placeholder="  *    *    *    *   "
            />
          </div>

          <button className=" w-full bg-white text-blue-700 mt-20 rounded-lg font-bold hover:scale-95 active:scale-100 transition-all py-4 ">
            {" "}
            Send{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default TransferMB;
