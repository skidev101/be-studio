'use client'

export function BookCallButton({className, text}: {className?: string, text?: string}) {
  const CALENDLY_URL = 'https://calendly.com/skidev101/30min'

  return (
    <a
      href={CALENDLY_URL}
      target="_blank" // open in new tab
      rel="noopener noreferrer" // security best practice
      className={`bg-[#1F4FD8] ${className} text-sm text-white rounded-full hover:bg-[#1a42b8] px-4 py-2 hover:px-5 hover:cursor-pointer transition-all`}
    >
      {text ? text : "Book an appointment"}
    </a>
  )
}
