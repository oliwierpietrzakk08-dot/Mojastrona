import { NextResponse } from "next/server";
import { sendMail } from "@/lib/sendMail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Prosta walidacja
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wymagane pola to: imię i nazwisko, email, wiadomość." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Nieprawidłowy adres email." },
        { status: 400 }
      );
    }

    const toEmail = process.env.TO_EMAIL || "twoj_email_agencji@example.com";
    const agencjaName = "[NAZWA AGENCJI]";

    // Mail A: Powiadomienie do właściciela agencji
    const adminEmailHtml = `
      <h2>Nowe zapytanie z formularza kontaktowego</h2>
      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "Brak"}</p>
      <br />
      <p><strong>Wiadomość:</strong></p>
      <p>${message}</p>
      <hr />
      <p><small>Data wysłania: ${new Date().toLocaleString("pl-PL")}</small></p>
    `;

    const adminMailPromise = sendMail({
      to: toEmail,
      subject: `Nowe zapytanie od ${name} — ${agencjaName}`,
      html: adminEmailHtml,
    });

    // Mail B: Autoodpowiedź do klienta
    const clientEmailHtml = `
      <div style="font-family: sans-serif; color: #111111; max-width: 600px; margin: 0 auto; line-height: 1.6;">
        <h2 style="color: #1A2744; font-size: 24px; font-weight: normal; margin-bottom: 24px;">
          Dziękujemy za kontakt, ${name}!
        </h2>
        <p>Potwierdzamy otrzymanie Twojej wiadomości.</p>
        <p>Nasz zespół zapozna się z nią i <strong>odepisze w ciągu 24 godzin roboczych</strong>, aby omówić szczegóły i przedstawić plan działania.</p>
        <br />
        <p>W międzyczasie zachęcamy do śledzenia nas w mediach społecznościowych.</p>
        <br />
        <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 32px 0;" />
        <p style="font-size: 14px; color: #6B7280; line-height: 1.8;">
          Z pozdrowieniami,<br />
          <strong>Zespół ${agencjaName}</strong><br />
          <a href="mailto:kontakt@agencja.pl" style="color: #1A2744; text-decoration: none;">kontakt@agencja.pl</a> | +48 123 456 789
        </p>
      </div>
    `;

    const clientMailPromise = sendMail({
      to: email,
      subject: `Dziękujemy za wiadomość — ${agencjaName}`,
      html: clientEmailHtml,
    });

    // Wysłanie równoległe (Promise.all)
    await Promise.all([adminMailPromise, clientMailPromise]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Błąd podczas obsługi formularza kontaktowego:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości." },
      { status: 500 }
    );
  }
}
