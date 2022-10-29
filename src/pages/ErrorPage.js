import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const ErrorPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/products')
    }, 1500)
  }, [])
  return (
    <Wrapper>
      <h3>Emty.....</h3>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: calc(100vh - 10rem);
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
