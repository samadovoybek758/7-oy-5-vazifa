import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContex } from "../App";

function Header({ children }) {
  const { cart, setCard } = useContext(CartContex);
  const [count, setCount] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    let sum = 0;
    cart.forEach((element) => {
      sum += element.count;
    });

    setCount(sum);
  }, [cart]);

  function handleCart(e) {
    e.preventDefault()
    navigate('/cart')
  }
  return (
    <div>
      <div className=" bg-slate-500 mb-20 mx-auto  ">
        <div className="container navbar mx-auto w-[1200px] flex justify-between">
          <div className="flex-1 max-w-[100px]">
            <a
              className="hidden lg:flex btn btn-primary text-3xl items-center"
              href="/"
            >
              C
            </a>
          </div>
          <div className="flex flex-row gap-5 text-white text-xl">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/checkout"}>Checkout</Link>
            <Link to={"/orders"}>orders</Link>

           
          </div>

          <div>
            <div onClick={handleCart} className="indicator cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-lg indicator-item ">{count}</span>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
