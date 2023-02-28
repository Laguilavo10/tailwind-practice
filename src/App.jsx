import { AboutUs } from "./components/AboutUs"
import { Banner } from "./components/Banner"
import { DarkMode } from "./components/DarkMode"
import { FAQS } from "./components/FAQS"
import { Header } from "./components/Header"
import { NavBar } from "./components/NavBar"
import { Recomendations } from "./components/Recomendations"
import { Trending } from "./Trending"

function App() {
  return (
    <>
      <Header>
      </Header>
        <DarkMode/>
      <Banner>
        {/* <DarkMode/> */}
      </Banner>
      <Recomendations />
      <Trending />
      <FAQS />
      <AboutUs />
      <NavBar />
    </>
  )
}

export default App
