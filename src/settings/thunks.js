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
    const { selectedFile } = getState().file
    try {
        dispatch(updatingUserDetails())

        const formData = new FormData()
        formData.append("id", request.id)
        formData.append("username", request.username)
        formData.append("newUsername", request.newUsername)
        formData.append("password", request.password)
        formData.append("file", selectedFile)

        const response = await fetch('http://localhost:8080/api/settings/user', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + jwt
            },
            body: formData
        })

        const data = await response.json()
        console.log("new user data", data)

        const pic = await fetch(`http://${data['avatarPath']}`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        })
        console.log(pic)

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
