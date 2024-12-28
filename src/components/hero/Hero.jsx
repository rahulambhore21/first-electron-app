import React from 'react'
import './Hero.css'
import arrow from '../../Assets/arrow_btn.png'
import pause_icon from '../../Assets/pause_icon.png'
import play_icon from '../../Assets/play_icon.png'
function Hero({heroData, heroCount, setHeroCount, setPlayStatus, playStatus}) {
  return (
    <div className="hero">
    <div className='herotext'>
        <p >{heroData.text1}</p>
        <p >{heroData.text2}</p>
    </div>
    <div className="heroExplorer">
        <p>Ok this is change in thtis</p>
        <img src={arrow}/>
    </div>
    <div className="dot-play">
        <ul>
            <li onClick={()=>{setHeroCount(0)}} className={heroCount===0?"hero-dot orange" : "hero-dot"} >.</li>
            <li onClick={()=>{setHeroCount(1)}} className={heroCount===1?"hero-dot orange" : "hero-dot"} >.</li>
            <li onClick={()=>{setHeroCount(2)}} className={heroCount===2?"hero-dot orange" : "hero-dot"} >.</li>
        </ul>
    <div className="play">
      <img onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus?pause_icon:play_icon} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Hero