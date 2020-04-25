import React from 'react';
import './Slot.css';

import Coin from './Coin'

const Slot = ({slotData}) => {
    return(
        <div className="slot">
            <div className="slot-background"/>
            {slotData && <Coin colour={slotData}/>}
        </div>
    )
}

export default Slot