import React from 'react'
import styled from 'styled-components'
import SettingsNav from './SettingsNav'
import { Button } from '../ui-components'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const SettingsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 0 auto;
  max-width: 1440px;
  height: 100vh;

  margin: auto;

  position: relative;
`

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);

  margin: 5px 5px 0;
  background: #1A2A34;
  border-radius: 5px;
  box-shadow: #121212 0 0 6px;
  padding: 10px;
`

const SettingsContainer = styled.div`
  display: flex;
  height: 100%;
`

const AccFooter = styled.div`
  display: flex;
  height: 80px;
  margin: 10px 5px;
  
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

function SettingsPage({ currentUser, settingsArray }) {
    const history = useHistory()
    return (
        <SettingsPageWrapper>
            <SettingsWrapper>
                <div style={{display: 'flex'}}>
                    <h1>Settings</h1>
                    <Button style={{marginLeft: 'auto'}} onClick={() => {
                        history.push("/rooms")
                    }}>X</Button>
                </div>
                <SettingsContainer>
                    <SettingsNav settingsArray={settingsArray}/>
                </SettingsContainer>
            </SettingsWrapper>
            <AccFooter>
                <Avatar/>
                <h3 style={{margin: 'auto 10px'}}> { currentUser.username.toLocaleUpperCase() } </h3>
                <Button style={{marginLeft: 'auto'}}>SETTINGS</Button>
            </AccFooter>
        </SettingsPageWrapper>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
