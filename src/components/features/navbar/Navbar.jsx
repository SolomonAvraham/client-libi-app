import React, { useEffect, useRef, useState } from "react";
import { TbUserCircle } from "react-icons/tb";
import { MdSportsBasketball } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // let menuRef = useRef();

  // useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!menuRef.current( e.target )) {
  //       setIsOpen(false);
  //     }
  //   });
  // });
  return (
    <>
      <div className="   flex justify-around items-center text-blue-50 text-xl font-main  ">
        <div className=" cursor-pointer text-5xl  ">
          <TbUserCircle />
        </div>
        <div className=" relative    hover:text-sky-300  cursor-pointer ">
          <div
            className=" active:text-blue-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            ליגת ביתא ישראל
          </div>
          {isOpen && (
            <ul
              // ref={menuRef}
              className=" bg-gray-900  text-blue-50 text-xl text-center font-main absolute sm:flex-row md:grid-flow-row   "
            >
              <li className="   hover:text-sky-300  cursor-pointer ">
                <div className="">משחקים</div>
                  <MdSportsBasketball />
              </li>

              <li className=" hover:text-sky-300  cursor-pointer ">
                טבלאות
                <BsTable />
              </li>
              <li className=" hover:text-sky-300  cursor-pointer ">
                קבוצות
                <HiOutlineUserGroup />
              </li>
              <li className=" sm:visible  md:hidden hover:text-sky-300  cursor-pointer ">
                יצירת קשר
              </li>
              <li className=" sm:visible  md:hidden  hover:text-sky-300  cursor-pointer ">
                אודות
              </li>
            </ul>
          )}
        </div>
        <div className=" sm:hidden  md:block hover:text-sky-300  cursor-pointer ">
          יצירת קשר
        </div>
        <div className=" sm:hidden  md:block   hover:text-sky-300  cursor-pointer ">
          אודות
        </div>
        <div className=" w-12 opacity-96">
          <img src="/logs/libi-logo.png" alt="libi-logo" />
        </div>
      </div>
    </>
  );
}
