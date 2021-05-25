import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { selectRoom } from './actions'

const RoomListItemContainer = styled.div`
  min-height: 130px;
  margin: 5px;

  background: ${ props => props.isSelected ? '#223F53' : '#1D3240' };
  border-radius: 5px;
  padding: 10px;
  box-shadow: #121212 0 0 6px;

  display: flex;
  flex-flow: row wrap; 
`

const RoomListItemDetails = styled.div`
  flex: 1 0 auto;

  display: flex;
  flex-direction: column;

  padding: 0 10px;
`

const Thumbnail = styled.div`
  border-radius: 50%;
  background: #A3C8FF;

  width: 100px;
  height: 100px;
  margin: auto 0;
`

function RoomListItem({ id, onSelect, isSelected }) {
    return (
        <RoomListItemContainer  onClick={() => onSelect(id)} isSelected={isSelected(id)}>
            <Thumbnail/>
            <RoomListItemDetails>
                <h2 className={"opacity-87"}>My room title #{id}</h2>
            </RoomListItemDetails>
        </RoomListItemContainer>
    )
}

const mapStateToProps = (state) => ({
    isSelected: (id) => (state.rooms.find(x => x.id === id).selected)
})

const mapDispatchToProps = (dispatch) => ({
    onSelect: id => dispatch(selectRoom(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomListItem)
