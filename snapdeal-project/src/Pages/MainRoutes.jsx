import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCards from "../Components/ProductCards";
import SinglePage from "./SinglePage";
import BeautyProductPage from "./BeautyProducts";
import ProductPage from "./ProductPage";
import { LandingPage } from "../Components/LandingPage";
import Signup from "../Components/Signup";
import Login from "../Components/Login/Login";
import Checkout from "../Components/Checkout/Checkout";
import { AdminPortal } from "./AdminPortal";
import AddCart from "../Components/AddCart";
import { AccountDetails } from "./AccountDetails";
import Protected from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={
        <Protected>
          <AdminPortal />
        </Protected>
      } />
      <Route path="/checkout" element={
        <Protected>
          <Checkout />
        </Protected>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/product" element={
        <Protected>
          <ProductPage />
        </Protected>
      }>
      </Route>
      <Route path="/products/:id" element={
        <Protected>
          <SinglePage />
        </Protected>}></Route>
      <Route path="/products" element={
        <Protected>
          <BeautyProductPage />
        </Protected>}></Route>
      <Route path="/cart" element={
        <Protected>
          <AddCart />
        </Protected>
      }></Route>
      <Route path="/account" element={
        <Protected>
          <AccountDetails />
        </Protected>
      }></Route>

    </Routes>
  );
};

export default MainRoutes;
