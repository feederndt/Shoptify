import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs'

const GridProduct = ({ e }) => {
  return (
    <Wrapper>
      <article key={e.id}>
        <div className='container'>
          <img src={e.image} alt={e.name} />
        </div>

        <footer>
          <Link to={`/products/${e.id}`} className='namePro'>
            <h5>{e.name}</h5>
          </Link>

          <p style={{ textAlign: 'right' }}>${e.price / 100}</p>
        </footer>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  .namePro {
    color:color:var(--clr-primary-5);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .cartBtn:hover {
    cursor:pointer;
    color:var(--clr-primary-5);
  }
  
  }
  footer {
    margin-top: 1rem;
    display: grid;
    grid-template-columns:4fr 1fr;
    align-items: center;
  }
  footer h5{
   margin-bottom: 0;
    font-weight: 500;
    font-size:1.1rem;
    
  }
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer h5:hover {
   text-decoration: underline;
   cursor: pointer;
  }
  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default GridProduct
