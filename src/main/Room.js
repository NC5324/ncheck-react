import { useParams } from 'react-router-dom'
import { AddButton, Button } from '../ui-components'
import React from 'react'

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
            <main style={{backgroundColor: '#203B4E', flex: '1 0 auto'}}/>
        </div>
    )
}

export default Room
