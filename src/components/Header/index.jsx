import { useState } from "react"
import { SearchSVG, UserSVG } from "../Icons"

export function Header({children}) {
  return (
    <>
      <header className="flex justify-between p-[25px] font-bold text-primary dark:text-white max-sm:hidden">
        <div className="flex">Platzi Travel</div>
        <ul className="flex gap-5">
          <li>Locations</li>
          <li>Stays</li>
          <li>FA QS</li>
          <li>AboutUs</li>
        </ul>
        <div className="flex gap-5">
          {children}
          <a className="cursor-pointer" href="#recomendations">{SearchSVG(true)}</a>
          {/* <a className="cursor-pointer" href="#recomendations">{UserSVG(true)}</a> */}
        </div>
      </header>
    </>
  )
}
