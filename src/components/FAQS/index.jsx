import { useState } from "react"

export function FAQS() {
  const FAQS = ["Payment Methods", "Cancellation Policy", "Long Stays"]

  return (
    <>
      <section id="FAQS" className="flex flex-col gap-5 px-9 py-10">
        <h2 className="text-4xl text-primary dark:text-white">FAQS</h2>
        {FAQS.map((f, i) => (
          <article key={i}>
            <h3 className="text-2xl text-primary dark:text-white pb-3">{f}</h3>
            <p className="text-xl dark:text-white">
              We accept VISA, MasterCard, American Express, Paypal and Binance
            </p>
          </article>
        ))}
      </section>
    </>
  )
}
