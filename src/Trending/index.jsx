import { useState } from "react"
import { TRENDINGS } from "../utils/Recomendations"
export function Trending() {
  const positions = [
    "sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-4",
    "sm:row-start-2 sm:row-end-4 sm:col-start-1 sm:col-end-2",
    "sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-4",
    "sm:row-start-3 sm:row-end-4 sm:col-start-2 sm:col-end-4",
  ]

  return (
    <>
      <section id="trendings" className="text-4xl text-white">
        <h2 className="p-11 text-primary ">Trending Stays</h2>
        <ul className="grid auto-rows-[400px] grid-cols-1 gap-12 px-9 sm:auto-rows-[350px] sm:grid-cols-3 ">
          {TRENDINGS.map((card, i) => {
            let position = positions[i]
            return (
              <li
                key={card.title}
                className={`relative flex flex-col gap-3 overflow-hidden rounded-3xl bg-violet-700 py-12 px-6 ${position}`}
              >
                <img
                  src={card.image}
                  className="absolute top-0 left-0 h-full w-full object-cover spacing "
                />
                <p className="relative z-10 font-bold drop-shadow-xl">{card.title}</p>
                <div className="relative z-10 max-w-[230px] text-base drop-shadow-lg text">
                  {card.description}
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
