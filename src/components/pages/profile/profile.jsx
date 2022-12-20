import React from "react";
import { useSelector, useDispatch } from "react-redux";
 
export default function Profile() {
  const user = useSelector((state) => state.user.value);
 
  return (
    <div className=" grid place-items-center  justify-items-center">
      <h1>Profile</h1>
      <p>Email:{user.email}</p>
      <p>Password:{user.password}</p>
    </div>
  );
}
