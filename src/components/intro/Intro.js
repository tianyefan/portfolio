import React from 'react'
import "./intro.scss"
import { init } from 'ityped';

export default function Intro() {

    const textRef = React.useRef();

    React.useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings: ['programming', 'music', 'video editing', 'video games']
        });
    },[]);

    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/Turing.jpeg' alt=''/>
                    
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi there, I'm</h2>
                    <h1>Tianye Fan</h1>
                    <h3>I am intersted in <span ref={textRef}></span></h3>
                </div>

                <a href="#portfolio">
                    <img src='assets/down.png' alt=""/> 
                </a>
            </div>
        </div>
    )
}
