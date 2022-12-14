import React from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
const Sort = () => {
  const {
    isGridMode,
    setGridMode,
    productsState,
    filterState,
    dispatchFilter,
  } = useGlobalContext()
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          className={isGridMode ? 'active' : ''}
          onClick={() => setGridMode(true)}
        >
          <BsFillGridFill />
        </button>
        <button
          className={isGridMode ? '' : 'active'}
          onClick={() => setGridMode(false)}
        >
          <BsList />
        </button>
      </div>
      <p>{productsState.length} Products Found</p>
      <hr />
      <div>
        <label htmlFor='sort'>Sort By</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={filterState.sort}
          onChange={(e) =>
            dispatchFilter({ type: 'SORT', value: e.target.value })
          }
        >
          <option value=''>Default</option>
          <option value='prilow'>Price (Lowest)</option>
          <option value='prihigh'>Price (Highest)</option>
          <option value='nameaz'>Name (A-Z)</option>
          <option value='nameza'>Name (Z-A)</option>
        </select>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
