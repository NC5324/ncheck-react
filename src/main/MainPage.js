import React from 'react'
import './MainPage.css'
import styled from 'styled-components'
import { Route, Switch, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import RoomList from './RoomList'
import { AddButton, Button } from '../ui-components'

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
  padding: 10px;`


const MainPage = () => {
    return (
        <div className={"wrapper"}>
            <Wrapper>
                <RoomList/>
                <Switch>
                    <Route exact path={"/main"}>
                        <div className={"section2"}>
                            <h1 className={"opacity-87"}>Please select a room</h1>
                        </div>
                    </Route>
                    <Route exact path={"/main/:id"}>
                        <Room/>
                    </Route>
                </Switch>
            </Wrapper>
            <AccFooter>
                <div style={{
                    backgroundColor: '#A3C8FF',
                    height: 50,
                    width: 50,
                    borderRadius: '50%',
                    margin: 'auto 0'
                }}/>
                <h3 style={{margin: 'auto 10px'}}>NC5324</h3>
                <Button style={{marginLeft: 'auto'}}>SETTINGS</Button>
            </AccFooter>
        </div>
    )
}

function Room() {
    let { id } = useParams();
    return (
        <div className={"section2"}>
            <header>
                <h1 className={"opacity-87"}>
                    This is room { id }
                </h1>
                <AddButton style={{marginLeft: 'auto'}}>ADD</AddButton>
                <Button style={{marginLeft: '10px'}}>SELECT</Button>
                <Button style={{marginLeft: '10px'}}>o o o</Button>
            </header>
            <main style={{backgroundColor: '#223F53', flex: '1 0 auto'}}/>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
