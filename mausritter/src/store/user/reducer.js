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
      const newSheets = state.sheets.map((sheet) => {
        if (sheet.id === sheetId) {
          return {
            ...(sheet, action.payload),
          };
        } else {
          return sheet;
        }
      });
      return { ...state, sheets: newSheets }; //this is updating user and not user.sheets. Fix this

    default:
      return state;
  }
};
