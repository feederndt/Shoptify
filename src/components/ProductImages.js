import React from 'react'
import styled from 'styled-components'
import { products } from '../constant'

const ProductImages = ({ id }) => {
  return (
    <Wrapper>
      <img
        src={products.filter((e) => e.id === id)[0].image}
        alt='main'
        className='main'
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 700px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
  }
`

export default ProductImages
