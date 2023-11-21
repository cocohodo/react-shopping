import './App.css';
import { Outlet, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShoppingCartPage from './pages/ShoppingCartPage'
import ProductInfoPage from './pages/ProductInfoPage';
const Layout = () => {
  return (
    <div>
      <Nav/>
      <Outlet />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
          <Route path="/product/:productId" element={<ProductInfoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
