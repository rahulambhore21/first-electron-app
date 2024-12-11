import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/background/Background'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import { use } from 'react'



function App() {



  const heroData = [
    { text1: "Go Electric", text2: "Zero emissions, max performance." },
    { text1: "Charge Fast", text2: "Quick power, long range." },
    { text1: "Eco Drive", text2: "Green, clean, and stylish." },
  ];
  
  
  const [heroCount, setHeroCount] = useState(2)
  const [playStatus , setPlayStatus] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [])


  return (
    <>
      <Background setHeroCount={setHeroCount} heroCount={heroCount} playStatus={playStatus} />
      <Navbar/>
      <Hero 
      setHeroCount={setHeroCount}
      heroCount={heroCount}
      heroData={heroData[heroCount]}
      setPlayStatus={setPlayStatus}
      playStatus={playStatus}
      />
    </>
  )
}

export default App
