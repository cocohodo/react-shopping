import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/shoppingcartReducer.js";
import userReducer  from "./reducers/userReducer.js";
import selected from "./reducers/productInfoReducer.js"

// combineReducers를 사용하여 여러 개의 리듀서를 하나로 합칩니다.
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  select: selected,
  // 다른 리듀서를 추가할 수 있습니다.
});

// Redux Thunk 미들웨어를 적용하려면 applyMiddleware를 사용합니다.
const middleware = [thunk];

// createStore 함수에 rootReducer와 미들웨어를 전달하여 스토어를 생성합니다.
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;