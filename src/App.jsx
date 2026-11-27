import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Lista de productos y servicios Wizard Tech" />
    </>
  )
}

export default App
