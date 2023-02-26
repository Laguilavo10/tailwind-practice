import { useState } from 'react'

export function AboutUs(){
  return (
    <>
      <section className='px-10 py-4 bg-gray-200 border-2 border-gray-300'>
        <h2 className='text-gray-400 my-5 text-2xl font-bold'>About Us</h2>
        <ul className='flex flex-col gap-2'>
          <li className='text-gray-400 '>Investor</li>
          <li className='text-gray-400'>Jobs</li>
          <li className='text-gray-400'>Privacy policy</li>
          <li className='text-gray-400'>Terms and Conditions</li>
          <li className='text-gray-400'>Platzi Travel, inc</li>
          <li className='text-gray-400'>Follow Us</li>
        </ul>
      </section>
    </>
  )
}