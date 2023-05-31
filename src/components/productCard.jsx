import { BsFillCartPlusFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ image, price, name, id }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div className="w-[250px] flex flex-col shadow-md rounded-2xl m-6">
        <img
          src={image}
          alt={name}
          className=" rounded-tl-2xl rounded-tr-2xl"
        />
        <span className="text-center mt-4 font-bold text-lg text-rose-500">
          {name}
        </span>
        <div className="flex flex-row justify-between space-y-4 items-center py-4 px-10 text-lg font-bold">
          <h1 className="flex flex-row mt-4">
            {price}
            <MdOutlineAttachMoney className="mt-1" />
          </h1>
          <h3 className="flex flex-row">
            <AiOutlineMinus
              className="mt-1 mx-2  border-2 border-rose-500 rounded-3xl text-lg"
              role="button"
              onClick={() => setQuantity((q) => (q === 0 ? 0 : q - 1))}
            />
            {quantity}
            <AiOutlinePlus
              className="mt-1 mx-2 border-2 border-rose-500 rounded-2xl"
              role="button"
              onClick={() => {setQuantity((q) => q + 1)}}
            />
          </h3>

          <BsFillCartPlusFill
            role="button"
            onClick={() => {
              if(quantity==0){
                toast.error('Quantity cannot be 0', {
                  position: toast.POSITION.TOP_RIGHT,
              });
              return 
              }
              localStorage.setItem(id, quantity);
              toast.success('Added Items to Cart', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setQuantity(0)
            }}
          />
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.number
};

export default ProductCard;
