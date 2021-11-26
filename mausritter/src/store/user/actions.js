//imports
import { apiUrl } from "../../config/constants";
import axios from "axios";
//action creators
//log in
const loginSuccess = (userWithToken) => {
  console.log("Hi from action creator");
  return {
    type: "user/loginSucces",
    payload: userWithToken,
  };
};
//log out
export const logOut = () => ({ type: "user/logOut" });

//THUNKS etc
//login
export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      console.log("This is response.data ", response.data);

      dispatch(loginSuccess(response.data)); //this one doesn't work so it never gets into the store???
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
//sign up
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
//check token and fetch user
/*CONCEPT & TO DO
 I want App.js to on every render, check the local storage for token,
 and if it finds a token, then use the token to get to the me endpoint.
 From the me endpoint it should get an id, which then will be used to request from
 the GET sheet/:id endpoint, which is above userId
 ->THUNK looks for token in local storage
 -> if no token, just return. The redirect on homepage will make it go to log in
 -> Make token usable
 -> shoot get request to /auth/me 
 -> response should give entire user. Check this against reducer initial state
 -> add token, then send both to reducer with loginSuccess.
 -> Done!
 */
export const bootstrapLogin = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  console.log("token is: ", token);
  if (token) {
    // make /me call
    const response = await axios.get(`${apiUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response: ", response.data);

    //   console.log("user profile loaded automatically", userProfile);
    //   dispatch(saveUserData(jwt, userProfile));
    // } else {
    //   console.log("no token stored in localstorage");
    // }
  }
};
