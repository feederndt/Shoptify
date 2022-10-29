import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ cart, setCart }) => {
  return (
    <Wrapper>
      <button
        onClick={() =>
          cart.quantity === 1
            ? setCart((state) => {
                return { ...state, quantity: 1 }
              })
            : setCart((state) => {
                return { ...state, quantity: state.quantity - 1 }
              })
        }
      >
        <FaMinus />
      </button>
      <h2>{cart.quantity}</h2>
      <button
        onClick={() =>
          setCart((state) => {
            return { ...state, quantity: state.quantity + 1 }
          })
        }
      >
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons
