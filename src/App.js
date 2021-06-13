import styled from 'styled-components'
import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login/LoginPage'
import Main from './main/MainPage'
import { connect } from 'react-redux'

const AppContainer = styled.div`  
  display: flex;

  max-width: 1440px;
  height: 100vh;
  margin: auto;
  
  background: #171F25;
  color: white;
`

function App({ loggedIn }) {
  return (
      <AppContainer>
          <Switch>
              <Route exact path="/">
                  { loggedIn ? <Redirect to={"/rooms"}/> : <Login/>}
              </Route>
              <Route path="/rooms">
                  { loggedIn ? <Main/> : <Redirect to={"/"}/> }
              </Route>
          </Switch>
      </AppContainer>
  );
}

const mapStateToProps = (state) => ({
    loggedIn: state.user.success,
})

const mapDispatchToProps = (dispatch) => ({

})

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App))
