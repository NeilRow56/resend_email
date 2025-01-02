import ContactForm from '@/components/forms/ContactForm'
import React from 'react'

export default function ContactPage() {
  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <h1 className='mb-10 text-center font-serif text-3xl font-medium'>
          Contact us
        </h1>
        <ContactForm />
      </div>
    </section>
  )
}
