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

  // Configure your SMTP transport (use Gmail for demo, but ideally use a real SMTP)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mahrougsalim8@gmail.com', // Your Gmail address
      pass: 'rglwyoujxkvckgit', // Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'mahrougsalim8@gmail.com',
      subject: `[Contact Web] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
