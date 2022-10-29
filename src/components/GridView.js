import React from 'react'
import styled from 'styled-components'
import GridProduct from './GridProduct'
import { useGlobalContext } from '../context'

const GridView = () => {
  const { productsState } = useGlobalContext()
  return (
    <Wrapper>
      <div className='products-container'>
        {productsState.map((e) => {
          return <GridProduct key={e.id} e={e} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
