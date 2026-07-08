import { useRef } from "react"
import Product_context from "./Product_context"


const Product_provider = ({children}) => {

    const productsref = useRef([
  {
    id:1,
    title:"Laptop",
    price:50000
  },
  {
    id:2,
    title:"Mobile",
    price:20000
  }
])
  return (
   <Product_context.Provider value={{productsref}}>
{children}
   </Product_context.Provider>
  )
}

export default Product_provider
