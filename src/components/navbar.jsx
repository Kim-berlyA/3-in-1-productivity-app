export default function NavBar({children, ...props}) {
  return (
    <nav
      {...props}
      className="w-fit border border-gray-300 py-1.5 px-2 rounded-full md:hidden"
    >
      {children}
    </nav>
  )
}