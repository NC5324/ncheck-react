import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import RoomList from './RoomList'
import Room from './Room'
import { Button } from '../ui-components'
import './MainPage.css'


const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 100px);
`

const AccFooter = styled.div`
  display: flex;
  height: 80px;
  margin: 10px 0 5px;
  
  background: #1A2A34;
  border-radius: 5px;
  padding: 10px;
`

const Avatar = styled.div`
  background-color: #A3C8FF;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: auto 0;
`


const MainPage = () => {
    return (
        <div className={"wrapper"}>
            <Wrapper>
                <RoomList/>
                <Switch>
                    <Route exact path={"/main"}>
                        <Room title={"Please select a room"}/>
                    </Route>
                    <Route exact path={"/main/:id"}>
                        <Room/>
                    </Route>
                </Switch>
            </Wrapper>
            <AccFooter>
                <Avatar/>
                <h3 style={{margin: 'auto 10px'}}>NC5324</h3>
                <Button style={{marginLeft: 'auto'}}>SETTINGS</Button>
            </AccFooter>
        </div>
    )
}

export default MainPage
