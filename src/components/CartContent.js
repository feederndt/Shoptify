import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import { useGlobalContext } from '../context'

const CartContent = () => {
  const { dispatchCart, cartState } = useGlobalContext()
  return (
    <Wrapper>
      <div className='section-center'>
        <CartColumns />
        <CartItem />
        <hr />
        <div className='link-container'>
          <button className='link-btn btn'>
            <Link to='/products' style={{ color: 'white' }}>
              Continue Shopping
            </Link>
          </button>
          <button
            className='clear-btn btn'
            onClick={() => dispatchCart({ type: 'CLEAR' })}
          >
            Clear Cart
          </button>
        </div>
        <CartTotals />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: calc(100vh - 10rem);
  margin-top: 3rem;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
