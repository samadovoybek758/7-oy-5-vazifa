import React, { useContext } from "react";
import { CartContex } from "../App";

function Cart() {
  const { cart, setCart } = useContext(CartContex);

  function removed(id, color) {
    let copied = [...cart];

    copied = copied.filter(function (value) {
      return !(value.id == id && value.color == color);
    });

    setCart(copied);
    localStorage.setItem("cart", JSON.stringify(copied));
  }

  function changeCount(count, color, id) {
    let copied = [...cart];
    copied = copied.map(function (value) {
      if (value.id == id && value.color == color) {
        value.count = Number(count);
      }
      return value;
    });

    setCart(copied);
    localStorage.setItem("cart", JSON.stringify(copied));
  }
  return (
    <div className="container max-w-[1200px] mx-auto ">
      <div className=" border-b border-base-300 pb-5 mb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Your cart is empty
        </h2>
      </div>
      <div className="flex justify-between container">
      <div className="w-[714px]">
        {cart.length > 0 &&
          cart.map(function (value, index) {
            return (
              <div key={index} className="flex justify-between w-full border-b p-4">
                <img
                  className="w-[128px] h-[128px] object-cover rounded-md"
                  src={value.data.attributes.image}
                  alt=""
                />
                <div className="">
                  <h2 className="text-gray-600 text-lg font-bold mb-2 uppercase">
                    {value.data.attributes.title}
                  </h2>
                  <p className="mb-3 text-gray-500">{value.data.attributes.company}</p>
                  <div className="flex items-center gap-2">
                    <span>Color :</span>
                  <span
                    style={{
                      backgroundColor: value.color,
                    }}
                    className={"block w-4 h-4 rounded-lg cursor-pointer"}
                  ></span>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h4 className=" mb-2 text-sm">Amount</h4>
                  <select
                    className="w-14 h-6 px-2 bg-blue-500 text-white text-xs rounded-md border"
                    value={value.count}
                    onChange={(e) =>
                      changeCount(e.target.value, value.color, value.id)
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <span
                    onClick={() => removed(value.id, value.color)}
                    className="text-lg cursor-pointer text-blue-500 mt-2"
                  >
                    remove
                  </span>
                </div>
                <div>
                  <p className="text-gray-600 text-lg font-bold ">
                    ${value.data.attributes.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[300px] block">
          <div className="card bg-base-200  p-4">
            <div className="mb-2">
              <span className="text-xs border-b border-base-300 pb-2">
                Subtotal
              </span>
              <span className="font-medium"></span>
            </div>

            <div className="mb-2">
              <span className="text-xs border-b border-base-300 pb-2">
                Shipping
              </span>
              <span className="font-medium"></span>
            </div>

            <div className="mb-2">
              <span className="text-xs border-b border-base-300 pb-2">Tax</span>
              <span className="font-medium"></span>
            </div>

            <div className="mb-2">
              <span className="text-xs border-b border-base-300 pb-2">
                Order Total
              </span>
              <span className="font-medium"></span>
            </div>
          </div>
        </div>
        </div>
      
    </div>
  );
}

export default Cart;
