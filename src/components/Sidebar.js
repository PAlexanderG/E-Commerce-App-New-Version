import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons & FiTrash2
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import components
import CartItem from "../components/CartItem";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  // add clearCart
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full
  shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
  duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div
        className="flex items-center justify-between py-6
      border-b"
      >
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-poiter w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* use bg-purple-200 to check the space you have to work in CSS */}
      <div
        className="flex flex-col gap-y-2 h-[520px]
      lg:h-[640px] overflow-y-auto overflow-x-hidden border-b"
      >
        {cart.map((item) => {
          // in order to pass the CartItem errase the plain text title
          // and replaced it with the alias.. Any
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div
        className="flex flex-col gap-y-3 py-4
      mt-4"
      >
        <div
          className="flex w-full
        justify-between items-center"
        >
          {/* total */}
          {/* to convert to 2 decimals use: a fuction 
          {parseFloat(total).toFixed(2)}*/}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon & add onClick property*/}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500
          text-white w-12 h-12 flex justify-center
          items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-300 flex p-4 justify-center
        items-center text-primary w-full font-medium"
        >
          View cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-4 justify-center
        items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
