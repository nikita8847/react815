import React, { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../App";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const updateCart = (id, action) => {
    const newCartItems = { ...cart };
    const index = newCartItems.items.findIndex((el) => el._id == id);
    if (action == "inc") newCartItems.items[index].qty++;
    else if (action == "dec") newCartItems.items[index].qty--;

    setCart(newCartItems);
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <FaMinus
                  onClick={() => {
                    updateCart(item._id, "dec");
                  }}
                />
                <span>{item.qty}</span>
                <FaPlus
                  onClick={() => {
                    updateCart(item._id, "inc");
                  }}
                />
              </td>
              <td>{(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>
              <Button>Buy now</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
