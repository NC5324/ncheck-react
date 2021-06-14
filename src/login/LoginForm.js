import React, { useState } from 'react'
import styled from 'styled-components'
import background from '../assets/login.png'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './thunks'

import { Input, InputLabel } from '../ui-components'

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
  
  padding: 40px 0 0 0;
  background: url(${background}) no-repeat right top;
  background-size: contain;
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

const Login = ({ onLoginPressed, loginSuccess }) => {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <LoginFormContainer>
            <LoginFormContent>
                <h1 style={{
                    marginBottom: 20
                }}>Welcome back!</h1>
                <InputLabel htmlFor={"in-username"}>Username</InputLabel>
                <Input id={"in-username"}
                       onChange={(ev) => {
                           setUsername(ev.currentTarget.value)
                       }}/>
                <InputLabel htmlFor={"in-password"}>Password</InputLabel>
                <Input type={"password"}
                       id={"in-password"}
                       onChange={(ev) => {
                           setPassword(ev.currentTarget.value)
                       }}/>
                <span style={{
                    color: '#A3C8FF'
                }}>Forgot your password?</span>
                <LoginButton onClick={async (ev) => {
                    ev.preventDefault()
                    await onLoginPressed(username, password)
                    if (loginSuccess) {
                        history.push("/rooms")
                    }
                }}>Login</LoginButton>
            </LoginFormContent>
            <span style={{
                opacity: 0.30
            }}>Need an account? Register
                    </span>
        </LoginFormContainer>
    )
}


const mapStateToProps = (state) => ({
    loginSuccess: state.user.success,
})

const mapDispatchToProps = (dispatch) => ({
    onLoginPressed: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
