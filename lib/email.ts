/**
 * Transactional email via Resend's REST API. Plain fetch - no SDK
 * dependency. Env: RESEND_API_KEY (secret) and EMAIL_FROM (a verified
 * sender on the Resend domain, e.g. "Be In The Know <no-reply@example.org>").
 *
 * In development without RESEND_API_KEY the email body is logged to the
 * console instead of sent, so the reset flow is testable locally. In
 * production a missing key fails loudly - never silently drop email.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export type OutboundEmail = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export async function sendEmail(email: OutboundEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "Missing RESEND_API_KEY or EMAIL_FROM - transactional email is not configured.",
      );
    }
    console.info(
      `[dev email] to=${email.to} subject=${email.subject}\n${email.text}`,
    );
    return { delivered: false as const };
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email.to],
      subject: email.subject,
      text: email.text,
      html: email.html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Resend rejected the email (${response.status}): ${detail.slice(0, 300)}`,
    );
  }

  return { delivered: true as const };
}
