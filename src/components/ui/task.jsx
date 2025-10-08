export default function Task({children, ...props}) {
  if (children.length === 0) {
    return null;
  }

  return (
    <ul 
      {...props}
      className="w-full mt-4 flex flex-col gap-1">
      {children}
    </ul>
  )
}