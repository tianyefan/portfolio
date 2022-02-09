import React from 'react';
import "./topbar.scss";
import {Person, Mail, GitHub, LinkedIn, Whatshot} from "@material-ui/icons";
import Link from '@material-ui/core/Link';
export default function Topbar({menuOpen, setMenuOpen}) {

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
                    <Link href="#intro" >
                        <Whatshot  className='logo'/>
                    </Link>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>(408) 596 6270</span>
                    </div>
                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>richardye980718@gmail.com</span>
                    </div>
                    <div className='itemContainer'>
                        <Link href="https://github.com/tianyefan" target="_blank" >
                            <GitHub className='icon' />
                        </Link>  
                    </div>
                    <div className='itemContainer'>
                        <Link href="https://www.linkedin.com/in/richardfan98" target="_blank" >
                            <LinkedIn className='icon' />
                        </Link>  
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
