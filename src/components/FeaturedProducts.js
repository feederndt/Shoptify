import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Product from './Product'
import { products } from '../constant'

const FeaturedProducts = () => {
  const first3 = products.slice(0, 3)
  return (
    <Wrapper>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='featured section-center'>
        {first3.map((e) => {
          return <Product e={e} key={e.id} />
        })}
      </div>

      <button className='btn'>
        <Link to='/products'>All Products</Link>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding-bottom: 5rem;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
