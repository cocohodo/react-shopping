const initialState = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0,
    },
};

const selectedItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "select":
      return action.payload;
    default:
      return state;
  }
};

export default selectedItemReducer;