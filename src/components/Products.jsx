import ProductItem from './ProductItem'
import { useState } from 'react';

const products = [
  {
    name: "ASUS",
    Price: 100000
  },
  {
    name: "Acer",
    Price: 150000
  }
];

export default function Products() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  return (
    loading ? "Loading" :
      <div>
        {products.map((product, index) => {
          return <ProductItem key={index} name={product.name} price={product.Price} />
        })}
      </div>
  )
}

