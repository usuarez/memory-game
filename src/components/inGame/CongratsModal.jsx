import React from 'react'
import { useHistory } from 'react-router'
import TextBox from '../TextBox'

export default function CongratsModal({newGame, setModal}) {
    const history = useHistory()
    const handleClick = ()=> {
        newGame()
        setModal(false)

    }
    return (
        <div className="modal-container d-flex justify-content-center align-items-center">
            <div className="modal d-flex flex-column justify-content-center align-items-center">
                <h2 className="pb-5">Felicidades lo lograste!</h2>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div onClick={handleClick} className="pb-5">
                        <TextBox text="Jugar de nuevo" fsize="21" wsize="220" bgcolor="complementary-color"/>
                    </div>
                    <div onClick={()=>{history.push('/')}}>
                        <TextBox text="Salir" wsize="100" fsize="21" bgcolor="red-color" textcolor="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
