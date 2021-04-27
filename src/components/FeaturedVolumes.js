import React from 'react'
import BlockItem from './BlockItem'
import './FeaturedVolumes.css'

function FeaturedVolumes() {
    return (
        <div className='blocks'>
            <ul className='block_items'>
                <BlockItem />
                <BlockItem />
                <BlockItem />
                <BlockItem />
            </ul>
        </div>
    )
}

export default FeaturedVolumes;