export const Pill = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center max-w-max gap-2 px-4 text-xs uppercase py-2 text-[#5e6c80] bg-blue-50 rounded-full border border-gray-100">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />

      {text}
    </div>
  )
}