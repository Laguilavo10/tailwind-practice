import { useState } from "react"
import { HomeSVG, SearchSVG, HeartSVG, UserSVG } from "../Icons"

function ItemNavBar({isActive, data, setIsActive }) {
  let {location, svg} = data
  return (
    <>
      <a
        href={`#${location}`}
        className="cursor-pointer"
        onClick={()=>(setIsActive(data.location))}
      >
        {svg(isActive)}
      </a>
    </>
  )
}

export function NavBar() {
  const LINKS = [
    { location: "main", svg: HomeSVG },
    { location: "recomendations", svg: SearchSVG },
    { location: "trendings", svg: HeartSVG },
    { location: "FAQS", svg: UserSVG },
  ]

  let location = window.location.hash.slice(1)
  const [isActive, setIsActive] = useState(location)

  return (
    <>
      <nav className="sm:hidden fixed bottom-0 z-20 flex w-screen justify-center gap-11 bg-white p-6">
        {LINKS.map((link) => (
          <ItemNavBar key={link.location}isActive={isActive == link.location} setIsActive={setIsActive} data={link}/>
        ))}
      </nav>
    </>
  )
}
