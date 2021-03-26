import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export default function Square({data, stateHandler}) {
    const { user, setUser } = useContext(UserContext);

    const {img, id, discovered, animation } = data
    const {cards, setCards} = stateHandler
    const getOpened = ()=> { return cards.filter(card => card.opened === true)}

    const checkPair = () => {
        let openedCards = getOpened()
        if(openedCards.length === 2) {
            if(openedCards[0].img === openedCards[1].img && openedCards[0].id !== openedCards[1].id) {
                //add
                setCards([...cards.map(card => card.img === img ? Object.assign(card, {discovered: true, opened: false}) : card)])
                //add to score
                setUser({...user, hitsInRow: user.hitsInRow+1, movements: user.movements+1})
            } else {
                //hide again
                setTimeout(()=>{
                    setCards([...cards.map(card => card.opened === true ? Object.assign(card, {animation: 'out'}) : card)])
                    setTimeout(()=> {
                        setCards([...cards.map(card => card.opened === true ? Object.assign(card, {opened: false, animation: 'closed'}) : card)])
                    },400)
                },1400)
                //score
                setUser({...user, movements: user.movements+1, hitsInRow: 0})
            }

        }
    }
    
    const handleClick = (e)=> {
        e.preventDefault()
        //prenvet open >2 boxes
        if(getOpened().length === 2) {return 0}
        //open the box
        if(!discovered) {
            setCards([...cards.map(card => card.id === id ? Object.assign(card, {opened: true, animation: 'in'}) : card)])
            setTimeout(() => {
                setCards([...cards.map(card => card.id === id ? Object.assign(card, {animation: 'opened'}) : card)])
            }, 400);
            checkPair()
        }
    }

  
    return (
        <div onClick={handleClick} className="square" >
            <div className="details">
                <div className="bubble-w bwo"></div>
                <div className="bubble-w bwt"></div>
            </div>
            <div className="icon">
                <img className={`square-image ${animation} ${!!discovered && 'discovered'}`} id={id} src={img} alt="an animal in the game"/>
            </div>
        </div>
    )
}

