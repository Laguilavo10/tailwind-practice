import { useState } from "react"

export function FAQS() {
  const FAQS = ["Payment Methods", "Cancellation Policy", "Long Stays"]

  return (
    <>
    <section id="FAQS" className="px-9 py-10 flex flex-col gap-5">

      <h2 className="text-4xl text-redBrand">FAQS</h2>
      {FAQS.map((f, i) => (
        <article key={i}>
          <h3 className="text-redBrand text-2xl">{f}</h3>
          <p className="text-xl">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </article>
      ))}
    </section>
    </>
  )
}
