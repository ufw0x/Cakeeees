import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { cakes } from "../constants/constants";
import { toast } from "react-toastify";

const Cart = ({ showCart }) => {
  const getData = () => {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
      let x = localStorage.getItem(i);
      if (x) {
        arr.push({ ...cakes[i], quantity: x });
      }
    }
    return arr;
  };
  const cart = getData();
  return (
    <>
      <aside className="overflow-y-scroll w-full h-full min-h-screen max-h-screen bg-[#ffffff6d] backdrop-blur-2xl fixed top-0 left-0 z-50">
        <MdClose
          className="float-right m-10 text-3xl"
          role="button"
          onClick={() => {
            showCart(false);
            document.body.style.overflowY = "unset"
          }}
        />
        {cart.length > 0 ? (
          <div className="px-10 pt-24 text-center flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-rose-500 my-10">
              Your Shopping Cart
            </h3>
            <table className="flex flex-col py-10 justify-center space-y-8 mx-auto text-center items-center">
              <tr className="flex flex-row space-x-16 text-center justify-between">
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
              {cart.map((c) => (
                <>
                  <tr
                    key={c.id}
                    className="flex flex-row justify-between space-x-20"
                  >
                    <td>
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-14 rounded-full"
                      />
                    </td>
                    <td>
                      <h3 className="text-xl">{c.price}$</h3>
                    </td>
                    <td>
                      <h4 className="text-xl">{c.quantity}</h4>
                    </td>
                  </tr>
                </>
              ))}
            </table>
            <div className="flex flex-row justify-between px-4 w-full py-10 flex-wrap">
            <button
              className="w-20 h-10  border-2 border-rose-500 text-rose-500 rounded-md "
              onClick={() => {
                localStorage.clear();
                toast.success("Your shopping cart cleared successfully", {
                  position: toast.POSITION.TOP_RIGHT,
                });
                showCart(false)
                document.body.style.overflowY = "unset"
              }}
            >
              Clear
            </button>
            <button
              className="w-20 h-10  border-2 border-rose-500 text-rose-500 rounded-md"
              onClick={() => {
                localStorage.clear();
                toast.success("Your order is successfull.", {
                  position: toast.POSITION.TOP_RIGHT,
                });
                showCart(false)
                document.body.style.overflowY = "unset"
              }}
            >
              Submit
            </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-3xl text-rose-500 py-20 px-4">
            Your Cart Is Empty
          </div>
        )}
      </aside>
    </>
  );
};

Cart.propTypes = {
  showCart: PropTypes.func,
};

export default Cart;
