import { useContext } from "react"
import Product_context from "./Product_context"


const Product_cards = () => {
 const {productsref} = useContext(Product_context)

 const data = productsref?.current ?? []
 return (
    <>


<div className="border w-50  m-5 ">

    {data.map((e,i)=>(
      <div key ={i} className="flex flex-col gap-4 w-25 justify-center p-5">
      <p className="border flex justify-center">{e.title}</p>
      <p  className="border">{e.price}</p>

      </div>
))}
</div>
  

   
    </>
  )
}

export default Product_cards
