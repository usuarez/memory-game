import React from 'react'
import BG from '../assets/bg.jpg'
import '../styles/styles.scss'

export default function Layout({children}) {
    return (
        <>
            <main className="fluid-container main" style={{backgroundImage: `url(${BG})`}} >
                {children}
            </main>
        </>
    )
}
