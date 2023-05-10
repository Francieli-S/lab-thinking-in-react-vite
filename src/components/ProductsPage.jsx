import { useState } from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData)
  const [searchInput, setSearchInput] = useState('')
  const [inStock, setInStock] = useState(false)

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        inStock={inStock}
        setInStock={setInStock}
      />
      <ProductTable
        products={products}
        setProducts={setProducts}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        inStock={inStock}
        setInStock={setInStock}
      />
    </div>
  )
}
