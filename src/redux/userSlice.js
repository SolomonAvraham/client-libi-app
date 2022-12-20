import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

// localStorage.setItem("user", "sol")
// const name = localStorage.getItem('user')
// console.log(name);
//  localStorage.clear();

const initialState = {
  email: "", //"acc@acc.com"
  password: "", //123456
  authorized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },
  reducers: {
    setEmail: (state, action) => {
      state.value.email = action.payload;
    },
    setPassword: (state, action) => {
      state.value.password = action.payload;
    },
    logon: (state, action) => {
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
      state.value.authorized = true;
    },

    logoff: (state) => (state.value.authorized = false),
  },
});

export const { setEmail, setPassword, logon, logoff } = userSlice.actions;

export default userSlice.reducer;

export const authorize = (email, password) => (dispatch) => {
  return fetch("http://localhost:8000/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      localStorage.setItem("userObj", JSON.stringify(data));
      dispatch(logon(email, password, true));
    })
    .catch((err) => console.log(err));
};

export const selectEmail = (state) => state.user.value.email;
export const selectPassword = (state) => state.user.value.password;
// export const selectAuthorized = (state) => state.user.value.authorized;
