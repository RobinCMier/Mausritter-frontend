const initialState = {
  token: localStorage.getItem("token"),
  id: null,
  name: null,
  email: null,
  sheets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "user/loginSucces":
      console.log("This is action payload: ", action.payload);
      return { ...state, ...action.payload };
    case "user/logOut":
      console.log("You're logging out...");
      return { ...initialState, token: null };
    case "user/updateSheet":
      // console.log("this is action payload: ", action.payload);
      const sheetId = action.payload.id;
      // console.log("this is sheet id: ", sheetId);
      //return all sheets except the one to be edited:
      const sheetsSansTarget = state.sheets.filter(
        (sheet) => sheet.id !== sheetId
      );
      // console.log(
      //   "these are the sheets that will not be changed: ",
      //   sheetsSansTarget
      // );
      const newSheets = [...sheetsSansTarget, action.payload];
      // console.log("and this should be all sheets incl edited: ", newSheets);
      return { ...state, ...(state.sheets = newSheets) };

    default:
      return state;
  }
};
