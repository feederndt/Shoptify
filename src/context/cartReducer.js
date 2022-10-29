export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state.map((e) =>
        e.id === action.value ? { ...e, quantity: e.quantity + 1 } : e
      )
    case 'DECREASE':
      return state.map((e) =>
        e.id === action.value
          ? { ...e, quantity: e.quantity === 1 ? 1 : e.quantity - 1 }
          : e
      )
    case 'REMOVE':
      return state.filter((e) => e.id !== action.value)
    case 'ADDNEW':
      return state.filter(
        (e) => e.id === action.value.id && e.color === action.value.color
      ).length === 0
        ? [...state, action.value]
        : state.map((e) =>
            e.id === action.value.id && e.color === action.value.color
              ? { ...e, quantity: e.quantity + action.value.quantity }
              : e
          )
    case 'CLEAR':
      return []

    default:
      return state
  }
}
