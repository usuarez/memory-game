import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import Board from '../components/inGame/Board'
import Counters from '../components/inGame/Counters'
import Score from '../components/inGame/Score'
import Layout from '../components/Layout'
import TextBox from '../components/TextBox'
import { UserContext } from '../components/UserContext'


export default function GamePage() {
    const history = useHistory()
    const {user} = useContext(UserContext)
    return (
        <Layout>
            <div className="container inGame d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 top pt-4 d-flex justify-content-center align-items-center">
                    <div onClick={()=>{history.push('/')}}>
                        <TextBox text="X" wsize="36" fsize="24" bgcolor="red-color" />
                    </div>
                    <h1 className="pl-3">Hola, {user.userName}</h1>
                </div>
                <Board />
                <Counters />
                <Score />
            </div>
        </Layout>
    )
}
