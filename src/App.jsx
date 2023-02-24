import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    </>
  )
}

export default App
