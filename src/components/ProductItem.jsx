import { useState } from "react"

export default function ProductItem({name, price}) {

  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setCount((prev) => prev + 1);
    }, 1000);
  }
  return (
    <div>
      <h2>Product Name: {name}</h2>
      <p>Product Price: {price}</p>
      <p>Quantity: {count}</p>

      {/* conditional loading */}
      <button disabled={loading} onClick={() => handleClick()}>{loading ? "Adding to cart" : "Add to cart"}</button>
    </div>
  )
}
