import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { cakes } from "../constants/constants";
import { toast } from "react-toastify";

const Cart = ({ showCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getData = () => {
      let arr = [];
      for (let i = 0; i <= cakes.length; i++) {
        let x = localStorage.getItem(i);
        if (x) {
          arr.push({ ...cakes[i], quantity: parseInt(x) });
        }
      }
      setCartItems(arr);
    };

    getData();
  }, []);

  const updateQuantity = (itemId, quantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        localStorage.setItem(item.id, quantity);
        return { ...item, quantity };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const clearCart = () => {
    localStorage.clear();
    toast.success("Your shopping cart cleared successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setCartItems([]);
    showCart(false);
    document.body.style.overflowY = "unset";
  };

  const submitOrder = () => {
    localStorage.clear();
    toast.success("Your order is successful.", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setCartItems([]);
    showCart(false);
    document.body.style.overflowY = "unset";
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (
    <aside className="overflow-y-scroll w-full h-full fixed top-0 left-0 z-50 bg-gray-900 bg-opacity-50">
      <div className="relative max-w-sm mx-auto mt-20 p-4 bg-white rounded-lg shadow-lg px-8 lg:px-10 py-10 lg:py-14 text-center">
        <MdClose
          className="absolute top-2 right-2 text-gray-600 cursor-pointer"
          size={24}
          onClick={() => {
            showCart(false);
            document.body.style.overflowY = "unset";
          }}
        />
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Your Shopping Cart
        </h3>
        {cartItems.length > 0 ? (
          <>
            <table className="w-full mx-auto my-8 text-center">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full mx-auto"
                      />
                    </td>
                    <td>
                      <span className="text-gray-800">${item.price}</span>
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-12 text-gray-800"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-800">
                  Total: ${calculateTotalPrice()}
                </span>
              </div>
              <div className="flex justify-between">
                <button
                  className="w-20 h-10 bg-red-500 text-white rounded-md mr-2"
                  onClick={clearCart}
                >
                  Clear
                </button>
                <button
                  className="w-20 h-10 bg-green-500 text-white rounded-md"
                  onClick={submitOrder}
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-800">Your cart is empty</p>
        )}
      </div>
    </aside>
  );
};

Cart.propTypes = {
  showCart: PropTypes.func.isRequired,
};

export default Cart;
