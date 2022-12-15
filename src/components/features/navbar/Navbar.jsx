import React from "react";

export default function Navbar() {
  return (
    <div className=" sm:flex md:flex justify-around items-center text-blue-50 text-xl font-main  ">
      <div className=" hover:text-sky-300 hover:text-lg cursor-pointer  ">
        USER
      </div>
      <div className=" hidden md:block   hover:text-sky-300 hover:text-2xl cursor-pointer ">
        משחקים
      </div>
      <div className=" hidden md:block   hover:text-sky-300 hover:text-2xl cursor-pointer ">
        לו״ז
      </div>
      <div className=" hidden md:block   hover:text-sky-300 hover:text-2xl cursor-pointer ">
        טבלאות
      </div>
      <div className=" hidden md:block   hover:text-sky-300 hover:text-2xl cursor-pointer ">
        קבוצות
      </div>
      <div className=" w-12 opacity-96">
        <img src="/logs/libi-logo.png" alt="libi-logo" />
      </div>
    </div>
  );
}
