import React from 'react'
import "./menu.scss"


export default function Menu({ menuOpen, setMenuOpen }) {

    var Menu = '';
    if(menuOpen === true) {
        Menu = 'menu active';
    }else{
        Menu = 'menu';
    }

    return (
        <div className={Menu}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#portfolio'>Porjects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
