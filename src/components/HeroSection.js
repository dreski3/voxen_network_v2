import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import CanvasHolder from './CanvasHolder';
import './pages/Home.css'
import SendFleek from './sendFleek';
import PortalSubmit from './PortalSubmit';

function HeroSection() {

    const [isVisible, setVisible] = useState(false)

    const handleButton = (e) => {
        e.preventDefault();
        setVisible(!isVisible)
    }

    return (
        <div className='hero-container'>
            <header>
                    <nav>
                        <a className='nav' href='#'>Start</a>
                    </nav>
            </header>

            <div className='hero-section'>
                
                <div className='box_1'>
                    <div className='logo-frame'>
                        <CanvasHolder content='/ProjectName.gltf'/>
                    </div>  
                    <div className='box_1_1'>                
                        <form method='GET' role='search'>
                            <input className='search_bar' type='text' placeholder='Search...'/>
                            <button onClick={handleButton} className='cube-button'>
                                <img src={'/cube.png'} className='cube' />
                            </button>
                            
                        </form>
                        <PortalSubmit visible={isVisible}>
                            <SendFleek />
                        </PortalSubmit>
                        <h1 className='font'>Welcome to Voxen Network.</h1>
                        <h2 className='font'>The Republic of 3D Models.</h2>
                    </div> 
                </div>

                <div className='box_2'>
                    <Link to='/categories' className='buttom_1'>
                        Categories 
                    </Link>
                    <Link to='/library' className='buttom_1'>   
                        Library
                    </Link>
                    
                </div>

                <h2 className='font'>Featured Volumes</h2>
            </div>
        </div>
    )
}

export default HeroSection;