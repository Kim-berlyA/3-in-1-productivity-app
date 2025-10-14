export default function Button({onClick, children}) {
  return (
    <button className="rounded-full cursor-pointer flex justify-center items-center shadow-lg size-12 bg-neutral-900/10 dark:bg-neutral-300/10 text-white"
      onClick={onClick}>
      {children}
    </button>
  )
}