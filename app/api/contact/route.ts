import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, projectType, message, acceptTerms } = body;

    const data = await resend.emails.send({
      from: 'Acme <info@contact.r2pro.ca>',
      to: ['info@r2pro.ca'],
      subject: 'Contact Form Submission',
      html: `<p><strong>First Name:</strong> ${firstName}</p>
             <p><strong>Last Name:</strong> ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Project Type:</strong> ${projectType}</p>
             <p><strong>Message:</strong> ${message}</p>
             <p><strong>Accept Terms:</strong> ${acceptTerms}</p>`,
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error });
  }
}
