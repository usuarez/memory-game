import React, { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'

export default function Score() {
    const {user, setUser} = useContext(UserContext)
    let totalScore = user.gameScore,
        rowPoints = user.hitsInRow

    useEffect(() => {
        if(rowPoints === 1) {
            if(totalScore === 0) { setUser({...user, gameScore: 10})}
            else { setUser({...user, gameScore: user.gameScore+10})}
        }
        else if (rowPoints > 1) { setUser({...user, gameScore: (totalScore+(10*rowPoints)) }) } 
        
    }, [user.movements])
    return (
      <div className="container d-flex justify-content-center">
        <div className="textBox-kids big main-color">
          <div className="bubbles">
            <div className="bubble-w bwo"></div>
            <div className="bubble-w bwt"></div>
          </div>
          <div className="texts d-flex justify-content-center">
            <span className="d-flex align-items-center justify-content-center">
              <p className="text-w">Puntos</p>
              <div className="pl-5">
                <div className="textBox-kids inner complementary-color">
                  <div className="bubbles">
                    <div className="bubble-w bwo"></div>
                    <div className="bubble-w bwt"></div>
                  </div>
                  <div className="texts d-flex justify-content-center">
                    <span>{totalScore}</span>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
}
