/** Single source of truth for contact details + booking links. */

export const PHONE_DISPLAY = "+44 7522 621248";
export const PHONE_RAW = "447522621248";
export const EMAIL = "hannaelizabethyoung93@gmail.com";

/** Builds a WhatsApp deep link with an optional pre-filled message. */
export function whatsapp(message?: string): string {
  const base = `https://wa.me/${PHONE_RAW}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailto(subject?: string): string {
  return subject
    ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${EMAIL}`;
}
