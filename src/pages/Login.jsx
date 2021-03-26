import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import Layout from '../components/Layout'
import TextBox from '../components/TextBox'
import { UserContext } from '../components/UserContext'

function Login() {
    const {user, setUser} = useContext(UserContext)
    const handleInputChange = (e) => {
        let userName = e.target.value.trim()
        setUser({...user, userName})
    }

    const handleDifficultChange = (e)=> {
        e.target.textContent === 'Facil' && setUser({...user, difficult: 'easy'})
        e.target.textContent === 'Normal' && setUser({...user, difficult: 'med'})
        e.target.textContent === 'Dificil' && setUser({...user, difficult: 'hard'})
    }
    const history = useHistory()
    const handleStartGame = (e)=> {
        history.push('/game')
    }


    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="login-page col-12 inGame d-flex flex-column align-items-center justify-content-center">
                        <h1 className="title">MEMORY FOR<br/> <span className="title-big">Kids</span> </h1>
                        <div className="col-10 text-field d-flex flex-column pb-5">
                            <span className="login-label pb-1">Escribe tu nombre</span>
                            <input className="login-input" onChange={handleInputChange} value={user.userName} type="text" />
                        </div>
                        <div className="difficult pt-1 col-10 pb-5">
                            <h3>Dificultad</h3>
                            <div onClick={handleDifficultChange} className="diff-buttons pt-3 d-flex justify-content-around">
                                <TextBox 
                                    bgcolor={ (user.difficult === 'easy') ? 'complementary-color' : 'main-color' } 
                                    text="Facil"  wsize="70" textcolor={(user.difficult !== 'easy') ? 'white' : null} />
                                <TextBox 
                                    bgcolor={ (user.difficult === 'med') ? 'complementary-color' : 'main-color' } 
                                    text="Normal"  wsize="70" textcolor={(user.difficult !== 'med') ? 'white' : null} />
                                <TextBox 
                                    bgcolor={ (user.difficult === 'hard') ? 'complementary-color' : 'main-color' } 
                                    text="Dificil"  wsize="70" textcolor={(user.difficult !== 'hard') ? 'white' : null} />
                            </div>
                        </div>
                        <div className="pt-5" onClick={handleStartGame}>
                            <TextBox 
                            
                            text="Empezar" wsize="260" 
                            bgcolor="main-color" textcolor="white"
                            hsize="48" fsize="28" />
                        </div>
                        <div className="pt-5">
                            <TextBox 
                            text="Info" wsize="100" bgcolor="red-color" 
                            textcolor="white" hsize="36" />
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Login
