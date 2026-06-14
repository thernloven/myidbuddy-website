import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.WAITLIST_FROM || "myID buddy <hello@myidbuddy.com>";
const NOTIFY = process.env.WAITLIST_NOTIFY || "hello@myidbuddy.com";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function welcomeHtml() {
  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#ffffff;padding:32px;color:#1A2332">
    <div style="max-width:480px;margin:0 auto;text-align:center">
      <h1 style="font-size:24px;margin:0 0 8px">You're on the list ✈️</h1>
      <p style="color:#8E929A;font-size:15px;line-height:1.5;margin:0 0 24px">
        Thanks for joining the <strong style="color:#F46C8B">myID buddy</strong> waitlist.
        We'll let you know the moment you can find your standby crew.
      </p>
      <div style="display:inline-block;background:#F46C8B;color:#fff;font-weight:600;
                  padding:12px 22px;border-radius:999px;font-size:14px">
        See you on the map 🗺️
      </div>
      <p style="color:#B7BBC2;font-size:12px;margin-top:28px">
        You received this because you signed up at myidbuddy.com
      </p>
    </div>
  </div>`;
}

export async function POST(req) {
  let email;
  try {
    ({ email } = await req.json());
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  email = (email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Email service not configured." }, { status: 500 });
  }

  try {
    // Welcome the subscriber
    const { error } = await resend.emails.send({
      from: FROM,
      to: email,
      subject: "You're on the myID buddy waitlist ✈️",
      html: welcomeHtml(),
    });
    if (error) {
      console.error("Resend (welcome) error:", error);
      return Response.json({ error: "Could not join right now. Try again." }, { status: 502 });
    }

    // Notify the team (best-effort)
    await resend.emails
      .send({
        from: FROM,
        to: NOTIFY,
        subject: `New waitlist signup: ${email}`,
        text: `${email} just joined the myID buddy waitlist.`,
      })
      .catch((e) => console.error("Resend (notify) error:", e));

    return Response.json({ ok: true });
  } catch (e) {
    console.error("Waitlist error:", e);
    return Response.json({ error: "Could not join right now. Try again." }, { status: 500 });
  }
}
