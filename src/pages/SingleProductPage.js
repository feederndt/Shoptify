import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductImages, AddToCart } from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { products } from '../constant'
import ErrorPage from './ErrorPage'

const SingleProductPage = () => {
  const { id } = useParams()
  return products.filter((e) => e.id === id).length === 0 ? (
    <ErrorPage />
  ) : (
    <Wrapper style={{ marginBottom: '5rem' }}>
      <div className='section-center'>
        <Link to='/products' className='btn' style={{ marginTop: '5rem' }}>
          Back To Products
        </Link>
        <div className='product-center'>
          <ProductImages id={id} />
          <div>
            <h2>{products.filter((e) => e.id === id)[0].name}</h2>
            <h4 className='price'>{`$ ${
              products.filter((e) => e.id === id)[0].price / 100
            }`}</h4>
            <p className='desc'>
              {products.filter((e) => e.id === id)[0].description}
            </p>
            <p className='info'>
              <span>Category:</span>
              {products.filter((e) => e.id === id)[0].category}
            </p>
            <p className='info'>
              <span>Company:</span>
              {products.filter((e) => e.id === id)[0].company}
            </p>
            <p className='info'>
              <span>Free Ship:</span>
              {products.filter((e) => e.id === id)[0].shipping ? 'Yes' : 'No'}
            </p>
            <hr />
            <AddToCart
              id={id}
              colors={products.filter((e) => e.id === id)[0].colors}
              price={products.filter((e) => e.id === id)[0].price}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
