import { useState } from 'react'
import { Button, buttonVariants } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'

const SignupForm = () => {
  const [state, setState] = useState<string>()

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setState('loading...')
    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        firstname: 'Cosmo'
      })
    })
    setTimeout(() => {
      setState('ready')
    }, 1500)
  }

  return (
    <form onSubmit={handleOnSubmit} className='flex flex-col gap-4'>
      <Label htmlFor='name'>Name</Label>
      <Input id='name' />
      <Label htmlFor='email'>Email</Label>
      <Input id='email' />
      <Button className={buttonVariants()} disabled={state === 'loading'}>
        Sign Up{' '}
      </Button>
    </form>
  )
}
