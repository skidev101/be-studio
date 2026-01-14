const CALENDLY_URL = 'https://calendly.com/skidev101/30min'

export function openCalendly() {
  if (typeof window === 'undefined') return
  if (!window.Calendly) return

  // Prevent multiple overlays
  if (document.querySelector('.calendly-overlay')) return

  window.Calendly.initPopupWidget({ url: CALENDLY_URL })
}
