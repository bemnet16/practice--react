import React,{useContext, useState} from 'react'
import CartContext from '../context/cart-context'
// import useHttp from '../hooks/use-http'

const ProductItem = props => {

     const cartCtx = useContext(CartContext)
    const [amounFood,setAmountFood] = useState(1)
    // const saveFood = useHttp()

    const addToCart = () => {
        cartCtx.cartDispatch({type:"ADD",val:{...props.product, amount:amounFood}, amount:amounFood})
        // cartCtx.resetProduct(props.product.id)

        // saveFood({
        //   url:" http://localhost:8000/foods",
        //   method:"POST",
        //   headers:{"Content-Type":"application/json"},
        //   body: {title:props.product.title,content:props.product.content,price:props.product.price}
        // })
    }

    const handleChange = (e) =>{
      setAmountFood((pre)=>{return +e.target.value})
    } 

    //  const handleRemoveCartItem = () =>{
    //     cartCtx.cartDispatch({type:"REMOVE",val:props.product})
    //     cartCtx.resetProduct(props.product.id)
    // }

  return (
    <div className='d-flex justify-content-between bg-light px-3 py-1 border border-2 border-info  w-75 mx-auto my-2 rounded-3 text-start' style={{height:"fit-content"}}>
      <div>
        <h5 className=''>{props.product.title}</h5>
        <p style={{fontStyle:"italic",color:"gray"}}>{props.product.content}</p>
        <h4 className='text-warning'>${props.product.price} </h4>
      </div>
        <div className='text-end p-2'>
          <input className='bg-light border border-info rounded-2 w-25 my-2 me-1 text-center' value={amounFood} 
          onChange={handleChange} type="number" min={1} />
          <br />
            <button  onClick={addToCart}  className='btn btn-info rounded-5 px-4 text-white py-1'>+ Add</button>
        </div>
    </div>
  )
}

export default ProductItem