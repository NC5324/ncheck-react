import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { selectRoom } from './actions'

const RoomListItemContainer = styled.div`
  margin: 5px;

  background: ${ props => props.isSelected ? '#203B4E' : '#1D3240' };
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

  width: 80px;
  height: 80px;
  margin: auto 0;
`

function RoomListItem({ id, onSelect, isSelected }) {
    return (
        <RoomListItemContainer  onClick={() => onSelect(id)} isSelected={isSelected(id)}>
            <Thumbnail/>
            <RoomListItemDetails>
                <h3 className={"opacity-87"}>My room title #{id}</h3>
                <h4 style={{display: 'flex'}}>
                    <span className={"opacity-60"} style={{marginRight: 10}}>Upcoming: something</span>
                    <span style={{marginLeft: 'auto', color: '#FF7070', opacity: 1}}>
                        dd/mm/yyyy
                    </span>
                </h4>
                <h4 className={"opacity-87"} style={{marginTop: 'auto', display: 'flex'}}>
                    <span style={{marginRight: 10}}>Members:</span>
                    <span style={{marginLeft: 'auto'}}>NC5324, ed, vitaliy</span>
                </h4>
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
