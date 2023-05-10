//import { useState } from 'react'
function SearchBar({ searchInput, setSearchInput, inStock, setInStock }) {
  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleChangeCheck = (e) => {
    setInStock(e.target.checked)
  }

  return (
    <>
      <label>Search</label>
      <input value={searchInput} name="name" type="text" onChange={handleChangeSearch} />
      <label>Only show products in stock</label>
      <input checked={inStock} name="name" type="checkbox" onChange={handleChangeCheck} />
    </>
  )
}

export default SearchBar
