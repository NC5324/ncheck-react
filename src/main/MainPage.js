import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import RoomList from './RoomList'
import Room from './Room'
import { Button } from '../ui-components'
import './MainPage.css'
import NewRoomForm from './NewRoomForm'
import NewItemForm from './NewItemForm'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 100px);
`

const AccFooter = styled.div`
  display: flex;
  height: 80px;
  margin: 10px 5px 5px;
  
  background: #1A2A34;
  border-radius: 5px;
  box-shadow: #121212 0 0 6px;
  padding: 10px;
`

const Avatar = styled.div`
  background-color: #A3C8FF;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: auto 5px;
`


const MainPage = ({ currentUser }) => {
    const history = useHistory()

    return (
        <div className={"wrapper"}>
            <Wrapper>
                <RoomList/>
                <Switch>
                    <Route exact path={"/room"}>
                        <Room title={"Please select a room"}/>
                    </Route>
                    <Route exact path={"/room/:id"}>
                        <Room/>
                    </Route>
                </Switch>
            </Wrapper>
            <AccFooter>
                <Avatar/>
                <h3 style={{margin: 'auto 10px'}}>{ currentUser.username.toLocaleUpperCase() }</h3>
                <Button style={{marginLeft: 'auto'}} onClick={() => history.push("/settings")}>SETTINGS</Button>
            </AccFooter>
            <NewRoomForm/>
            <NewItemForm/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
