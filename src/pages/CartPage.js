import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CartContent } from '../components'
import { useGlobalContext } from '../context'

const CartPage = () => {
  const { cartState } = useGlobalContext()

  return cartState.length === 0 ? (
    <Wrapper className='page-100'>
      <div className='empty'>
        <h2>Your cart is empty</h2>
        <Link to='/products' className='btn'>
          fill it
        </Link>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <CartContent />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
