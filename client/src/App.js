import './App.css';
import Checkout from './components/Checkout/Checkout';
import Products from './components/Product/Products';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header';
import ManageProducts from './components/Dashboard/ManageProducts';
import OrderHistory from './components/Dashboard/OrderHistory';
import Sidebar from './components/Dashboard/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import AddProducts from './components/Dashboard/AddProducts';
import AdminHeader from "./components/Dashboard/AdminHeader";
import Logout from "./components/Logout";
import ProductDetails from './components/Dashboard/ProductDetails';
import { Routes, Route, Navigate, useNavigate, useRoutes } from "react-router-dom"
import { useEffect, useState } from 'react';


const MultiRoutes = () => useRoutes([
  { path:"/dashboard", element:<Navigate replace to="/signin" /> },
  { path:"/dashboard/products", element:<Navigate replace to="/signin" /> },
  { path:"/dashboard/orders", element:<Navigate replace to="/signin" /> }
]);



function App() {
  const navigate = useNavigate();
  // let [token, setToken] = useState("")
  // useEffect(() => {
  //   setToken(localStorage.getItem('token'))
  //   console.log(token)
  // })

  const user = localStorage.getItem("token");


  return (
    <div className="App">
      {/* <Header /> */}
    {/* <MultiRoutes/> */}
      <Routes>
       
        {/* {token? navigate("/dashboard"):<Route exact path="/signin" element={<SignIn />} />} */}
        {/* {user && <Route exact path={`/dashboard`} element={<Dashboard />} />} */}
        {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        
        
        {/* <Route exact path="/signin" element={token? <Navigate replace to="/dashboard"/>:<SignIn />} /> */}
       
        {/* <Route exact path="/logout" element={<Logout />} /> */}
        {/* <Route exact path="/dashboard" element={token? <Dashboard />: <Navigate replace to="/signin"/> } /> */}
        {/* <Route exact path="/dashboard" element={<Dashboard/>} /> */}
        {/* {token?  <Route exact path="/dashboard" element={<Dashboard/>} /> : navigate("/signin")} */}
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/" element={<Navigate replace to="/signin" />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/products" element={<ManageProducts />} />
        <Route exact path="/dashboard/products/add" element={<AddProducts />} />
        <Route exact path="/dashboard/orders" element={<OrderHistory />} />
        <Route exact path="/dashboard/checkout" element={<Checkout />} />
        {/* <Route exact path="/productdata/:id" element={<ProductDetails/>} /> */}
      </Routes>


    </div>
  );
}

export default App;
