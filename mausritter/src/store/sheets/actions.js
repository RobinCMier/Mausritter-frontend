//imports
import { apiUrl } from "../../config/constants";
import axios from "axios";
//action creators
const loadStore = (allData) => {
  // console.log("Hi from action creator");
  return {
    type: "sheets/loadStore",
    payload: allData,
  };
};

//thunks
//FETCH ALL
export async function fetchAll(dispatch, getState) {
  // console.log("Ur in thunk now");
  const userId = getState().user.id;
  // console.log("userId is ", userId);
  try {
    // console.log("fetching data...");
    const res = await axios.get(`${apiUrl}/sheet/${userId}`);
    // console.log("actions data sheets: ", res.data); // is an object
    dispatch(loadStore(res.data));
  } catch (e) {
    console.log(`Something went wrong in fetchAll: ${e}`);
  }
}
//CREATE A SHEET
// url is 4000/sheet/postsheet

//EDIT A SHEET
//need: sheetId to put in the url for the endpoint params
//the whole sheet with all its data.
// url is 400/sheet/editsheet/:id
export function updateSheet(sheet) {
  const {
    charName,
    charColor,
    level,
    charBackground,
    pips,
    currentHP,
    maxHP,
    str,
    dex,
    will,
  } = sheet;
  console.log("this is sheet: ", sheet);
  return async (dispatch, getState) => {
    const userId = getState().user.id;
    console.log("this is id: ", userId);
    // const res = await axios.patch(`${apiUrl}/sheet/${userId}`);
    // console.log("response is ", res.data);
    //don't dispatch this, just update the store with dispatch action artworkdetail
    // dispatch(loadStore(allData));
  };
}

//DELETE A SHEET
//need: userId and sheetId in url
// 4000/sheet/:userId/delete/:sheetid
