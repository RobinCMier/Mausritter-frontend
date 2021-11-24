const initialState = {
  userFull: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "sheets/loadStore":
      console.log("action payload is ", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
