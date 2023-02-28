import { CardRecomendation } from "../CardRecomendation"
import { RECOMENDATIONS } from "../../utils/Recomendations"

export function Recomendations() {
  return (
    <>
      <section id="recomendations" className="text-4xl text-white">
        <h2 className="p-11 text-primary dark:text-white">Our Recomendations</h2>
        <ul className="flex snap-x gap-7 overflow-x-scroll px-7">
          {RECOMENDATIONS.map((data, i) => {
            let color = i % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
            return (
              <CardRecomendation data={data} key={data.title} color={color} />
            )
          })}
        </ul>
      </section>
    </>
  )
}
