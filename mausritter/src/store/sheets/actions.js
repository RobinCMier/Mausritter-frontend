//imports
import { apiUrl } from "../../config/constants";
import axios from "axios";
//action creators
const loadStore = (allData) => {
  console.log("Hi from action creator");
  return {
    type: "sheets/loadStore",
    payload: allData,
  };
};

//thunks

export async function fetchAll(dispatch, getState) {
  console.log("Ur in thunk now");
  const userId = getState().user.id;
  console.log("userId is ", userId);
  // dispatch(startLoading);
  try {
    console.log("fetching data...");
    const res = await axios.get(`${apiUrl}/sheet/${userId}`);
    console.log("actions data sheets: ", res.data); //is array, 1 artwork is object with array of bids
    dispatch(loadStore(res.data));
  } catch (e) {
    console.log(`Something went wrong in fetchAll: ${e}`);
  }
}
