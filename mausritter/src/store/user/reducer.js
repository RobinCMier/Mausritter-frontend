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
    default:
      return state;
  }
};
