function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-34 ${className}`}>
      {children}
    </div>
  )
}
export default Container