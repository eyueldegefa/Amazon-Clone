import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Results from "./Pages/Results/Result"
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe('pk_test_51R3YjTFbejQXQDL6DVlcrOu6i8we0yNB6RRqW7Xan7NUHMtxJPiT5bSuGH3EayQTTidDtj9GSJb2EytV028wjTmK001YMwSpaj');



function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />}/>
            <Route path="/payments" element={
              <ProtectedRoute
                msg={"You must Log in to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }/>
            <Route path="/orders" element={
              <ProtectedRoute
                msg={"You must Log in to access your orders"}
                redirect={"/orders"}>
                  <Orders/>
              </ProtectedRoute>
            } />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default Routing