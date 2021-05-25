import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addRoom } from './actions'
import RoomListItem from './RoomListItem'

const RoomListContainer = styled.div`
  flex: 1 0 30%;
  margin: 5px 10px 0 0;
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

function RoomList({ rooms, onAddPressed }) {
    return (
        <RoomListContainer>
            <Heading>My rooms</Heading>
            <RoomsWrapper>
                { rooms.map(room => (
                    <Link to={`/main/${room.id}`}
                          style={{textDecoration: 'none'}}
                          key={`room-${room.id}`}>
                        <RoomListItem id={room.id}/>
                    </Link>
                ))}
            </RoomsWrapper>
            <div className={"add-button"}
                 onClick={() => onAddPressed('test')}>
                <span style={{margin: 'auto'}}>Add new room</span>
            </div>
        </RoomListContainer>
    )
}

const mapStateToProps = (state) => ({
    rooms: state.rooms
})

const mapDispatchToProps = (dispatch) => ({
    onAddPressed: title => dispatch(addRoom(title))
})


export default connect(mapStateToProps, mapDispatchToProps)(RoomList)
