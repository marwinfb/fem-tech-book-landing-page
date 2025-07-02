
function Button({children, type}) {
  return (
    <a href="#" className={`inline-flex justify-center items-center gap-4 font-primary px-[23px] py-[21.5px] rounded-lg border-2 uppercase font-semibold text-base leading-[1.3] tracking-[-1px] w-full cursor-pointer ${ type === 'contained' ? 'bg-primary-neutral-900 text-white border-primary-neutral-900' : type === 'outlined' ? 'bg-transparent text-primary-neutral-000 border-primary-neutral-000' : 'bg-secondary-light-salmon-050 border-primary-neutral-900'}`}>{children}</a>
    )
}``
export default Button