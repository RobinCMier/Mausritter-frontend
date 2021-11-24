const initialState = {
  token: null,
  id: null,
  name: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "user/loginSucces":
      console.log("This is action payload: ", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
