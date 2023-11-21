  const initialState = [];
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "addCartItem":
        if (state.find((item) => item.id === action.payload.id) === undefined) {
          return [...state, { ...action.payload, quantity: 1 }];
        } else {
          return state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
      case "deleteCartItem":
        return state.filter((item) => item.id !== action.payload);
      case "incrementCartItem":
        return state.map((item) =>
          item.id === action.payload && item.quantity < 1000
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      case "decrementCartItem":
        return state.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        case "clearCartItem":
            return state.filter((item) => item.id === "");
      default:
        return state;
    }
  };
  
  export default cartReducer;