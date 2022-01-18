import React from 'react';
import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
   
    //const [menuOpen, setMenuOpen] = React.useState(false);

    var bar = '';
    if(menuOpen === true) {
        bar = 'topbar active';
    }else{
        bar = 'topbar';
    }

    function toggle() {
        setMenuOpen(preState => !preState);
    }


    return (
        <div className={bar}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>Tianye</a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>(408) 596 6270</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>richardye980718@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                        <div className='hambuger' onClick={toggle}>
                            <span className='line1'></span>
                            <span className='line2'></span>
                            <span className='line3'></span>
                        </div>
                </div>
            </div>
        </div>
    )
}
