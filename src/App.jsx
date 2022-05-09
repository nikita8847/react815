import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Rating from "./components/rating/Rating";
import Counter from "./components/counter/Counter";
import Switch from "./switch/Switch";
import Task from "./components/task/Task";
import Tasks from "./components/task/Tasks";
import Students from "./components/students/Students";
import Student from "./components/students/Student";
import { Routes, Route } from "react-router-dom";
import Page404 from "./components/Page404";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import ProductForm from "./components/products/ProductForm";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = React.useState({
    items: [],
  });
  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Routes>
          <Route path="/rating" element={<Rating />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/switch" element={<Switch />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="new" element={<ProductForm />} />
            <Route path="new/:id" element={<ProductForm />} />
          </Route>

          <Route path="/students">
            <Route index element={<Students />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="single/:id/:loc" element={<Student />} />
          </Route>

          <Route path="/*" element={<Page404 />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
