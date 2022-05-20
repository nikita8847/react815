import {
  FaUserAlt,
  FaWindowRestore,
  FaWineGlass,
  FaYinYang,
  FaMicrochip,
} from "react-icons/fa";

const links = [
  { id: 1, label: "Dashboard", path: "/dashboard", icon: <FaUserAlt /> },
  { id: 2, label: "Users", path: "/users", icon: <FaWindowRestore /> },
  { id: 3, label: "Products", path: "/products", icon: <FaWineGlass /> },
  { id: 4, label: "Categories", path: "/categories", icon: <FaYinYang /> },
  {
    id: 5,
    label: "Transactions",
    path: "/transactions",
    icon: <FaMicrochip />,
  },
];

export default links;
