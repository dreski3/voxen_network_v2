import React from 'react'
import './Home.css'
// import { Link } from 'react-router-dom';
// import Blocks from '../Blocks';
import HeroSection from '../HeroSection';
import FeaturedVolumes from '../FeaturedVolumes';
import PortalModal from '../Portal';

function Home() {
    return (
        <>
            <div>
                <PortalModal content='/ProjectName.gltf' visible={true}/>
                <HeroSection />
                <FeaturedVolumes />
            </div>
        </>
    )
}

export default Home;