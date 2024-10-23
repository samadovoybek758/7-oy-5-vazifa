import React, { useEffect, useRef, useState } from 'react'
import { http } from '../axios'
import { useNavigate } from 'react-router-dom'

function Products() {
  const [data, setData] = useState([])
  const nameRef = useRef();
  const categoryRef = useRef();
  const companyRef = useRef();
  const byRef = useRef();
  const priceRef = useRef()


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

  function sortData(e) {
    e.preventDefault()
    
    http.get(`products?search=${nameRef.current.value}&category=${categoryRef.current.value}&company=${companyRef.current.value}&order=${byRef.current.value}&price=${priceRef.current.value}`)
    .then(data =>{
      setData(data.data.data)
    })
    .catch(err =>{
      console.log(err);
    })
  }
  return (
    <div className='max-w-[1100px] mx-auto  text-center '>
      <div className='max-w-[1049px] mx-auto  bg-base-200 mb-5 px-8 py-4'>
        <div className='flex justify-between '>
        <div>
          <p>Search Products</p>
          <input ref={nameRef} className="input input-bordered input-sm" type="text" />
        </div>
        <div>
          <p>Select Category</p>
          <select ref={categoryRef} className='select select-bordered select-sm w-[234px]'>
            <option value="all">all</option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Kids">Kids</option>
            <option value="Sofas">Sofas</option>
            <option value="Beds">Beds</option>
          </select>
        </div>
        <div>
          <p>Select Company</p>
          <select ref={companyRef}  className='select select-bordered select-sm w-[234px]'>
            <option value="all">all</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
          </select>
        </div>
        <div>
          <p>Sort By</p>
          <select ref={byRef} className='select select-bordered select-sm w-[234px]'>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>
        </div>
       
       <div className='flex items-center justify-between mt-8 '>
        <div>
          <p>Price</p>
          <input ref={priceRef} className='input input-bordered input-sm' type="Number" />
        </div>

        <div className='flex flex-row gap-6'>
          <button onClick={sortData} className='btn btn-primary btn-sm w-[234px] text-white'>SEARCH</button>
          <button className='btn btn-accent btn-sm w-[234px] text-white'>RESET</button>
        </div>
       </div>


      </div>
       <div className='flex flex-wrap gap-7'>
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
    </div>
  )
}

export default Products