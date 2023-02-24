export function CardRecomendation({ data }) {
  let { image, title, description } = data
  return (
    <>
      <li className="min-h[256px] mb-4 min-w-[256px] snap-center overflow-hidden rounded-xl bg-gray-700 shadow-2xl">
        <img
          src={image}
          alt={title}
          className="h-3/5 w-full object-cover object-center"
        />
        <div className="flex flex-col gap-3 p-4">
          <p className="text-2xl">{title}</p>
          <span className="text-base">{description}</span>
        </div>
      </li>
    </>
  )
}
