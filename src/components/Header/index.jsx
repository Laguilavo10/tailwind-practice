import { useState } from "react"

export function Header() {

  return (
    <>
      <header className="flex justify-between p-[25px] text-white font-bold">
        <div className="flex">Platzi Travel</div>
        <div>
          <ul>
            <li>Locations</li>
            <li>Stays</li>
            <li>FAQS</li>
            <li>AboutUs</li>
          </ul>
        </div>
        <div>
          <img src="" alt="i" />
          <img src="" alt="i" />
          <img src="" alt="i" />
        </div>
      </header>
    </>
  )
}
