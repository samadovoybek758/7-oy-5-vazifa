import React, { useContext, useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { http } from '../axios'
import { CartContex } from '../App'


function Details() {
  const params = useParams()
  const {id} = params
  const [product, setProduct] = useState({});
  const [color, setColor] = useState('');
  const [count,setCount] = useState(1);
  const{cart,setCart} = useContext(CartContex)

  useEffect(() =>{
    http.get(`products/${id}`)
    .then(data =>{
      setProduct(data.data.data)
      setColor(data.data.data.attributes.color[0])
      console.log(data.data.data);
    })
    .catch(err =>{
      console.log(err);
    })
  },[cart])

  function toCart(e) {
    e.preventDefault()
    let data = {
      count : Number(count),
      color : color,
      id : product.id,
      data : product
    }

    let copied= [...cart];

    let isExist = copied.find(function (v) {
      return v.id == data.id && color == v.color
    })

    if (!isExist) {
      copied = [...cart,data]
    }else{
      copied = copied.map(function (value) {
        if (value.id == data.id && value.color == color) {
          value.count == Number(value.count)
          value.count += Number(data.count)
        }
      })
    }
    setCart(copied)
    localStorage.setItem('cart',JSON.stringify(copied))
  }
  
  return (
    <div className='container flex max-w-[1200px] mx-auto flex-row'>
        {
          product.id  && <>
             <div className='font-sans mx-auto gap-8 continer flex max-w-[973px] flex-row'>
              <img className='w-[512px] h-[384px] rounded-md' src={product.attributes.image} alt="" />
              <div>
                <h1 className='text-3xl font-bold capitalize'>{product.attributes.title}</h1>
                <h4 className='text-xl mt-2 text-gray-400 font-bold'>{product.attributes.company}</h4>
                <p className='mt-3 text-xl'>${product.attributes.price}</p>
                <p className='w-[455px] mt-6 text-gray-600 text-base'>{product.attributes.description}</p>
                <p className='mt-4 text-blue-950 text-2xl font-bold'>colors</p>

                <div className='flex gap-3 mt-3'>
                  
                 {
                  
                    product.attributes.colors.length > 0 &&
                    product.attributes.colors.map((Pcolor,index) =>{
                      return (
                        <span key={index}
                         style = {{
                          backgroundColor: Pcolor,
                          border:
                          color == Pcolor ? '3px solid black' : 'none',
                        }}
                        className={'block w-5 h-5 rounded-full cursor-pointer'}
                        onClick={() =>{setColor(Pcolor)}}>
                          
                        </span>
                      )
                    })
                  }
                </div>
                <select value={count} onChange={(e) =>{setCount(e.target.value)}} className=' w-[319px] mt-3 border border-solid border-purple-800 py-3 px-3 rounded-md'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  
                </select>
                <button onClick={toCart} className='block mt-7 px-4 py-2 font-sans rounded-md bg-purple-700 text-gray-300 border-none'>Add TO BAG</button>
              </div>
          </div>
          </>
        }
    </div>
  )
}

export default Details