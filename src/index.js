/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'react-image-lightbox/style.css';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Detail from "views/examples/Detail";
import Cart from "views/examples/Cart";
import Order from "views/examples/Order";
import mockAllProducts from "./data/mockAllProducts.json";
export const DataContext = createContext();

const allProductsData = mockAllProducts.products;

function App() {
  const [id, setId] = useState('')
  const [size, setSize] = useState ('');
  const [totalValue, setTotalValue] = useState ('');
  const [quantity, setQuantity] = useState(1);
  const shippingPrice = 30000;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [wards, setWards] = useState('');
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState('');
  return (
    <DataContext.Provider value={{
      allProductsData: allProductsData,
      id: id,
      setId: setId,
      size: size,
      setSize: setSize,
      shippingPrice: shippingPrice,
      totalValue: totalValue,
      setTotalValue: setTotalValue,
      quantity: quantity,
      setQuantity: setQuantity,
      name: name,
      setName: setName,
      phone: phone,
      setPhone: setPhone,
      email: email,
      setEmail: setEmail,
      city: city,
      setCity: setCity,
      district: district,
      setDistrict: setDistrict,
      wards: wards,
      setWards: setWards,
      address: address,
      setAddress: setAddress,
      info: info,
      setInfo: setInfo,
    }} >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={(props) => <Index {...props} />} />
          <Route
            path="/landing-page"
            exact
            render={(props) => <Landing {...props} />}
          />
          <Route
            path="/login-page"
            exact
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/profile-page"
            exact
            render={(props) => <Profile {...props} />}
          />
          <Route
            path="/register-page"
            exact
            render={(props) => <Register {...props} />}
          />
          <Route
            path="/detail-page/:product_id"
            exact
            render={(props) => <Detail {...props} />}
          />
          <Route
            path="/cart-page/:product_id&&:product_size"
            exact
            render={(props) => <Cart {...props} />}
          />
          <Route
            path="/order-page/:product_id&&:product_size"
            exact
            render={(props) => <Order {...props} />}
          />
          <Redirect to="/landing-page" />
        </Switch>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)