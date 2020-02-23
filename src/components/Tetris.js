import React, {useState} from 'react'

import {Stage, StartButton, Display} from './'

// styled componets
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

// custom hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player] = usePlayer()
    const [stage, setStage]  = useStage(player)

    console.log('re-render')
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text='GameOver' />
                    ) : (
                    <div>
                        <Display text='Score'/>
                        <Display text='Rows'/>
                        <Display text='Level'/>
                    </div>
                    )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris