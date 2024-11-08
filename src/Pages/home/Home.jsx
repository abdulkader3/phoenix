import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { useSelector } from "react-redux";
import { getAuth, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const Home = () => {
  const clintInfo = useSelector((state) => state.info.userdata);

  const [one, tow] = useState(false);
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const auth = getAuth();

  const ProfileNext = () => {
    tow(!one);
  };

  const logout = () => {
    localStorage.clear();
    location.reload();
  };

  // Function to reauthenticate user
  const reauthenticateUser = async () => {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, password);
    try {
      await reauthenticateWithCredential(user, credential);
      return true;
    } catch (error) {
      console.error("Incorrect password", error);
      return false;
    }
  };

  // Function to set PIN in Realtime Database
  const handleSetPin = async () => {
    const isAuthenticated = await reauthenticateUser();
    if (isAuthenticated) {
      const db = getDatabase();
      await set(ref(db, `ClintList/${auth.currentUser.uid}/pin`), pin);
      alert("PIN set successfully!");
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <>
      <div className=" homePage ">
        <div className="w-full relative">
          {/* top */}
          <div
            onClick={ProfileNext}
            className=" homeNav w-full h-[60px] md:h-[100px] bg-white flex items-center justify-between p-5 md:p-10 lg:p-20 "
          >
            <div className=" border py-2 px-4 rounded-full ">00.00TK</div>
            <h2>{clintInfo?.displayName} </h2>
            <img
              className="w-[30px] md:w-[70px] lg:w-[100px] overflow-hidden rounded-full "
              src={clintInfo?.photoURL}
              alt="profile"
            />
          </div>
          {/* top */}

          {one && (
            <div className="w-full h-screen bg-transparent ProfilePage absolute z-10 ">
              <div className="w-full text-[30px] my-10 ">
                <IoChevronBackOutline onClick={ProfileNext} />
              </div>

              {/* Password input */}
              <div className="w-full h-[40px] rounded-full ">
                <input
                  className="w-full h-full rounded-full text-black pl-5 "
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* PIN input */}
              <div className="w-full h-[40px] rounded-full my-10 ">
                <input
                  className="w-full h-full rounded-full text-black pl-5"
                  type="text"
                  placeholder="Enter PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>

              {/* Set PIN button */}
              <button onClick={handleSetPin} className="w-full active:scale-95 transition-all mt-2 bg-blue-500 text-white rounded-full py-2">
                Set PIN
              </button>

              <div
                onClick={logout}
                className=" flex items-center justify-center text-black  "
              >
                <div className=" w-[100px] flex items-center gap-1 bg-white h-[40px] rounded-full justify-center mt-20  ">
                <LuLogOut className=" rotate-180" /> <button> Log Out </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* option part */}
        <div className=" optionPart w-full  flex mt-2 p-5 flex-wrap gap-4 text-[12px] font-bold ">
          <Link className=" flex flex-col items-center ml-4 " to="/transfer">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s"
              alt="option"
            />{" "}
            Bkash{" "}
          </Link>
          <Link className="flex flex-col items-center" to="/transfernagad">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://downloadr2.apkmirror.com/wp-content/uploads/2020/07/10/5f094774bdb14-384x384.png"
              alt="option"
            />{" "}
            Nagad{" "}
          </Link>
          <Link className="flex flex-col items-center" to="/transferrocket">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa72jjxmBhP7jDcL_d2ONde0G1ztGDxpfe9Q&s"
              alt="option"
            />{" "}
            Rocket{" "}
          </Link>
          <Link className="flex  flex-col items-center" to="/transferopay">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://africanjournal.co/wp-content/uploads/2021/10/Opay-Logo-300x300.jpg.webp"
              alt="option"
            />{" "}
            Opay{" "}
          </Link>
          <Link className="flex flex-col items-center" to="/transferbalence">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo="
              alt="option"
            />{" "}
            Balance{" "}
          </Link>
          <Link
            className="flex ml-4 flex-col items-center"
            to="/transferminute"
          >
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://media.istockphoto.com/id/1141778521/vector/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-websites.jpg?s=612x612&w=0&k=20&c=DdQVkRexW_o2b86c4yqz24UpNpUA0IIVTS2_tFXECjo="
              alt="option"
            />{" "}
            Minute{" "}
          </Link>

          <Link className="flex flex-col items-center" to="/transfermd">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="photos/mdrcharge.png"
              alt="option"
            />{" "}
            MB{" "}
          </Link>
          <Link className="flex flex-col items-center" to="/transferismart">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://play-lh.googleusercontent.com/HMzdrJUMVF1ssfIjsX5kDZ2zQmTJCeyHEZVASXC6aAMZsp-WX2AXP6RECh1x_L44-eI"
              alt="option"
            />{" "}
            IBBL iSmart{" "}
          </Link>
          <Link className="flex flex-col items-center" to="/transferbank">
            {" "}
            <img
              className=" w-[30px] overflow-hidden rounded-xl "
              src="https://cdn.pixabay.com/photo/2023/12/26/04/55/bank-8469480_960_720.png"
              alt="option"
            />{" "}
            Bank transfer{" "}
          </Link>
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
        <button className=" bg-white absolute w-full h-[40px] transition-all rounded-lg mt-4 bottom-2 md:bottom-3 lg:bottom-10 hover:scale-95 active:scale-100 ">
          {" "}
          Add Money{" "}
        </button>
        {/* add money button */}
      </div>
    </>
  );
};

export default Home;
