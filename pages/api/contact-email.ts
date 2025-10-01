import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // Configure SMTP transport with environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `[Contact Web] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Erreur envoi email:', error);
    return res.status(500).json({ error: error?.message || 'Failed to send email', details: error });
  }
}
