import { useState } from "react"

export default function ProductItem({name, price}) {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <h2>Product Name: {name}</h2>
      <p>Product Price: {price}</p>
      <p>Quantity: {count}</p>
      <button onClick={() => handleClick()}>Add to cart</button>
    </div>
  )
}
