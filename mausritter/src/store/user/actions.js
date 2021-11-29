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
//log out ALSO REMOVE THE TOKEN!!!!!
export const logOut = () => ({ type: "user/logOut" });
//update sheet after edit
const sheetUpdate = (sheetData) => {
  console.log("hi from action creator");
  return {
    type: "user/updateSheet",
    payload: sheetData,
  };
};

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
    console.log("response: ", response.data); // need token
    dispatch(loginSuccess(response.data));
  } else {
    console.log("no token stored in localstorage");
  }
};
//SHEET STUFF:
//edit sheet
export function updateSheet(sheet) {
  console.log("this is sheet: ", sheet);
  return async (dispatch, getState) => {
    const userId = getState().user.id;
    console.log("this is id: ", userId);
    const res = await axios.patch(`${apiUrl}/sheet/editsheet/${sheet.id}`, {
      sheet,
    });

    console.log("response is ", res.data);
    dispatch(sheetUpdate(res.data));
  };
}
