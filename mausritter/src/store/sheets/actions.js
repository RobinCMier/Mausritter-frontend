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
export const createSheet = (fullSheet) => {
  console.log("Getting into thunk creator..");
  return async (dispatch, getState) => {
    console.log("Getting into thunk...");
    const userId = getState().user.id;
    console.log("user id is: ", userId);
    try {
      const response = await axios.post(`${apiUrl}/sheet/postsheet`, {
        fullSheet, //is an object with all the values, prolly need to extract in backend.
        userId,
      });
      console.log(" this is response: ", response.data);
      dispatch(fetchAll);
    } catch (e) {
      //check practice ass message system > make an extra slice.
      console.log(e.message);
    }
  };
};

//EDIT A SHEET
export function updateSheet(sheet) {
  console.log("this is sheet: ", sheet);
  return async (dispatch, getState) => {
    const userId = getState().sheets.userFull.sheets.id;
    console.log("this is id: ", userId);
    const res = await axios.patch(`${apiUrl}/sheet/editsheet/${sheet.id}`, {
      sheet,
    });

    console.log("response is ", res.data);
    dispatch(fetchAll);
  };
}

//DELETE A SHEET
//need: userId and sheetId in url
// 4000/sheet/:userId/delete/:sheetid
