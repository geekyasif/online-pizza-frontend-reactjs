import React, { useEffect, useState } from 'react'
import Product from './Product'

function Products() {

  const [products, setProducts] = useState([])

  const fetchedData = async () => {

    const res = await fetch('http://localhost:5000/api/products')
    const data = await res.json()
    setProducts(data)
  }

  useEffect( ()=>  {

    fetchedData()

  },[])



  return ( 
    <div className='container mx-auto grid grid-cols-4 gap-4 my-4'>
      {
        products?.map((product) => (
          <Product key={product._id} product={product}/>
        ))
      }
        
    </div>
  )
}

export default Products