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
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Dashboard from "./screens/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import LoginScreen from "./screens/LoginScreen";

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [3, 43, 45, 7, 86, 86, 86, 12],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [30, 4, 45, 7, 8, 86, 86, 10],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: [30, 40, 450, 7, 8, 86, 86, 10],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = React.useState({
    items: [],
  });
  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="products" element={<Products />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
