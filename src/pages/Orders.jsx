import React, { useEffect, useState } from 'react'

function Orders() {
  const [data, setData] = useState([]);
 
  useEffect(() =>{
    let copy = localStorage.getItem('addres')
    if (copy) {
      setData(JSON.parse(copy));
    }
  },[])


  return (
    <div>
      <div className='border-b p-4 max-w-[1088px] mx-auto'>
        <h1 className=' text-3xl text-gray-500 font-mideum'>Your Orders</h1>
        <div className='flex flex-row justify-between'>
          <span>Name</span>
          <span>Addres</span>
          <span>Products</span>
          <span>Cost</span>
          <span>Date</span>
        </div>
        <div>
            {
              data.length > 0 && data.map(function (value, index) {
                return(
                  <div key={index} className='flex flex-row justify-between'>
                    <h1>{value.name}</h1>
                    <p>{value.addres}</p>
                    <div className='flex flex-row gap-3'>
                    <span>{new Date(value.date).toISOString().slice(11, 16)}</span>
                    <span>{new Date(value.date).toISOString().slice(0, 10)}</span>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Orders