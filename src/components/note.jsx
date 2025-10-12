export default function Note({children}) {
  return (
    <div className="min-w-44 w-fit h-44 bg-yellow-300/40 rounded-md mt-3 flex-1">
      {children}
    </div>
  )
}