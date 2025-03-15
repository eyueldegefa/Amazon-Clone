import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Results from "./Pages/Results/Result"
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail"


function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />}/>
            <Route path="/payments" element={<Payment />}/>
            <Route path="/orders" element={<Orders/>} />
            <Route path="/catagory/:catagoryName" element={<Results />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default Routing