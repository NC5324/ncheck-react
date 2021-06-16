import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui-components'
import SettingsForm from './SettingsForm'
import { useHistory } from 'react-router-dom'
import { login } from '../login/thunks'
import { connect } from 'react-redux'
import { logout } from '../login/actions'

const SettingsNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  /*test*/
  margin: 5% 5px auto 25%;
  
  flex: 0 1 300px;
`

const SettingsNavItem = styled(Button)`
  flex: unset;
  margin: 0 0 5px;
`

const testArr = [
    {
        title: 'PROFILE SETTINGS',
        path: '/settings'
    },
    {
        title: 'CHANGE PASSWORD',
        path: '/settings/password'
    },
    // {
    //     title: 'LOGOUT',
    //     path: '/'
    // }
]

function SettingsNav({settingsArray = testArr, onLogoutPressed}) {
    const history = useHistory()
    return (
        <>
            <SettingsNavContainer>
                { settingsArray.map(settings => (
                    <SettingsNavItem onClick={() => history.push(settings.path)}>
                        { settings.title }
                    </SettingsNavItem>))}
                <SettingsNavItem onClick={() => {
                    onLogoutPressed()
                    history.push('/')
                }}>
                    LOGOUT
                </SettingsNavItem>
            </SettingsNavContainer>
            <SettingsForm/>
        </>
    )
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    onLogoutPressed: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsNav)
