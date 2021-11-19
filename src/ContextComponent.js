import React, { useContext } from 'react';
import {ThemeContext} from './App'


function ContextComponent() {
    const darkTheme=useContext(ThemeContext); // tohle nam da hodnotu value z ThemeContextu. zde si ji nazveme darkTheme
    const themeStyles= {
        backgroundColor: darkTheme? '#333' : '#CCC',
        color: darkTheme? '#CCC' : '#333',
        margin: '10px',
        padding: '10px',
        width: '200px'
    }
    return(
        <div style={themeStyles}>Theme</div>
    )
}

export default ContextComponent;