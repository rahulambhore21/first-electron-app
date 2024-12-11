import React from 'react'
import './Background.css'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import video1 from '../../Assets/video1.mp4'

function Background({heroCount, playStatus}) {


   

    if (playStatus) {
        return(
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount === 0){
        return(
            <img className='background fade-in' src={image1} alt='background' />
        )
    }
    else if (heroCount === 1){
        return(
            <img className='background fade-in' src={image2} alt='background' />
        )
        
    }

    else if(heroCount === 2){
        return(
            <img className='background fade-in' src={image3} alt='background' />
        )
    }
}

export default Background