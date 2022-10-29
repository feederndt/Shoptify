import React, {
  useContext,
  useState,
  useReducer,
  useCallback,
  useEffect,
} from 'react'
import { products } from '../constant'
import { reducerFilter } from './filterReducer'
import { cartReducer } from './cartReducer'

const GlobalContext = React.createContext()

const initFilterState = {
  sort: '',
  search: '',
  categories: [],
  company: '',
  color: [],
  price: Math.max(...products.map((o) => o.price)),
  freeShip: false,
}

const initCartState = [
  {
    id: 'recZkNf2kwmdBcqd0',
    price: 25999,
    color: '#ff0000',
    quantity: 3,
  },
  {
    id: 'recEHmzvupvT8ZONH',
    price: 25999,
    color: '#ffb900',
    quantity: 5,
  },
]

const Provider = ({ children }) => {
  const [productsState, setProductsState] = useState(products)
  const [isGridMode, setGridMode] = useState(true)
  const [isSideBarOpen, setSideBar] = useState(false)
  //cartReducer
  const [cartState, dispatchCart] = useReducer(cartReducer, initCartState)

  //filterReducer
  const [filterState, dispatchFilter] = useReducer(
    reducerFilter,
    initFilterState
  )
  //filter productss
  const filterProducts = useCallback(() => {
    const temp = [].concat(products)
    setProductsState(
      (filterState.sort === ''
        ? products
        : filterState.sort === 'prilow'
        ? temp.sort((a, b) => (a.price > b.price ? 1 : -1))
        : filterState.sort === 'prihigh'
        ? temp.sort((a, b) => (a.price > b.price ? 1 : -1)).reverse()
        : filterState.sort === 'nameaz'
        ? temp.sort((a, b) => (a.name > b.name ? 1 : -1))
        : filterState.sort === 'nameza'
        ? temp.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse()
        : products
      ).filter(
        (product) =>
          product.name.includes(filterState.search) &&
          (filterState.categories.length === 0
            ? 1
            : filterState.categories.includes(product.category)) &&
          (filterState.company.length === 0
            ? 1
            : product.company === filterState.company) &&
          (filterState.color.length === 0
            ? 1
            : filterState.color.some((r) => product.colors.indexOf(r) >= 0)) &&
          product.price <= filterState.price &&
          (filterState.freeShip ? product.shipping === true : 1)
      )
    )
  }, [filterState])

  useEffect(() => {
    filterProducts()
  }, [filterProducts])

  return (
    <GlobalContext.Provider
      value={{
        productsState,
        isGridMode,
        setGridMode,
        dispatchFilter,
        filterState,
        isSideBarOpen,
        setSideBar,
        cartState,
        dispatchCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { Provider }

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
