import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Banner } from './components/Banner'
import { FAQS } from './components/FAQS'
import { Header } from './components/Header'
import { Slider } from './components/Slider'
import { Trending } from './Trending'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <Slider/>
    <Trending/>
    <FAQS/>
    </>
  )
}

export default App
