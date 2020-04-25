import React from 'react';
import './Board.css';

import Picker from './Picker'
import Slot from './Slot'
import Message from './Message'

const emptyBoard = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','','']
]


const Board = () => {
    const [currentBoard, setCurrentBoard] = React.useState(emptyBoard)
    const [currentPlayer, setCurrentPlayer] = React.useState('Red')
    const [message, setMessage] = React.useState("Current Player: Red")
    const [gameOver, setGameOver] = React.useState(false)

    const addCoin = (column) => {
        if (!gameOver) {
            for (var i = 5; i >= 0; i--) {
                if (currentBoard[i][column] === '') {
                let newBoard = currentBoard
                newBoard[i][column] = currentPlayer
                setCurrentBoard(newBoard)
                if (checkForWin(newBoard) === true) {
                    setMessage("Game over, " + currentPlayer + " won!")
                    setGameOver(true)
                    return
                }

                if (boardFull(newBoard)){
                    setMessage("Game over, board full")
                    setGameOver(true)
                    return
                }
                nextPlayer()
                return
                }
            }
            console.log("woops, thats column is full")
        }
    }

    const nextPlayer = () => {
        if (currentPlayer === 'Red') {
            setMessage("Current Player: Yellow")
            setCurrentPlayer('Yellow')
        } else {
            setMessage("Current Player: Red")
            setCurrentPlayer('Red')
        }
    }

    const boardFull = (board) => {
        for (var y = 0; y <= 5; y++){
            for (var x = 0; x <= 6; x++){
                if (board[y][x] === ''){
                    return false
                }
            }

        }
        return true
    }

    const checkForWin = (board) => {
        // horizonal
        for (var y = 0; y <= 5; y++) {
            for (var x = 0; x <= 2; x++) {
                if (board[y][x] != '' && board[y][x] === board[y][x+1] && board[y][x+1] === board[y][x+2] && board[y][x+2] === board[y][x+3]) {
                    console.log("horizontal")
                    return true
                }
            }
        }
        
        // vertical
        for (var x = 0; x <= 6; x++) {
            for (var y = 0; y <= 2; y++) {
                if (board[y][x] != '' && board[y][x] === board[y+1][x] && board[y+1][x] === board[y+2][x] && board[y+2][x] === board[y+3][x]) {
                    console.log("vertical")
                    return true
                }
            }
        }

        // horizontal forwards
        for (var x = 0; x <= 3; x++) {
            for (var y = 3; y <= 5; y++) {
                if (board[y][x] != '' && board[y][x] === board[y-1][x+1] && board[y-1][x+1] === board[y-2][x+2] && board[y-2][x+2] === board[y-3][x+3]) {
                    console.log("forwards")
                    return true
                }
            }
        }

        // horizontal backwards
        for (var x = 0; x <= 3; x++) {
            for (var y = 0; y <= 2; y++) {
                if (board[y][x] != '' && board[y][x] === board[y+1][x+1] && board[y+1][x+1] === board[y+2][x+2] && board[y+2][x+2] === board[y+3][x+3]) {
                    console.log("backwards")
                    return true
                }
            }
        }

        return false
    }

    return(
        <div className="board">
            <Picker addCoin={addCoin}/>

            {currentBoard.map((row,i) => (
                <div className={"row " + i}>
                    {row.map((item, i2) => (
                        <Slot slotData={item}/>
                    ))}
                </div>
            ))}

            <Message message={message}/>
            
        </div>
    )
}

export default Board