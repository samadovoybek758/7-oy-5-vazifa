import React, { useRef, useState } from "react";

function Checkout() {
  const nameRef = useRef()
  const locationRef = useRef()
  
 
  function handle_btn(ev) {
    ev.preventDefault()
    console.log(localStorage.getItem('addres'))

    let data = {
      name : nameRef.current.value,
      addres : locationRef.current.value,
      date : new Date()
    }

    let copied = [] 
    copied = JSON.parse(localStorage.getItem('addres')) || []
      copied.push(data)
    localStorage.setItem('addres', JSON.stringify(copied))
  }
  
  //   let localData = localStorage.getItem('addres')
  //   let copied = []
  //   if (localData) {
  //     copied = JSON.parse(localData)
  //     copied.push(data)
      
  //   }else{
  //     localStorage.setItem('addres', JSON.stringify(data))
  //   }

  //   localStorage.setItem('addres', JSON.stringify(copied))
  // }
  return (
    <div className="container max-w-[1200px] mx-auto">
      <div className="border-b border-base-300 pb-5 mb-6">
        <h1 className="text-3xl font-medium tracking-wider">
          Place Your Order
        </h1>
      </div>
 
      <div className= "w-full flex justify-between gap-7">
      <form  className=" w-1/2 flex flex-col gap-y-4">
          <h4 className="font-medium text-xl capitalize">shipping information</h4>
          
          <div >
            <label htmlFor="name" className="label">
              <span className="label-text capitalize">first name</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              className="input input-bordered w-full "
              defaultValue=""
            />
          </div>
          <div className="">
            <label htmlFor="address" className="label">
              <span className="label-text capitalize">address</span>
            </label>
            <input
              ref={locationRef}
              type="text"
              name="address"
              className="input input-bordered w-full"
              defaultValue=""
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
