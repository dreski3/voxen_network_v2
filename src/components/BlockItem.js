import React from 'react'
import './BlockItem.css'

function BlockItem(props) {
    return (
        
        <>
            <li className='block'>
                <div className='volume-container' >
                    <figure className='block_item' >
                        <img src='/cube.png' alt='volume' className='block_item_image' />
                    </figure>
                </div>
            </li>
            
        </>
        
    )
}

export default BlockItem