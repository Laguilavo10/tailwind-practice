import { useState } from "react"
import { MoonSVG } from "../Icons"

export function DarkMode() {
  const handleTheme = ()=>{
    window.document.children[0].classList.toggle('dark')
  }

  
  return (
    <>
      <button
        onClick={handleTheme}
        className="absolute z-20 cursor-pointer rounded-full bg-white px-5 py-3 top-4 right-14 sm:bg-transparent"
      >
        {MoonSVG(true)}
      </button>
    </>
  )
}
