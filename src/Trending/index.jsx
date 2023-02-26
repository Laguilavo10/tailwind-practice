import { useState } from "react"
import { TRENDINGS } from "../utils/Recomendations"
export function Trending() {
  return (
    <>
      <section id="trendings" className="text-4xl text-white">
        <h2 className="p-11">Trending Stays</h2>
        {/* <ul className="grid grid-cols-3 auto-rows-[150px] gap-12 p-9">
          <li className="overflow-hidden relative col-start-1 col-end-4 row-start-1 row-end-3 bg-violet-700 rounded-3xl">
            <img src={chicago} className="absolute object-cover w-full h-full" />
          </li>
        </ul> */}
        <ul className="grid auto-rows-[400px] grid-cols-1 gap-12 px-9">
          {TRENDINGS.map((card) => (
            <li key={card.title} className="relative overflow-hidden rounded-3xl bg-violet-700 py-12 px-6 gap-3 flex flex-col text">
              <img
                src={card.image}
                className="absolute h-full w-full object-cover top-0 left-0"
              />
              <p className="relative z-10 font-bold">{card.title}</p>
              <div className="relative z-10 text-base max-w-[230px]">{card.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
