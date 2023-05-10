import ProductRow from './ProductRow'

export default function ProductTable({
  products,
  setPtoducts,
  searchInput,
  setSearchInput,
  inStock,
  setInStock,
}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => {
              if (product.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return product
              } else if (product && inStock) {
                return product
              }
            })
            .map((product) => (
              <tr key={product.id}>
                <ProductRow product={product} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
