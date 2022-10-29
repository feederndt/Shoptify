import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import { useGlobalContext } from '../context'

const AddToCart = ({ colors, id, price }) => {
  const [cart, setCart] = useState({ color: colors[0], quantity: 1, id })
  const { dispatchCart } = useGlobalContext()
  console.log(cart)
  return (
    <Wrapper>
      <div className='colors'>
        <span>Colors:</span>
        <div>
          {colors.map((e, i) => {
            return (
              <button
                style={{ background: `${e}` }}
                key={i}
                className='color-btn'
                onClick={() =>
                  setCart((state) => {
                    return { ...state, color: e }
                  })
                }
              >
                {cart.color === e ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons cart={cart} setCart={setCart} />
        <button
          className='btn'
          onClick={() =>
            dispatchCart({ type: 'ADDNEW', value: { ...cart, price: price } })
          }
        >
          Add to Cart
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
