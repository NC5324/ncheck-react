import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addRoom } from './actions'
import RoomListItem from './RoomListItem'
import { loadRooms } from './thunks'

const RoomListContainer = styled.div`
  flex: 1 0 20%;
  margin: 5px 10px 0 5px;
  @media screen and (max-width: 900px) {
    margin: 5px 0 0 0;
  }

  background: #1A2A34;
  border-radius: 5px;
  padding: 10px;
  box-shadow: #121212 0 0 6px;

  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  height: 50px;
  padding: 5px;
`

const RoomsWrapper = styled.div`
  max-height: calc(100% - 110px);

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
`

function RoomList({ rooms, onAddPressed, startLoadingRooms, loadingRooms }) {
    useEffect(() => {
        startLoadingRooms(5)
    }, [])

    const loadingMessage = (
        <div style={{
            color: 'white' }}>
            Loading TODOS...
        </div>
    )

    const content = (
        <RoomListContainer>
            <Heading>My rooms</Heading>
            <RoomsWrapper>
                { rooms.map(room => (
                    <Link to={`/rooms/${room.id}`}
                          style={{textDecoration: 'none'}}
                          key={`room-${room.id}`}>
                        <RoomListItem room={room}/>
                    </Link>
                ))}
            </RoomsWrapper>
            <div className={"add-button"}
                 style={{marginTop: 'auto',
                     borderRadius: 5,
                     fontWeight: 'bolder',
                     boxShadow: '#121212 0 0 6px',
                     cursor: 'pointer'
                 }}
                 onClick={() => onAddPressed('test')}>
                <span style={{margin: 'auto'}}>Add new room</span>
            </div>
        </RoomListContainer>
    )
    return loadingRooms ? loadingMessage : content
}

const mapStateToProps = (state) => ({
    rooms: state.rooms.rooms,
    loadingRooms: state.rooms.loadingRooms
})

const mapDispatchToProps = (dispatch) => ({
    onAddPressed: title => dispatch(addRoom(title)),
    startLoadingRooms: userId => dispatch(loadRooms(userId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
