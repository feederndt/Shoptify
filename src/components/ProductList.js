import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import { useGlobalContext } from '../context'

const ProductList = () => {
  const { isGridMode } = useGlobalContext()
  return isGridMode ? <GridView /> : <ListView />
}

export default ProductList
