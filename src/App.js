import styled from 'styled-components'
import React from 'react'
import { hot } from 'react-hot-loader'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login/LoginPage'
import Main from './main/MainPage'
import { connect } from 'react-redux'
import SettingsPage from './settings/SettingsPage'

const AppContainer = styled.div`  
  display: flex;

  max-width: 1440px;
  height: 100vh;
  margin: auto;
  
  background: #171F25;
  color: white;
  
  position: relative;
`

const profileSettings = [
    {
        title: 'PROFILE SETTINGS',
        path: '/settings'
    },
    {
        title: 'CHANGE PASSWORD',
        path: '/settings/password'
    },
]

const roomSettings = [
    {
        title: 'ROOM SETTINGS',
        path: '/room-settings'
    },
    {
        title: 'ROOM MEMBERS',
        path: '/room-settings/members'
    },
]

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
              <Route path="/settings">
                  { loggedIn ? <SettingsPage settingsArray={profileSettings}/> : <Redirect to={"/"}/> }
              </Route>
              <Route exact path={`/room-settings`}>
                  { loggedIn ? <SettingsPage settingsArray={roomSettings}/> : <Redirect to={"/"}/> }
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
