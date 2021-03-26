import React from 'react'

export default function TextBox({bgcolor, text, wsize, hsize, fsize, textcolor}) {
    return (
            <div style={{width: `${wsize}px`, height: `${hsize || '36'}px`, cursor: 'pointer'}} className={`textBox-kids ${bgcolor || 'green-color'}`}>
                <div style={{width: `${wsize}px`, height: `${hsize || '36'}px`}}  className="bubbles">
                    <div className="bubble-w bwo"></div>
                    <div className="bubble-w bwt"></div>
                </div>
                <div style={{width: `${wsize}px`, height: `${hsize || '36'}px`}}  className="texts d-flex justify-content-center">
                <span style={{width: `${wsize}px`, lineHeight: `${hsize || '36'}px`, color: `${textcolor || 'rgb(31, 35, 49)'}`, fontSize: `${fsize || 18}px`}} >{text}</span>
                </div>
            </div>
    )
}
