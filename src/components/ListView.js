import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const ListView = () => {
  const { productsState } = useGlobalContext()
  const [isShow, setShow] = useState(
    productsState.map((e) => {
      return { id: e.id, show: false }
    })
  )
  const showHandle = (id) => {
    return setShow(
      isShow.map((e) => {
        if (e.id === id) {
          return { ...e, show: !e.show }
        } else {
          return e
        }
      })
    )
  }
  return (
    <Wrapper>
      {productsState.map((e) => {
        return (
          <article key={e.id}>
            <img src={e.image} alt={e.name} />
            <div>
              <h4>{e.name}</h4>
              <p className='price'>${e.price / 100}</p>
              <p>
                {e.description.substring(
                  0,
                  isShow.filter((child) => child.id === e.id)[0].show
                    ? e.description.length
                    : 150
                )}
                <span onClick={() => showHandle(e.id)} className='span'>
                  {isShow.filter((child) => child.id === e.id)[0].show
                    ? 'hide'
                    : 'show more'}
                </span>
              </p>
              <button className='btn'>Detail</button>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  .span {
    cursor: pointer;
    color: var(--clr-primary-6);
  }
  .span:hover {
    text-decoration: underline;
  }
  h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
