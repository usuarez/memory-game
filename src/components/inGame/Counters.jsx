import React, { useContext } from 'react'
import TextBox from '../TextBox'
import { UserContext } from '../UserContext'

export default function Counters() {
    const {user} = useContext(UserContext)
    return (
        <div className="container pt-3 pb-3 d-flex justify-content-around">
            <TextBox  text={`Intentos ${user.movements}`} />
            <TextBox bgcolor="orange-color" text={`Racha ${user.hitsInRow}`} />
        </div>
    )
}
