import React from 'react'
import styled from 'styled-components'
import { products } from '../constant'
import { FaCheck } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Filters = () => {
  const { filterState, dispatchFilter } = useGlobalContext()
  const temp = []
  for (let color of products) {
    temp.push(...color.colors)
  }
  const distinctColor = [...new Set(temp)]

  const colorID = Array.from(Array(distinctColor.length).keys())

  return (
    <Wrapper>
      <div className='form-control'>
        <input
          type='text'
          className='search-input'
          value={filterState.search}
          placeholder='Search'
          onChange={(e) =>
            dispatchFilter({ type: 'SEARCH', value: e.target.value })
          }
        />
      </div>
      <div className='form-control'>
        <h5>Category</h5>
        <button
          className={filterState.categories.length === 0 ? 'active' : ''}
          onClick={() => dispatchFilter({ type: 'CATEGORY', value: '' })}
        >
          All
        </button>
        {[...new Set(products.map((item) => item.category))].map((e, i) => {
          return (
            <button
              key={i}
              onClick={() => dispatchFilter({ type: 'CATEGORY', value: e })}
              className={filterState.categories.includes(e) ? 'active' : ''}
            >
              {e}
            </button>
          )
        })}
      </div>
      <div className='form-control'>
        <label htmlFor='company'>
          <h5>Company</h5>
        </label>
        <select
          id='company'
          name='company'
          className='company'
          style={{ textTransform: 'capitalize' }}
          value={filterState.company}
          onChange={(e) =>
            dispatchFilter({ type: 'COMPANY', value: e.target.value })
          }
        >
          <option value=''>All</option>
          {[...new Set(products.map((item) => item.company))].map((e, i) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            )
          })}
        </select>
      </div>
      <div className='form-control'>
        <h5>Color</h5>
        <div className='colors'>
          <button
            className={
              filterState.color.length === 0 ? 'all-btn active' : 'all-btn'
            }
            onClick={(e) => {
              dispatchFilter({
                type: 'COLOR',
                value: '',
              })
            }}
          >
            All
          </button>
          {distinctColor.map((e, i) => {
            return (
              <button
                id={colorID[i]}
                className='color-btn'
                style={{ background: `${e}` }}
                key={i}
                onClick={() => {
                  dispatchFilter({
                    type: 'COLOR',
                    value: e,
                  })
                }}
              >
                {filterState.color.includes(e) ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className='form-control'>
        <h5>Price</h5>
        <p>${filterState.price / 100}</p>
        <input
          type='range'
          value={filterState.price}
          onChange={(e) =>
            dispatchFilter({ type: 'PRICE', value: e.target.value })
          }
          min='0'
          max={Math.max(...products.map((o) => o.price))}
        ></input>
      </div>
      <div className='shipping'>
        <label htmlFor='freeship'>Free Shipping</label>
        <input
          type='checkbox'
          checked={filterState.freeShip}
          onChange={() => dispatchFilter({ type: 'SHIP' })}
        />
      </div>
      <button
        className='clear-btn'
        onClick={() => dispatchFilter({ type: 'DELETE' })}
      >
        Clear Filter
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    text-align: left;
    text-transform: capitalize;
    column-gap: 0.1rem;
    font-size: 1rem;
    max-width: 150px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
