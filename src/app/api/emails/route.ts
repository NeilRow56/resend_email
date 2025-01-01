import Welcome from '@/emails/Welcome'
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email, firstName } = await request.json()
  await resend.emails.send({
    from: 'admin@wpaccpac.org',
    to: email,
    subject: 'Welcome',
    react: Welcome({ firstName })
  })
}
