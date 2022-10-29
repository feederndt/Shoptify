import React from 'react'
import { Navbar, Sidebar, Footer } from '../components'
import { Outlet } from 'react-router-dom'

export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}
