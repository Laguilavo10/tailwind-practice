import { useState } from "react"

export function FAQS() {
  const FAQS = ["Payment Methods", "Cancellation Policy", "Long Stays"]

  return (
    <>
    <section className="px-9 py-10 flex flex-col gap-5">

      <h2 className="text-4xl text-red-700">FAQS</h2>
      {FAQS.map((f) => (
        <article>
          <h3 className="text-red-700 text-2xl">{f}</h3>
          <p className="text-xl">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </article>
      ))}
    </section>
    </>
  )
}
