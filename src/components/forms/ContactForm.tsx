'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { toast } from 'sonner'
import { ContactFormSchema } from '@/lib/schemaValidation'
import { sendEmail } from '@/app/_actions'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<ContactFormInputs> = async data => {
    const result = await sendEmail(data)

    if (result?.success) {
      console.log({ data: result.data })
      toast.success('Email sent!')
      reset()
      return
    }

    // toast error
    console.log(result?.error)
    toast.error('Something went wrong!')
  }

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className='mx-auto flex flex-1 flex-col gap-4 text-gray-600 sm:w-1/2 lg:w-1/3'
    >
      <div>
        <Input
          placeholder='name'
          className='w-full rounded-lg'
          {...register('name')}
        />
        {errors.name?.message && (
          <p className='ml-1 mt-1 text-sm text-red-400'>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Input
          placeholder='email'
          className='w-full rounded-lg'
          {...register('email')}
        />
        {errors.email?.message && (
          <p className='ml-1 mt-1 text-sm text-red-400'>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Textarea
          rows={5}
          cols={5}
          placeholder='message'
          className='w-full rounded-lg'
          {...register('message')}
        />
        {errors.message?.message && (
          <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
        )}
      </div>

      <Button
        disabled={isSubmitting}
        className='rounded-lg border border-black bg-black py-2.5 font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}
