import React, { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../App";
import { http } from "../../config/axiosConfig.js";
import swal from "sweetalert2";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const subTotal = cart.items
    ?.reduce((acc, el) => acc + el.price * el.qty, 0)
    .toFixed(2);
  const discount = ((15 / 100) * subTotal).toFixed(2);
  const grandTotal = (subTotal - discount).toFixed(2);

  console.log(subTotal, discount, grandTotal);

  const updateCart = (id, action) => {
    const newCartItems = { ...cart };
    const index = newCartItems.items.findIndex((el) => el._id == id);
    if (action == "inc") newCartItems.items[index].qty++;
    else if (action == "dec") newCartItems.items[index].qty--;

    setCart(newCartItems);
  };
  console.log(cart.items);

  const createTransaction = () => {
    http
      .post("transactions", {
        products: cart.items,
        subTotal,
        discount,
        grandTotal,
      })
      .then((res) => {
        if (res.status == 201) {
          swal.fire("Success", "Transaction successfull", "success");
        }
      })
      .catch((err) => {
        swal.fire("Oops", "something went wrong", "error");
      });
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
              <td align="right">{(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>Sub Total</td>
            <td align="right" colSpan={3}>
              {subTotal}
            </td>
          </tr>
          <tr>
            <td>Discount</td>
            <td align="right" colSpan={3}>
              {discount}
            </td>
          </tr>
          <tr>
            <td>Grand Total</td>
            <td align="right" colSpan={3}>
              {grandTotal}
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        onClick={createTransaction}
        className="m-2 "
        size="lg"
        disabled={cart.items.length == 0}
      >
        Place Order
      </Button>
    </div>
  );
}

export default Cart;
