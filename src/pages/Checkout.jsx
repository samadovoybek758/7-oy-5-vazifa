import React from "react";

function Checkout() {
  function handle_btn(ev) {
    ev.preventDefault()
    console.log('fg');
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="border-b border-base-300 pb-5 mb-6">
        <h1 className="text-3xl font-medium tracking-wider">
          Place Your Order
        </h1>
      </div>
 
      <div className= "w-full flex justify-between gap-7">
      <form  className=" w-1/2 flex flex-col gap-y-4">
          <h4 className="font-medium text-xl capitalize">shipping information</h4>
          
          <div >
            <label for="name" className="label">
              <span className="label-text capitalize">first name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full "
              value=""
            />
          </div>
          <div className="">
            <label for="address" className="label">
              <span className="label-text capitalize">address</span>
            </label>
            <input
              type="text"
              name="address"
              className="input input-bordered w-full"
              value=""
            />
          </div>
          <div className="mt-4">
            <button onClick={handle_btn} className="btn btn-primary btn-block">
              place your order
            </button>
          </div>
        </form>

        <div className="card bg-base-200 w-1/2">
          <div className="card-body">
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
              <span>Subtotal</span>
              <span className="font-medium"></span>
            </p>
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
              <span>Shipping</span>
              <span className="font-medium"></span>
            </p>
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
              <span>Tax</span>
              <span className="font-medium"></span>
            </p>
            <p className="flex justify-between text-sm mt-4 pb-2">
              <span>Order Total</span>
              <span className="font-medium"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
