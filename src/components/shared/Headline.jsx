function Headline({children, className}) {
  return (
    <h2 className={`font-semibold leading-[1.3] text-[34px] md:text-[50px] tracking-[-2px] ${className}`}>{children}</h2>
  )
}
export default Headline