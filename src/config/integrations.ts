/**
 * ─── EmailJS ────────────────────────────────────────────────────────────────
 * EmailJS is a pure client-side service: your browser calls EmailJS's own API
 * directly (https://api.emailjs.com) using their JS SDK. It doesn't care what
 * served the HTML/JS around it — a static Vite build, or a WordPress theme
 * that enqueues this same compiled bundle — works identically either way.
 * There's nothing WordPress-specific that would block it.
 *
 * To wire this up for real:
 * 1. Create a free account at https://www.emailjs.com
 * 2. Add an Email Service (e.g. Gmail, Outlook, or SMTP) — this becomes SERVICE_ID
 * 3. Create two templates:
 *    - one sent TO the office (office@stgeorgesparis.org) with the visitor's
 *      details — this becomes TEMPLATE_ID_OFFICE
 *    - one sent TO the visitor confirming receipt — this becomes
 *      TEMPLATE_ID_AUTOREPLY (set the "To email" field in this template to
 *      {{reply_to}}, which we pass in below)
 * 4. Copy your Public Key from Account > General — this becomes PUBLIC_KEY
 * 5. Paste all four values in below.
 */
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
  TEMPLATE_ID_OFFICE: 'YOUR_EMAILJS_OFFICE_TEMPLATE_ID',
  TEMPLATE_ID_AUTOREPLY: 'YOUR_EMAILJS_AUTOREPLY_TEMPLATE_ID',
  // Separate template for baptism/confirmation enquiries, since the fields
  // differ from the general contact form — create this the same way as the
  // other two templates in your EmailJS dashboard.
  TEMPLATE_ID_BAPTISM: 'YOUR_EMAILJS_BAPTISM_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
};

/**
 * ─── Mailchimp ──────────────────────────────────────────────────────────────
 * This uses Mailchimp's classic "embedded form" pattern: a plain HTML form
 * that POSTs directly to your Mailchimp audience — no API key needed in the
 * browser, no backend required, works the same in React or WordPress.
 *
 * To wire this up for real:
 * 1. In Mailchimp: Audience > Signup forms > Embedded forms
 * 2. Grab the form's "action" URL — it looks like:
 *    https://xxxx.usXX.list-manage.com/subscribe/post?u=XXXXXXXX&id=XXXXXXXX
 * 3. The "u" and "id" values go below. The hidden honeypot field name in the
 *    form uses the same u/id (Mailchimp's bot-catcher — leave it blank,
 *    never let a real user fill it).
 */
export const MAILCHIMP_CONFIG = {
  FORM_ACTION: 'https://stgeorgesparis.us1.list-manage.com/subscribe/post?u=YOUR_U_VALUE&id=YOUR_LIST_ID',
  HONEYPOT_NAME: 'b_YOUR_U_VALUE_YOUR_LIST_ID',
};
