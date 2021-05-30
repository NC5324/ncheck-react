import styled from 'styled-components'
import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

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
      <div>

      </div>
      // <AppContainer>
      //     {/*<Router>*/}
      //     {/*    <div>*/}
      //     {/*        <ul>*/}
      //     {/*            <li>*/}
      //     {/*                <Link to="/home">Home</Link>*/}
      //     {/*            </li>*/}
      //     {/*            <li>*/}
      //     {/*                <Link to="/about">About</Link>*/}
      //     {/*            </li>*/}
      //     {/*            <li>*/}
      //     {/*                <Link to="/dashboard">Dashboard</Link>*/}
      //     {/*            </li>*/}
      //     {/*        </ul>*/}
      //     {/*        /!*<Switch>*!/*/}
      //     {/*        /!*    <Route exact path="/home">*!/*/}
      //     {/*        /!*        <Login>*!/*/}
      //     {/*        /!*        </Login>*!/*/}
      //     {/*        /!*    </Route>*!/*/}
      //     {/*        /!*    <Route path="/rooms">*!/*/}
      //     {/*        /!*        <Main>*!/*/}
      //     {/*        /!*        </Main>*!/*/}
      //     {/*        /!*    </Route>*!/*/}
      //     {/*        /!*    <Route path="/dashboard">*!/*/}
      //     {/*        /!*    </Route>*!/*/}
      //     {/*        /!*</Switch>*!/*/}
      //     {/*    </div>*/}
      //     {/*</Router>*/}
      // </AppContainer>
  );
}

export default hot(module)(App)
