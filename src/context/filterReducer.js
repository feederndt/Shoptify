import { products } from '../constant'

export const reducerFilter = (state, action) => {
  switch (action.type) {
    case 'SORT':
      return { ...state, sort: action.value }

    case 'SEARCH':
      return { ...state, search: action.value }
    case 'CATEGORY':
      return {
        ...state,
        categories:
          action.value.length === 0
            ? []
            : state.categories.includes(action.value)
            ? state.categories.filter((item) => item !== action.value)
            : [...state.categories, action.value],
      }
    case 'COMPANY':
      return {
        ...state,
        company: action.value,
      }
    case 'COLOR':
      return {
        ...state,
        color:
          action.value.length === 0
            ? []
            : state.color.includes(action.value)
            ? state.color.filter((item) => item !== action.value)
            : [...state.color, action.value],
      }
    case 'PRICE':
      return { ...state, price: action.value }
    case 'SHIP':
      return { ...state, freeShip: !state.freeShip }
    case 'DELETE':
      return {
        ...state,
        sort: '',
        search: '',
        categories: [],
        company: '',
        color: [],
        price: Math.max(...products.map((o) => o.price)),
        freeShip: false,
      }
    default:
      return state
  }
}
