import React from 'react'
import styled from 'styled-components'
import CartAmountButtons from './CartAmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { products } from '../constant'
const CartItem = () => {
  const { cartState, dispatchCart } = useGlobalContext()
  return cartState.length === 0
    ? null
    : cartState.map((e, i) => {
        return (
          <Wrapper key={i}>
            <div className='title'>
              <img
                src={products.filter((ele) => ele.id === e.id)[0].image}
                alt={products.filter((ele) => ele.id === e.id)[0].name}
              />
              <div>
                <h5 className='name'>
                  {products.filter((ele) => ele.id === e.id)[0].name}
                </h5>
                <p className='color'>
                  Color:
                  <span style={{ background: `${e.color}` }}></span>
                </p>
              </div>
            </div>
            <div className='price'>$ {e.price / 100}</div>
            <div className='amount-btns'>
              <CartAmountButtons item={e} />
            </div>
            <p className='subtotal'>
              <b>$ {(e.price * e.quantity) / 100}</b>
            </p>
            <button
              className='remove-btn'
              onClick={() => dispatchCart({ type: 'REMOVE', value: e.id })}
            >
              <FaTrash />
            </button>
          </Wrapper>
        )
      })
  // <Wrapper>

  //   <div className='title'>
  //     <img src={products[0].image} alt={products[0].name} />
  //     <div>
  //       <h5 className='name'>{products[0].name}</h5>
  //       <p className='color'>
  //         Color:{' '}
  //         <span style={{ background: `${products[0].colors[0]}` }}></span>
  //       </p>
  //     </div>
  //   </div>
  //   <div className='price'>{products[0].price}</div>
  //   <div className='amount-btns'>
  //     <CartAmountButtons />
  //   </div>
  //   <p className='subtotal'>{products[0].price}</p>
  //   <button className='remove-btn'>
  //     <FaTrash />
  //   </button>
  // </Wrapper>
}

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default CartItem
