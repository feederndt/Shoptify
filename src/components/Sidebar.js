import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../constant'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSideBarOpen, setSideBar } = useGlobalContext()
  return (
    <SidebarContainer>
      <div className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-header'>
          <img src={logo} alt='logo' />
          <button
            className='close-btn'
            onClick={() => {
              setSideBar(false)
            }}
          >
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  to={link.url}
                  onClick={() => {
                    setSideBar(false)
                  }}
                >
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='cart-btn-wrapper'>
          <Link to='/cart'>
            <CartButtons />
          </Link>
        </div>
      </div>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
