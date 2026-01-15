'use client'

export function BookCallButton({className, text}: {className?: string, text?: string}) {
  const CALENDLY_URL = 'https://calendly.com/skidev101/30min'
  // [#1F4FD8]

  return (
    <a
      href={CALENDLY_URL}
      target="_blank" // open in new tab
      rel="noopener noreferrer" // security best practice
      className={`bg-blue-accent  ${className} text-sm text-white rounded-full hover:bg-blue-accent/80 px-4 py-2 hover:px-5 hover:cursor-pointer transition-all`}
    >
      {text ? text : "Book an appointment"}
    </a>
  )
}
