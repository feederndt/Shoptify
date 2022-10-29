import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { products } from '../constant'

const CartTotals = () => {
  const { cartState } = useGlobalContext()
  const temp = []
  for (let cart of cartState) {
    temp.push(cart.id)
  }
  const distinctID = [...new Set(temp)]
  const listFree = products
    .filter((ele) => distinctID.includes(ele.id) === true)
    .filter((e) => e.shipping === true)
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            Subtotal :
            <span>
              $
              {cartState
                .map((item) => item.price * item.quantity)
                .reduce((prev, next) => prev + next) / 100}
            </span>
          </h5>
          <p>
            Shipping Fee :
            <span>
              {listFree.length === 0
                ? 'Free'
                : `$ ${(
                    listFree
                      .map((item) => (item.price * 3) / 100)
                      .reduce((prev, next) => prev + next) / 100
                  ).toFixed(2)}`}
            </span>
          </p>
          <hr />
          <h4>
            Order Total:
            <span>
              ${' '}
              {(
                cartState
                  .map((item) => item.price * item.quantity)
                  .reduce((prev, next) => prev + next) /
                  100 +
                listFree
                  .map((item) => (item.price * 3) / 100)
                  .reduce((prev, next) => prev + next) /
                  100
              ).toFixed(2)}
            </span>
          </h4>
        </article>
        <button className='btn'>CheckOut</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`

export default CartTotals
