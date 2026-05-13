// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, telefono, email, mensaje } = await request.json();

    // Email al dueño
    await resend.emails.send({
      from: 'Vitrina Motors <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo mensaje de contacto — ${nombre}`,
      html: `
        <h2>Nuevo mensaje desde Vitrina Motors</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    // Confirmación al visitante
    await resend.emails.send({
      from: 'Vitrina Motors <onboarding@resend.dev>',
      to: email,
      subject: 'Recibimos tu mensaje — Vitrina Motors',
      html: `
        <h2>¡Hola ${nombre}!</h2>
        <p>Recibimos tu mensaje y te contactaremos pronto.</p>
        <p>Mientras tanto, puedes escribirnos por WhatsApp al <strong>+57 320 970 7460</strong>.</p>
        <br/>
        <p>— Equipo Vitrina Motors</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ ok: false, error: 'Error al enviar' }, { status: 500 });
  }
}