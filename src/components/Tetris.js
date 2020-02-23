import React from 'react'

import {Stage, Cell, StartButton, Display} from './'

const Tetris = () => {

    return (
        <div>
            <Stage />
            <aside>
                <Display text='Score'/>
                <Display text='Rows'/>
                <Display text='Level'/>
            </aside>
            <StartButton />
        </div>
    )
}

export default Tetris