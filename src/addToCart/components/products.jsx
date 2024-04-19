import React, {  useEffect, useState } from 'react'
import ProductItem from './productItem'
import useHttp from '../hooks/use-http'

const Products = () => {


    const [foods,setFoods] = useState([])
    const req = useHttp()

    useEffect(()=>{
        const fetchFood = async () => {
            const datas  = await req({url:"http://localhost:8000/foods"})
            setFoods(datas)
            
        }
        fetchFood()
    },[])

    return (
     <div className='container-fluid w-75 rounded-5 mt-3 text-center'>
        {
          !!foods &&  foods.map(product =>{
                return <ProductItem product={product} key={product.id}/>
            })
        }
    </div>
  )
}

export default Products