//imports
import { apiUrl } from "../../config/constants";
import axios from "axios";
//action creators
//log in
const loginSuccess = (userWithToken) => {
  // console.log("Hi from action creator");
  return {
    type: "user/loginSucces",
    payload: userWithToken,
  };
};
//log out
export const logOut = () => ({ type: "user/logOut" });

//THUNKS etc

export const login = (email, password) => {
  return async (dispatch, getState) => {
    // console.log(
    //   "You're calling the login dispatch and your arguments are: ",
    //   email,
    //   password
    // );
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      console.log("This is response.data ", response.data);

      dispatch(loginSuccess(response.data));
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      });
      console.log("response.data is ", response.data);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
