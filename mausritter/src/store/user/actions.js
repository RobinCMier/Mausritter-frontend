//imports
import { apiUrl } from "../../config/constants";
import axios from "axios";
//action creators
const loginSuccess = (userWithToken) => {
  console.log("Hi from action creator");
  return {
    type: "user/loginSucces",
    payload: userWithToken,
  };
};

//THUNKS etc

export const login = (email, password) => {
  return async (dispatch, getState) => {
    // dispatch(appLoading());
    console.log(
      "You're calling the login dispatch and your arguments are: ",
      email,
      password
    );
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      console.log("This is response.data ", response.data);

      dispatch(loginSuccess(response.data));
      //   dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      //   dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        // dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        // dispatch(setMessage("danger", true, error.message));
      }
      //   dispatch(appDoneLoading());
    }
  };
};
