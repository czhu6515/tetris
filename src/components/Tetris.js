import React from 'react'

import {Stage, Cell, StartButton, Display} from './'
import {createStage} from '../gameHelpers'

const Tetris = () => {

    return (
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text='Score'/>
                    <Display text='Rows'/>
                    <Display text='Level'/>
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris