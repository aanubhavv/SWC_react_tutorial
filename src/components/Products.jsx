import ProductItem from './ProductItem'

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
  return (
    <div>
      {products.map((product, index) => {
        return <ProductItem key={index} name={product.name} price={product.Price} />
      })}
    </div>
  )
}
