import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import ContactFormSchema from './validations/contactValidation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData = ContactFormSchema.parse(req.body);

      const { nombre, email, asunto, mensaje } = formData;

      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PASS,
        },
      });

      await transporter.sendMail({
        from: email,
        to: 'felipeburboa1991@gmail.com',
        subject: asunto,
        html: `<h1>Nombre: ${nombre}</h1>
        <h1>Email: ${email}</h1>
        <h1>Mensaje: ${mensaje}</h1>
        `
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
