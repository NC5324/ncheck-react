import { useParams } from 'react-router-dom'
import { AddButton, Button } from '../ui-components'
import React from 'react'
import styled from 'styled-components'
import RoomItem from './RoomItem'

const ItemsWrapper = styled.main`
  max-height: 100%;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
`

function Room({ title }) {
    let { id } = useParams();
    return (
        <div className={"section2"}>
            <header>
                <h1 className={"opacity-87"}>{ title ? title : `This is room #${id}` }</h1>
                <AddButton style={{marginLeft: 'auto'}}>ADD</AddButton>
                <Button style={{marginLeft: '10px'}}>SELECT</Button>
                <Button style={{marginLeft: '10px'}}>o o o</Button>
            </header>
            <ItemsWrapper>
                { Array.from(Array(10)).map(() => <RoomItem/> )}
            </ItemsWrapper>
        </div>
    )
}

export default Room
