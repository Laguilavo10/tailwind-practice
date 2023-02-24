import { useState } from "react"
import { CardRecomendation } from "../CardRecomendation"
import { IMAGES } from "../../utils/Recomendations"

export function Slider() {

  return (
    <>
      <section className="text-4xl text-white">
        <h2 className="p-11">Our Recomendations</h2>
        <ul className="flex gap-7 px-7 overflow-auto">
        {IMAGES.map((data)=>(
          <CardRecomendation data={data}/>
        ))}
        </ul>
      </section>
    </>
  )
}
