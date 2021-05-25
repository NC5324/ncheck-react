import styled from 'styled-components'
import React from 'react'
import LoginForm from './login/LoginForm'

const AppContainer = styled.div`  
  display: flex;

  max-width: 1440px;
  height: 100vh;
  margin: auto;
  
  background: #171F25;
  color: white;
`

function App() {
  return (
      <AppContainer>
          <LoginForm>

          </LoginForm>
      </AppContainer>
  );
}

export default App;
