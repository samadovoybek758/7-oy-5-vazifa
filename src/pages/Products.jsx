import React, { useEffect, useState } from 'react'
import { http } from '../axios'
import { useNavigate } from 'react-router-dom'

function Products() {
  const [data, setData] = useState([])

  useEffect(() =>{
    http.get('products')
    .then(data =>{
  
      setData(data.data.data)
    })
    .catch(err =>{
      console.log(err);
    })
  },[])

  const navigate = useNavigate();
  function handleCard(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div className='max-w-[1100px] mx-auto flex flex-wrap gap-7 text-center '>
        {
          data.length > 0 && data.map(function (value) {
            return (
              <div key={value.id}  onClick={() => {handleCard(value.id);}} className='cursor-pointer shadow-lg text-center p-4 rounded-md flex flex-col justify-center items-center'>
                  <img className='w-[307px] h-48 object-cover rounded-md' src={value.attributes.image} alt="" />
                  <h1 className='card-title capitalize tracking-wider mb-3 mt-3 '>{value.attributes.title}</h1>
                  <span className="text-gray-700 font-bold text-xl">${value.attributes.price}</span>
              </div>
            )
          })
        }
    </div>
  )
}

export default Products