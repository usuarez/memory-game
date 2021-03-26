import React, { useContext, useEffect, useState } from 'react'
import Square from './Square'
import {v4 as uuid} from 'uuid'
import { randomInsert } from '../../helpers/randomInsert'
import { UserContext } from '../UserContext'

//easy
import dog from '../../assets/animals/dog.png'
import monkey from '../../assets/animals/monkey.png'
import panda from '../../assets/animals/panda.png'
import pig from '../../assets/animals/pig.png'
import shark from '../../assets/animals/shark.png'
import tiger from '../../assets/animals/tiger.png'
//medium
import bear from '../../assets/animals/bear.png'
import cat from '../../assets/animals/cat.png'
import duck from '../../assets/animals/duck.png'
//hard
import frog from '../../assets/animals/frog.png'
import lion from '../../assets/animals/lion.png'
import penguin from '../../assets/animals/penguin.png'
import CongratsModal from './CongratsModal'


export default function Board() {

    const {user, setUser} = useContext(UserContext)
    
    const difficultyBoxes = ()=> {
        let images = []
        if(user.difficult === 'easy'){
            images = [dog, monkey, panda, pig, shark, tiger, dog, monkey, panda, pig, shark, tiger]
        } else if (user.difficult === 'med') {
            images = [dog, monkey, panda, pig, shark, tiger, bear, cat, dog, monkey, panda, pig, shark, tiger, bear, cat]
        } else { //is hard
            images = [dog, monkey, panda, pig, shark, tiger, bear, cat, duck, frog, lion, penguin, dog, monkey, panda, pig, shark, tiger, bear, cat, duck, frog, lion, penguin]
        }
        return images
    }

    const createStorage = () => {
        localStorage.setItem('gameBoard', JSON.stringify(randomInsert(difficultyBoxes())))
        localStorage.setItem('difficult', JSON.stringify(user.difficult))
    }
    let gameDifficult = '',
        boxes = ''
    const loadStorage = () => {
        gameDifficult = JSON.parse(localStorage.getItem('difficult'))
        boxes = JSON.parse(localStorage.getItem('gameBoard'))
    }
    //create the storage
    if(!!localStorage.getItem('gameBoard') !== true) { createStorage() }
    loadStorage()

    
    
    //create initial state with all data
    const stateBuilder = (animation = 'in')=>{
        let arr = []
        boxes.forEach(box => {
            let newBox = {
                ...box,
                opened: false,
                discovered: false,
                animation: animation
            }
            arr.push(newBox)
        });    
        return arr
    }


    let initialState = stateBuilder('in')
    const [cards, setCards] = useState(initialState)
    
    const onStartGameAnimation = () => {
        loadStorage()
        setTimeout(() => {
            initialState = stateBuilder('out')
            setCards(initialState)
            setTimeout(() => {
                //animation none to prevent show all boxes onClick
                initialState = stateBuilder('none')
                setCards(initialState)
                //wait the animation ends to change
            }, 600);
            //wait 3 seconds to hidden
        }, 3000);
    }
   
        //start a new game
        const newGame = ()=> {
            //new order
            createStorage()
            loadStorage()
            initialState = stateBuilder('in')
            setCards(initialState)
            //save state to render
            onStartGameAnimation()
            //reset counters
            setUser({
                ...user,
                gameScore: 0,
                hitsInRow: 0,
                movements: 0
            })
        }

    //start a new game or animate out onload the game
    let openCardsNow = cards.filter( card => card.discovered === true ).length

    useEffect(() => {
        if(openCardsNow !== 0) { newGame() }           
        onStartGameAnimation()
    }, [])
    
    const [modal, setModal] = useState(false)
    useEffect(() => {
        //new game if difficulty change
        if(user.difficult !== gameDifficult ) { newGame() }
        //create a new box order when game is finished 
        if( user.movements !== 0 &&  openCardsNow === cards.length ) { 
            //open a congrats Modal
            setTimeout(() => {
                setModal(true)
            }, 1000);
        }
    }, [openCardsNow, gameDifficult])






    
    return (
        <>
            <div className={`row square-container ${(user.difficult === 'easy' ) ? `easy` : (user.difficult === 'med' ) ? `med` : 'hard' }`}>
                
                { cards.map(box => (
                    <div key={uuid()} className={`d-flex justify-content-center`} >
                        <Square data={box} stateHandler={{cards, setCards}} /> 
                    </div>
                ))
                }   
            </div>
            {(!!modal) ? <CongratsModal newGame={newGame} setModal={setModal} /> : null}
            
        </>
    )
}
