import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import SharedLayout from './pages/SharedLayout'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import CartPage from './pages/CartPage'
import SingleProductPage from './pages/SingleProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:id' element={<SingleProductPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
