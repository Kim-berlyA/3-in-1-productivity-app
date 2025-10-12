export default function Button({onClick, children}) {
  return (
    <button className="rounded-full cursor-pointer flex justify-center items-center shadow-lg size-12 bg-neutral-900/20 text-white"
      onClick={onClick}>
      {children}
    </button>
  )
}