'use client'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <h1>Home Page</h1>

      <Button
        className='bg-blue-500'
        onClick={async () => {
          await fetch('/api/emails', {
            method: 'POST',
            body: JSON.stringify({
              email: 'neilrowland56@gmail.com',
              firstName: 'Neil'
            })
          })
        }}
      >
        Send Email
      </Button>
    </div>
  )
}
