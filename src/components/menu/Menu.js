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
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#works'>Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}> 
                    <a href='#testimonials'>Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
