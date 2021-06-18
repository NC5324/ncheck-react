import {
    updatingRoomSuccess,
    updatingUserDetails,
    updatingUserDetailsFailure,
    updatingUserDetailsSuccess
} from './actions'
import { logout } from '../login/actions'
import Room from '../payload/Room'

export const editUser = (request) => async(dispatch, getState) => {
    const { jwt } = getState().user
    try {
        dispatch(updatingUserDetails())
        const response = await fetch('http://localhost:8080/api/settings/user', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.json()
        if(data.error) {
            throw new Error("Something went wrong.")
        }
        dispatch(updatingUserDetailsSuccess(data.jwt, data.username))
        console.log('Edit success')
    } catch(err) {
        dispatch(updatingUserDetailsFailure())
        alert('Something went wrong. Try again.');
        //console.log(err)
    }
}

export const editPassword = (request) => async(dispatch, getState) => {
    const { jwt } = getState().user
    try {
        dispatch(updatingUserDetails())
        const response = await fetch('http://localhost:8080/api/settings/password', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.json()
        if(data.error) {
            throw new Error("Something went wrong.")
        }
        dispatch(logout())
        console.log('Edit success')
    } catch(err) {
        dispatch(updatingUserDetailsFailure())
        alert('Something went wrong. Try again.');
        //console.log(err)
    }
}

export const editRoom = (request) => async(dispatch, getState) => {
    const { jwt } = getState().user
    try {
        const response = await fetch('http://localhost:8080/api/settings/room', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const data = await response.json()
        if(data.error) {
            throw new Error("Something went wrong.")
        }
        dispatch(updatingRoomSuccess(new Room(data.id, data.name, data.items)))
        alert('Updated room successfully')
    } catch(err) {
        alert('An error occurred. Please try again.')
    }
}
