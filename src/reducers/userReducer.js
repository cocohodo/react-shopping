
const initialState = null;

const selectedItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setMemberLogin":
      return action.payload;
    case "setMemberLogout":
      return action.payload;
    default:
      return state;
  }
};

export default selectedItemReducer;