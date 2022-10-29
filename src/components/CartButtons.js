import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const CartButtons = () => {
  const { cartState } = useGlobalContext()
  return (
    <Wrapper>
      <div className='cart-btn'>
        <div className='cart-container'>
          <span>Cart</span>
          <FaShoppingCart />
          <p className='cart-value'>{cartState.length}</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 110px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
`
export default CartButtons
