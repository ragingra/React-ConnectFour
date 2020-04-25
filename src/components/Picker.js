import React from 'react';
import './Picker.css';

const board = ['','','','','','','']

const Picker = ({addCoin}) => {
    return(
        <div className="picker">
           {board.map((row,i) => (
               <div className="arrow" onClick={() => addCoin(i)}/>
           ))}
        </div>
    )
}

export default Picker