import React from 'react'
import styled from 'styled-components'
import background from '../assets/login.png'

import { connect } from 'react-redux'

const LoginFormBackground = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 0 auto;
  max-width: calc(100vw - 60px);

  margin: 10% 3% 5%;
  padding: 10% 11% 5%;
  
  background: #1A2A34;
  
  border-radius: 5px;
`

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 0 0 400px;
  width: 100%;

  margin: auto auto 60px;
  padding: 20px 30px;
  
  background: #1D3240;
  
  border-radius: 5px;
`

const LoginFormContent = styled.form`
  display: flex;
  flex-direction: column;
  
  flex: 1 0 auto;
  width: 100%;
  
  padding: 40px 30% 0 0;
  
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;
`

const Label = styled.label`
  margin-bottom: 5px;
  opacity: 0.87;
`

const Input = styled.input`
  padding: 15px;
  margin-bottom: 10px;
  
  outline: #A3C8FF;
  border: none;
  border-radius: 5px;

  font-size: 16px;

  background: #171F25;
  color: white;
`

const LoginButton = styled.button`
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  
  outline: none;
  border: none;
  border-radius: 5px;
  
  background-color: #467C46;
  &:hover {
    background-color: #417341;
  };
  color: white;
  
  cursor: pointer;
`

const Brand = styled.h1`
  font-size: 80px;
`

const Login = () => {
    return (
        <LoginFormBackground>
            <Brand>NCheck</Brand>
            <LoginFormContainer>
                <LoginFormContent>
                    <h1 style={{
                        marginBottom: 20
                    }}>Welcome back!</h1>
                    <Label htmlFor={"in-username"}>Username</Label>
                    <Input id={"in-username"}/>
                    <Label htmlFor={"in-password"}>Password</Label>
                    <Input type={"password"} id={"in-password"}/>
                    <span style={{
                        color: '#A3C8FF'
                    }}>Forgot your password?</span>
                </LoginFormContent>
                {/*<Link to={"/rooms"}>*/}
                {/*    <LoginButton onClick={() => window.location.href="/rooms"}>Login</LoginButton>*/}
                {/*</Link>*/}
                <span style={{
                    opacity: 0.30
                }}>Need an account? Register
                    </span>
            </LoginFormContainer>
        </LoginFormBackground>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
