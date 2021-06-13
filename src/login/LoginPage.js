import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const LoginFormBackground = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 0 auto;
  max-width: calc(100vw - 60px);

  margin: 10% 5px 5%;
  padding: 10% 11% 5%;
  
  background: #1A2A34;
  
  border-radius: 5px;

  @media screen and (max-width: 900px) {
    max-width: 100vw;
  }
`

const Brand = styled.h1`
  font-size: 80px;
  @media screen and (max-width: 900px) {
    font-size: 60px;
  }
`

const LoginPage = () => {
    return (
        <LoginFormBackground>
            <Brand>NCheck</Brand>
            <LoginForm/>
        </LoginFormBackground>
    )
}

export default LoginPage
