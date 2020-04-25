import React from 'react';
import './Coin.css';

const Coin = ({colour}) => {
    return(
        <div className={"coin " + colour}>
            <div className={"coin border-outer " + colour}>
              <div className={"coin border-inner1 " + colour}>
                <div className={"coin border-inner2 " + colour}></div>
              </div>
            </div>
        </div>
    )
}

export default Coin