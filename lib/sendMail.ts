import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendMail = async ({ to, subject, html }: MailOptions) => {
  const from = process.env.FROM_EMAIL || "onboarding@resend.dev";
  
  if (!process.env.RESEND_API_KEY) {
    console.warn("Brak RESEND_API_KEY. Używam testowego mocka.");
    return Promise.resolve(true); // Mocowanie, gdy brak klucza w dev
  }

  return transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
};
